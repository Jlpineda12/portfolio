import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Hero />
      <BentoGrid />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  )
}

export default App
