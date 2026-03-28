import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailJS from '@emailjs/browser'
import './index.css'
import App from './App.tsx'
import './i18n/i18n.ts'

import './i18n/i18n.ts'

import '@fontsource/syne/400.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'

import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'

import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

emailJS.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
