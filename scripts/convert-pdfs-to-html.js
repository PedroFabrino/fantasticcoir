const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Configuration
const PDF_FOLDER = path.join(__dirname, '..', 'pdfs')
const OUTPUT_FOLDER = path.join(__dirname, '..', 'pdfs', 'converted')

// Ensure output folder exists
if (!fs.existsSync(OUTPUT_FOLDER)) {
  fs.mkdirSync(OUTPUT_FOLDER, { recursive: true })
  console.log(`Created output folder: ${OUTPUT_FOLDER}`)
}

// Check if pdf2htmlEX is installed
try {
  execSync('pdf2htmlEX --version', { stdio: 'ignore' })
} catch (error) {
  console.error('Error: pdf2htmlEX is not installed or not in PATH')
  console.error('Please install pdf2htmlEX:')
  console.error('  - Windows: Download from https://github.com/pdf2htmlEX/pdf2htmlEX/releases')
  console.error('  - Linux: sudo apt-get install pdf2htmlex')
  console.error('  - macOS: brew install pdf2htmlex')
  process.exit(1)
}

// Check if PDF folder exists
if (!fs.existsSync(PDF_FOLDER)) {
  console.error(`Error: PDF folder not found: ${PDF_FOLDER}`)
  console.error('Please create the folder and add PDF files to convert.')
  process.exit(1)
}

// Get all PDF files
const pdfFiles = fs.readdirSync(PDF_FOLDER).filter((file) => file.toLowerCase().endsWith('.pdf'))

if (pdfFiles.length === 0) {
  console.log('No PDF files found in the pdfs folder.')
  process.exit(0)
}

console.log(`Found ${pdfFiles.length} PDF file(s) to convert...\n`)

// Convert each PDF file
let successCount = 0
let failCount = 0

pdfFiles.forEach((pdfFile, index) => {
  const inputPath = path.join(PDF_FOLDER, pdfFile)
  const outputName = path.basename(pdfFile, '.pdf') + '.html'

  console.log(`[${index + 1}/${pdfFiles.length}] Converting: ${pdfFile}`)

  try {
    // Run pdf2htmlEX
    // Options:
    // --dest-dir: output directory
    // --zoom: zoom factor (1.3 for better readability)
    // --embed-css: embed CSS in HTML
    // --embed-font: embed fonts in HTML
    // --embed-image: embed images in HTML
    const command = `pdf2htmlEX --dest-dir "${OUTPUT_FOLDER}" --zoom 1.3 --embed-css 1 --embed-font 1 --embed-image 1 "${inputPath}" "${outputName}"`

    execSync(command, { stdio: 'inherit' })
    console.log(`✓ Successfully converted: ${outputName}\n`)
    successCount++
  } catch (error) {
    console.error(`✗ Failed to convert: ${pdfFile}`)
    console.error(`  Error: ${error.message}\n`)
    failCount++
  }
})

// Summary
console.log('='.repeat(50))
console.log('Conversion Summary:')
console.log(`  Total files: ${pdfFiles.length}`)
console.log(`  Successful: ${successCount}`)
console.log(`  Failed: ${failCount}`)
console.log(`  Output folder: ${OUTPUT_FOLDER}`)
console.log('='.repeat(50))
