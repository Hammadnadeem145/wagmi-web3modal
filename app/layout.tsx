import { Web3Modal } from '@/context/eb3Modal'
import './globals.css'
import { ReactNode } from 'react'



export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
}

export default function RootLayout({ children }: { children: ReactNode })  {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}