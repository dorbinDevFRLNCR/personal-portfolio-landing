import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import Footer from '../components/layout/footer/footer'
import Header from '../components/layout/header/header'
import { routing } from '@/src/i18n/routing'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kyrylo Pavlov | Frontend Developer',
  description: 'Portfolio of Kyrylo Pavlov. React, TypeScript and modern frontend development.',
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
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-text ">
        <NextIntlClientProvider messages={messages}>
          <Header />

          {/* flex-1 заставит main растягиваться и выталкивать Footer в самый низ */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">{children}</main>

          <Footer />
          <Toaster position="bottom-right" theme="dark" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
