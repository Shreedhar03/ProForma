import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggler } from '@/components/ModeToggler'
import NextTopLoader from 'nextjs-toploader'
import AppContext from './context/AppContext'

// const inter = Inter({ subsets: ['latin'] })

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
      <body className='bg-background'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange>
            <AppContext>
              <NextTopLoader color='#6d28d9' showSpinner={false} />
              {children}
            </AppContext>
            <div className="fixed bottom-6 right-6">
              <ModeToggler />
            </div>
          </ThemeProvider>
      </body>
    </html>
  )
}
