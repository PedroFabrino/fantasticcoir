import QRCode from 'qrcode'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuration
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://fantasticocuir.com.br'
const QR_OUTPUT_DIR = path.join(__dirname, '..', 'qr-codes')
const QR_SIZE = 1024

// Routes to generate QR codes for
const routes = [
  { path: '/', name: 'home', label: 'Home' },
  { path: '/sobre', name: 'sobre', label: 'Sobre' },
  { path: '/pirata-sereia', name: 'pirata-sereia', label: 'Pirata e Sereia' },
  { path: '/princese', name: 'princese', label: 'Princese' },
  { path: '/mariposa', name: 'mariposa', label: 'Mariposa' },
  { path: '/primavera', name: 'primavera', label: 'Primavera' },
  { path: '/fae', name: 'fae', label: 'Fae' },
  { path: '/satiro-fauno', name: 'satiro-fauno', label: 'Sátiro e Fauno' },
  { path: '/vampiros', name: 'vampiros', label: 'Vampiros' },
  { path: '/vampiras', name: 'vampiras', label: 'Vampiras' },
  { path: '/bruxes', name: 'bruxes', label: 'Bruxes' },
]

// QR Code options for high quality
const qrOptions = {
  width: QR_SIZE,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFF5E9',
  },
  errorCorrectionLevel: 'H', // High error correction for better scanning
}

async function generateQRCodes() {
  console.log('🎨 Generating QR codes.\n')

  // Create output directory if it doesn't exist
  if (!fs.existsSync(QR_OUTPUT_DIR)) {
    fs.mkdirSync(QR_OUTPUT_DIR, { recursive: true })
    console.log(`📁 Created directory: ${QR_OUTPUT_DIR}\n`)
  }

  // Generate QR codes for each route
  for (const route of routes) {
    try {
      const fullUrl = `${BASE_URL}${route.path}`
      const filename = `${route.name}.png`
      const outputPath = path.join(QR_OUTPUT_DIR, filename)

      await QRCode.toFile(outputPath, fullUrl, qrOptions)

      console.log(`✅ Generated: ${filename}`)
      console.log(`   URL: ${fullUrl}`)
      console.log(`   Size: ${QR_SIZE}x${QR_SIZE}px\n`)
    } catch (error) {
      console.error(`❌ Error generating QR code for ${route.name}:`, error.message)
    }
  }

  console.log(`🎉 QR code generation complete!`)
  console.log(`📂 Files saved to: ${QR_OUTPUT_DIR}`)
  console.log(`\n💡 Tip: These QR codes are ready for printing at exhibitions!`)
}

// Run the generator
generateQRCodes().catch(console.error)
