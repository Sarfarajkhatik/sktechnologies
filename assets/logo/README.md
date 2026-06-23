SK Technologies — Logo assets

Files created:
- assets/logo/sk-icon.svg — Square monogram icon (transparent background, scalable SVG)
- assets/logo/sk-horizontal.svg — Horizontal lockup with wordmark and tagline (SVG)
- assets/logo/sk-favicon.svg — Simplified favicon-optimized SVG (64x64 viewBox)

Colors
- Dark navy (brand primary): #071A2F
- Electric blue (accent): #00A8FF
- Accent lighter: #66E0FF

Notes and export instructions
- All SVGs use transparent backgrounds by default so they work on dark or light surfaces.
- To produce PNG/ICO favicons use a tool like Inkscape or ImageMagick.

Export examples (ImageMagick)

Convert SVG to PNG at 512px:

```bash
magick convert assets/logo/sk-icon.svg -background none -resize 512x512 assets/logo/sk-icon-512.png
```

Create ICO for favicon (contains multiple sizes):

```bash
magick convert assets/logo/sk-icon.svg -background none -resize 64x64 favicon-64.png
magick convert assets/logo/sk-icon.svg -background none -resize 32x32 favicon-32.png
magick convert favicon-64.png favicon-32.png -colors 256 assets/logo/favicon.ico
```

Or use Inkscape to export PNGs at desired pixel sizes.

Need PNG/ICO exports or alternate color variants? I can generate base64 PNGs or add additional SVG color variants on request.
