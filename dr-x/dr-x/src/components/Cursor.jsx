import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { isTouch } from '../hooks'
export default function Cursor() {
  const ring = useRef(), dot = useRef(), label = useRef()
  useEffect(() => {
    if (isTouch()) return
    document.body.classList.add('has-cursor')
    const rx = gsap.quickTo(ring.current, 'x', { duration: .45, ease: 'power3' }), ry = gsap.quickTo(ring.current, 'y', { duration: .45, ease: 'power3' })
    const dx = gsap.quickTo(dot.current, 'x', { duration: .08 }), dy = gsap.quickTo(dot.current, 'y', { duration: .08 })
    const move = e => { rx(e.clientX); ry(e.clientY); dx(e.clientX); dy(e.clientY) }
    const over = e => {
      const t = e.target.closest?.('[data-cursor],a,button')
      const text = t ? (t.dataset.cursor || 'VIEW') : ''
      label.current.textContent = t && !t.dataset.cursor && t.tagName !== 'A' ? '' : text
      gsap.to(ring.current, { scale: t ? 1 : .35, backgroundColor: t && label.current.textContent ? 'rgba(236,235,230,.95)' : 'rgba(236,235,230,0)', duration: .35 })
      gsap.to(label.current, { opacity: label.current.textContent ? 1 : 0, duration: .2 })
    }
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over)
    return () => { document.body.classList.remove('has-cursor'); window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [])
  if (typeof window !== 'undefined' && isTouch()) return null
  return (<div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] hidden [@media(hover:hover)]:block">
    <div ref={ring} className="absolute -left-10 -top-10 flex h-20 w-20 scale-[.35] items-center justify-center rounded-full border border-bone/60 mix-blend-difference">
      <span ref={label} className="text-[10px] font-medium tracking-[.2em] text-ink opacity-0" />
    </div>
    <div ref={dot} className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] rounded-full bg-bone" />
  </div>)
}
