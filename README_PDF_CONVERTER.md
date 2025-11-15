# PDF to HTML Converter

This script converts PDF files to HTML format using pdf2htmlEX.

## Prerequisites

### Install pdf2htmlEX

**Windows:**

1. Download from: https://github.com/pdf2htmlEX/pdf2htmlEX/releases
2. Extract and add to your PATH

**Linux:**

```bash
sudo apt-get install pdf2htmlex
```

**macOS:**

```bash
brew install pdf2htmlex
```

## Usage

1. Create a `pdfs` folder in the project root if it doesn't exist
2. Place your PDF files in the `pdfs` folder
3. Run the conversion script:

```bash
node scripts/convert-pdfs-to-html.js
```

## Output

Converted HTML files will be saved to `pdfs/converted/` folder.

## Features

- Automatically finds all PDF files in the `/pdfs` folder
- Converts each PDF to a standalone HTML file
- Embeds CSS, fonts, and images for portability
- Shows progress and summary of conversions
- Creates output folder automatically

## Options

You can modify the script to adjust pdf2htmlEX options:

- `--zoom`: Adjust zoom level (default: 1.3)
- `--embed-css`: Embed CSS in HTML (default: 1)
- `--embed-font`: Embed fonts in HTML (default: 1)
- `--embed-image`: Embed images in HTML (default: 1)

See [pdf2htmlEX documentation](https://github.com/pdf2htmlEX/pdf2htmlEX) for more options.
