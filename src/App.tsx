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

function App() {
  return (
    <>
      <Helmet>
        <title>Kyrylo Pavlov | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer portfolio of Kyrylo Pavlov. React, TypeScript and modern web development projects."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Kyrylo Pavlov | Frontend Developer" />
        <meta
          property="og:description"
          content="Portfolio of Kyrylo Pavlov. React, TypeScript and modern frontend development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/preview.webp" />
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
