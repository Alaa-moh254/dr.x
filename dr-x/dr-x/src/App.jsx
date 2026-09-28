import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Who from './components/Who'
import Journey from './components/Journey'
import Interlude from './components/Interlude'
import Education from './components/Education'
import Archive from './components/Archive'
import Personality from './components/Personality'
import Connect from './components/Connect'

export default function App() {
  useEffect(() => { const t = setTimeout(() => ScrollTrigger.refresh(), 600); return () => clearTimeout(t) }, [])
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main>
        <Hero /><Who /><Journey /><Interlude /><Education /><Archive /><Personality /><Connect />
      </main>
    </>
  )
}
