import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/header'
import About from './components/sections/about/about'
import Contact from './components/sections/contact/contact'
import Hero from './components/sections/hero/hero'
import Projects from './components/sections/projects/projects'
import SectionLine from './components/ui/sectionLine/sectionLine'
import CallMe from './components/ui/callMe/callMe'
import Footer from './components/layout/footer/footer'
import Impressum from './pages/impressum'
import DatenschutzPage from './pages/datenschutz'
import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#EEF0FF',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#C77DFF',
              secondary: '#1a1a2e',
            },
          },
          error: {
            iconTheme: {
              primary: '#F0306A',
              secondary: '#1a1a2e',
            },
          },
        }}
      />
      <Helmet>
        <title>Kyrylo Pavlov | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer portfolio of Kyrylo Pavlov. React, TypeScript and modern web development projects."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <SectionLine className="my-8" />
              <main className="max-w-7xl mx-auto px-4 py-8">
                <Projects />
                <SectionLine className="my-8" />
                <About />
                <SectionLine className="my-8" />
                <Contact />
                <SectionLine className="my-8" />
                <CallMe />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </>
  )
}

export default App
