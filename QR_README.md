# QR Code Generator

This script generates high-quality QR codes for all routes in the Fantasy Event website. Perfect for exhibitions and physical displays!

## Features

- 🎨 1024x1024px high-resolution PNG files
- 🔗 QR codes for all character pages and main sections
- 📱 Optimized for mobile scanning
- 🖨️ Print-ready quality

## Usage

Generate all QR codes:

```bash
npm run qr:generate
```

The QR codes will be saved to the `qr-codes/` directory with the following files:

- `home.png` - Main landing page
- `sobre.png` - About page
- `fantastico-juir.png` - Fantástico e Juir character
- `pirata-sereia.png` - Pirata e Sereia character
- `princese.png` - Princese character
- `fae.png` - Fae character
- `mariposa.png` - Mariposa character
- `primavera.png` - Primavera character
- `satiro-fauno.png` - Sátiro e Fauno character
- `vampiros.png` - Vampiros character
- `bruxas.png` - Bruxas character

## Exhibition Setup

1. Generate the QR codes using the npm script
2. Print the PNG files at high quality (recommended: 300 DPI minimum)
3. Display near corresponding character information or artwork
4. Visitors can scan to access the digital experience with audio

## Configuration

You can modify the QR code generator in `scripts/generate-qr-codes.js`:

- **BASE_URL**: Change the website URL (currently: https://fantasticcoir.web.app)
- **QR_SIZE**: Adjust image resolution (currently: 1024x1024px)
- **Routes**: Add/remove pages to generate QR codes for
- **Error Correction**: Currently set to 'H' (high) for better scanning

## Notes

- QR codes are generated with high error correction for better scanning reliability
- Files are automatically excluded from git via `.gitignore`
- Each QR code points to the full URL for immediate mobile access
- Compatible with all standard QR code readers and mobile camera apps
