import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'OptimeCore — GPU-Accelerated Smart Factory Efficiency Platform',
  description: 'OptimeCore is an intelligent manufacturing platform that monitors production workflows, optimizes machine utilization, and streamlines maintenance planning using AI-powered analytics. Built for Industry 4.0.',
  generator: 'v0.app',
  openGraph: {
    title: 'OptimeCore — Smart Factory Efficiency Platform',
    description: 'Intelligent production optimization, machine performance monitoring, and operational analytics for modern manufacturing.',
    images: [{ url: '/og-image.png' }],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
