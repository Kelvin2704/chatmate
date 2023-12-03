import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'
import AuthContext from './context/AuthContext'

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
          <AuthContext>
            <ToasterProvider />
            {children}
          </AuthContext>
        </ClientOnly>
      </body>
    </html >
  )
}
