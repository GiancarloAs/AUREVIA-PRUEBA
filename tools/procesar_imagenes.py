#!/usr/bin/env python3
"""
Procesa las fotos originales de AUREVIA para la web.

Uso:
  1. Guarda cada foto descargada en la carpeta  originales/  con el MISMO nombre
     que figura en tools/imagenes-seo.json (la extensión puede ser .jpg/.jpeg/.png/.webp).
     Ejemplo: originales/destino-machu-picchu-01.jpg
  2. (Opcional) escribe el autor y la licencia en el campo "credit" del JSON.
  3. Ejecuta:  pip install pillow  &&  python3 tools/procesar_imagenes.py

Resultado: img/<nombre>.jpg con el recorte y tamaño exactos que usa la web,
metadatos SEO incrustados (título, descripción, palabras clave, copyright)
y el archivo CREDITOS.md con el origen de cada foto.
"""
import json, sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC, DST = ROOT / "originales", ROOT / "img"
DATA = json.loads((ROOT / "tools" / "imagenes-seo.json").read_text(encoding="utf-8"))
EXTS = (".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP")

def utf16(s): return s.encode("utf-16le") + b"\x00\x00"

def procesar(item):
    stem = Path(item["file"]).stem
    origen = next((SRC / (stem + e) for e in EXTS if (SRC / (stem + e)).exists()), None)
    if not origen:
        return False
    w, h = item["w"], item["h"]
    im = ImageOps.exif_transpose(Image.open(origen)).convert("RGB")
    if im.width < w or im.height < h:
        print(f"  ⚠ {item['file']}: original pequeño ({im.width}×{im.height}) para {w}×{h}; se ampliará y perderá nitidez")
    # recorte proporcional (sin deformar) centrado en el punto de interés de cada foto
    fx, fy = item.get("focus", [0.5, 0.5])
    im = ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(fx, fy))
    exif = Image.Exif()
    exif[0x010E] = item["description"]                                   # ImageDescription
    exif[0x013B] = item.get("credit") or "AUREVIA Luxury Travel Concierge"  # Artist
    exif[0x8298] = "© AUREVIA Luxury Travel Concierge"                   # Copyright
    exif[0x9C9B] = utf16(item["title"]["es"])                            # XPTitle
    exif[0x9C9C] = utf16(item["alt"]["es"])                              # XPComment
    exif[0x9C9E] = utf16(";".join(item["keywords"]))                     # XPKeywords
    # peso objetivo para web según el uso de la imagen; se baja la calidad solo si hace falta
    tope = 320 if w >= 1600 and h >= 1000 else 280 if w >= 1600 else 130 if w <= 600 else 200
    for q in (86, 82, 78, 74, 70):
        im.save(DST / item["file"], "JPEG", quality=q, optimize=True, progressive=True, exif=exif, subsampling=2)
        kb = (DST / item["file"]).stat().st_size // 1024
        if kb <= tope: break
    print(f"  ✓ {item['file']}  {w}×{h}  {kb} KB (calidad {q}, tope {tope} KB)")
    return True

def main():
    SRC.mkdir(exist_ok=True)
    hechas, creditos = 0, ["# Créditos de imágenes\n", "| Archivo | Autor / fuente y licencia |", "|---|---|"]
    for it in DATA:
        if procesar(it):
            hechas += 1
        creditos.append(f"| {it['file']} | {it.get('credit') or 'PENDIENTE'} |")
    (ROOT / "CREDITOS.md").write_text("\n".join(creditos) + "\n", encoding="utf-8")
    print(f"\n{hechas}/{len(DATA)} imágenes procesadas. Las que faltan conservan su placeholder.")

if __name__ == "__main__":
    sys.exit(main())
