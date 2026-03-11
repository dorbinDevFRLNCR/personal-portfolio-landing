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

function App() {
  return (
    <>
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
