import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced } from '../hooks'
import { personalData as p } from '../data/siteData'
export default function Who() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    const st = { trigger: r.current, start: 'top 70%' }
    gsap.from('.w-word', { yPercent: 110, stagger: .12, duration: 1.2, ease: 'expo.out', scrollTrigger: st })
    gsap.from('.w-img', { clipPath: 'inset(0 0 100% 0)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: st })
    gsap.fromTo('.w-img img', { scale: 1.25 }, { scale: 1, yPercent: -6, ease: 'none', scrollTrigger: { trigger: r.current, scrub: true } })
    gsap.utils.toArray('.w-fact,.w-bio').forEach(el => gsap.from(el, { opacity: 0, y: 30, filter: 'blur(8px)', duration: 1, scrollTrigger: { trigger: el, start: 'top 88%' } }))
  }, r)
  return (
    <section id="about" ref={r} className="relative px-6 py-32 md:px-12 md:py-48">
      <h2 className="huge text-[clamp(3rem,10vw,10rem)]" aria-label="Who is Dr. X?">
        {['WHO IS', 'DR. X?'].map(w => <span key={w} className="mask"><span className="w-word block">{w}</span></span>)}
      </h2>
      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12">
        <figure className="w-img md:col-span-5" data-cursor="VIEW">
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10"><img src={p.portrait.src} alt={p.portrait.alt} loading="lazy" className="h-full w-full object-cover object-center" /></div>
        </figure>
        <div className="md:col-span-6 md:col-start-7">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {p.facts.map((f, i) => <div key={f.label} className={`w-fact border-t border-white/10 pt-4 ${i === 2 || i === 3 ? 'sm:col-span-2' : ''}`}>
              <dt className="text-xs text-steel">{f.label}</dt><dd className="mt-1 font-display text-xl md:text-2xl">{f.value}</dd></div>)}
          </dl>
          <div className="mt-14 space-y-6">{p.bio.map((b, i) => <p key={i} className={`w-bio max-w-[46ch] ${i === 0 ? 'font-display text-3xl leading-tight md:text-4xl' : 'text-lg font-light leading-relaxed text-bone/75'}`}>{b}</p>)}</div>
        </div>
      </div>
    </section>)
}
