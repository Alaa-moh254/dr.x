import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced } from '../hooks'
import { education } from '../data/siteData'
export default function Education() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    gsap.from('.e-title', { yPercent: 110, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: r.current, start: 'top 70%' } })
    gsap.utils.toArray('.e-row').forEach(el => {
      gsap.from(el.querySelector('.e-line'), { scaleX: 0, transformOrigin: 'left', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      gsap.from(el.querySelectorAll('.e-in'), { opacity: 0, y: 40, stagger: .1, duration: 1, scrollTrigger: { trigger: el, start: 'top 80%' } })
    })
  }, r)
  return (
    <section id="education" ref={r} className="px-6 py-32 md:px-12 md:py-48">
      <h2 className="huge mask text-[clamp(3rem,10vw,10rem)]"><span className="e-title block">EDUCATION</span></h2>
      <div className="mt-20">
        {education.map(e => (
          <article key={e.title} className="e-row relative py-12 md:py-16">
            <div className="e-line absolute inset-x-0 top-0 h-px bg-white/25" />
            <div className="grid gap-6 md:grid-cols-12">
              <p className="e-in text-steel md:col-span-2">{e.kind}<br /><span className="text-bone/60">{e.period}</span></p>
              <div className="md:col-span-6"><h3 className="e-in font-display text-3xl font-bold leading-[1.05] md:text-5xl">{e.title}</h3><p className="e-in mt-3 text-xl text-bone/80">{e.org}</p></div>
              <p className="e-in max-w-[44ch] text-lg font-light text-bone/70 md:col-span-4">{e.text}</p>
            </div>
          </article>))}
      </div>
    </section>)
}
