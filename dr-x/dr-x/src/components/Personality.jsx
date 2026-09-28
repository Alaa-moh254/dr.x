import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced } from '../hooks'
import { traits } from '../data/siteData'
export default function Personality() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    gsap.utils.toArray('.p-line').forEach(el => gsap.fromTo(el, { opacity: .08, filter: 'blur(14px)', xPercent: 6 }, { opacity: 1, filter: 'blur(0px)', xPercent: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 45%', scrub: true } }))
    gsap.fromTo('.p-final', { opacity: 0, scale: .92, filter: 'blur(16px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', ease: 'none', scrollTrigger: { trigger: '.p-final', start: 'top 90%', end: 'top 40%', scrub: true } })
  }, r)
  return (
    <section ref={r} className="px-6 py-32 md:px-12 md:py-48">
      <h2 className="huge text-[clamp(2.6rem,9vw,9rem)]">MORE THAN<br />A CV.</h2>
      <div className="mt-24 space-y-8 md:space-y-14">{traits.map(t => <p key={t} className="p-line huge text-[clamp(2rem,7vw,7rem)] text-bone">{t}</p>)}</div>
      <div className="p-final mt-40 max-w-4xl">
        <p className="font-display text-3xl font-bold leading-tight md:text-6xl">Technology is not just what I study.</p>
        <p className="mt-6 font-display text-3xl font-bold leading-tight text-steel md:text-6xl">It is how I explore the world.</p>
      </div>
      <ul className="mt-32 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 md:grid-cols-5">
        {['Curiosity', 'Creativity', 'Experimentation', 'Learning', 'Ambition'].map(w => <li key={w} className="bg-ink px-6 py-10 font-display text-xl md:py-16">{w}</li>)}
      </ul>
    </section>)
}
