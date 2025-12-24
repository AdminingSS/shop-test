import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shop Test',
  description: 'E-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}