import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/siteData'
const id = s => s.toLowerCase()
export default function Nav() {
  const bar = useRef(); const [open, setOpen] = useState(false); const [glass, setGlass] = useState(false)
  useEffect(() => {
    let last = 0
    const on = () => {
      const y = window.scrollY; setGlass(y > 40)
      gsap.to(bar.current, { yPercent: y > last && y > 200 ? -110 : 0, duration: .5, ease: 'power3.out' }); last = y
    }
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const go = s => { setOpen(false); setTimeout(() => document.getElementById(id(s))?.scrollIntoView({ behavior: 'smooth' }), 50) }
  return (<>
    <header ref={bar} className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${glass ? 'glass !border-x-0 !border-t-0 bg-ink/60' : ''}`}>
      <nav aria-label="Primary" className="flex items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">DR. X</a>
        <ul className="hidden gap-9 text-sm md:flex">{nav.map(n => <li key={n}><a href={'#' + id(n)} onClick={e => { e.preventDefault(); go(n) }} className="ulink py-1 text-bone/80 hover:text-bone">{n}</a></li>)}</ul>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
    <div className={`fixed inset-0 z-[70] flex flex-col justify-center gap-6 bg-ink px-8 transition-[clip-path] duration-700 md:hidden ${open ? '[clip-path:inset(0)]' : '[clip-path:inset(0_0_100%_0)]'}`} aria-hidden={!open}>
      {nav.map(n => <button key={n} tabIndex={open ? 0 : -1} onClick={() => go(n)} className="huge text-left text-5xl">{n}</button>)}
    </div></>)
}
