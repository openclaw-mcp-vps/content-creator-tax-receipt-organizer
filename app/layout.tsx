import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxReceipt AI — Auto-categorize creator expenses',
  description: 'Scan receipts and bank statements to automatically categorize business expenses for content creators. Tax-ready reports in minutes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="beb344ec-457d-4207-85cb-7210898c56b6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
