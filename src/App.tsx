import './App.css'
import Header from './components/layout/header/header'
import About from './components/sections/about/about'
import Contact from './components/sections/contact/contact'
import Hero from './components/sections/hero/hero'
import Projects from './components/sections/projects/projects'
import SectionLine from './components/ui/sectionLine/sectionLine'
function App() {
  return (
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
      </main>
    </>
  )
}

export default App
