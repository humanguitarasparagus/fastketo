import Script from 'next/script'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FastKeto UK - Keto Fast Food Guide',
  description: 'Discover exactly what to order at your favourite UK fast food chains while staying in ketosis. McDonald\'s, KFC, Nando\'s and more.',
  keywords: ['keto', 'fast food', 'uk', 'low carb', 'ketogenic diet', 'mcdonalds keto', 'kfc keto'],
  authors: [{ name: 'FastKeto UK' }],
  openGraph: {
    title: 'FastKeto UK - Keto Fast Food Guide',
    description: 'Find keto-friendly options at UK fast food chains',
    url: 'https://fastketo.co',
    siteName: 'FastKeto UK',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SBZS29F794"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SBZS29F794');
        `}
      </Script>
      <body className={inter.className}>
        <nav className="border-b border-neutral-200 bg-white">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <img src="/images/fastketo-logo.png" alt="FastKeto" className="h-14" />
              </a>
              <div className="flex items-center space-x-6">
                <a href="/guides" className="text-neutral-700 hover:text-primary-500 transition-colors">
                  Guides
                </a>
                <a href="/about" className="text-neutral-700 hover:text-primary-500 transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-neutral-200 bg-white mt-16">
          <div className="container-custom py-8">
            <div className="text-center text-neutral-600 text-sm">
              <p className="mb-2">FastKeto UK - Your guide to keto fast food</p>
              <p className="text-xs">
                Nutrition information verified from official sources. Always check with restaurants for the most current data.
              </p>
              <div className="mt-4 space-x-4">
                <a href="/privacy" className="hover:text-primary-500 transition-colors">
                  Privacy
                </a>
                <a href="/about" className="hover:text-primary-500 transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
