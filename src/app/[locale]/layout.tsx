import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import Footer from '../components/layout/footer/footer'
import Header from '../components/layout/header/header'
import { routing } from '@/src/i18n/routing'
import { Toaster } from 'sonner'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Kirill Pavlov | Fachinformatiker für Anwendungsentwicklung',
    template: '%s | Kirill Pavlov',
  },
  description:
    'Portfolio von Kirill Pavlov – Angehender Software Developer / Fachinformatiker für Anwendungsentwicklung. Spezialisiert auf React, Next.js und TypeScript.',
  keywords: [
    'Fachinformatiker für Anwendungsentwicklung',
    'Ausbildung 2027',
    'Software Developer Portfolio',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Deutschland',
  ],
  authors: [{ name: 'Kirill Pavlov' }],
  creator: 'Kirill Pavlov',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kirill-pavlov-portfolio.vercel.app',
    title: 'Kirill Pavlov | Angehender Software Developer',
    description:
      'Portfolio & Projekte – Suche Ausbildung zum Fachinformatiker für Anwendungsentwicklung.',
    siteName: 'Kirill Pavlov Portfolio',
    images: [
      {
        url: '/images/image.png',
        width: 1200,
        height: 630,
        alt: 'Kirill Pavlov - Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kirill Pavlov | Angehender Software Developer',
    description:
      'Portfolio & Projekte – Suche Ausbildung zum Fachinformatiker für Anwendungsentwicklung.',
    images: ['/images/image.png'],
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${syne.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-screen font-body flex flex-col bg-navy text-text ">
        <NextIntlClientProvider messages={messages}>
          <Header />

          {/* flex-1 заставит main растягиваться и выталкивать Footer в самый низ */}
          <main className="flex-1">{children}</main>

          <Footer />
          <Toaster position="bottom-right" theme="dark" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
