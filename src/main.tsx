import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailJS from '@emailjs/browser'
import './index.css'
import App from './App.tsx'

emailJS.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
