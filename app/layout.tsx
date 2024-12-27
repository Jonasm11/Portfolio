import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900`}>

        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

