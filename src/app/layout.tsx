import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Just in Netflix.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
