import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatMate',
  description: 'Chat with your friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <ClientOnly>
          <ToasterProvider />
          {children}
        </ClientOnly>
      </body>
    </html >
  )
}
