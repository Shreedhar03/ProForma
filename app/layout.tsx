import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggler } from '@/components/ModeToggler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BillWise',
  description: 'Invoice Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange>
          {children}
          <div className="fixed bottom-6 right-6">
            <ModeToggler />
          </div>
        </ThemeProvider>

      </body>
    </html>
  )
}
