import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced } from '../hooks'
import { journey } from '../data/siteData'
export default function Journey() {
  const r = useRef(), track = useRef()
  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width:768px) and (prefers-reduced-motion:no-preference)', () => {
      const dist = () => track.current.scrollWidth - innerWidth
      gsap.to(track.current, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: r.current, pin: true, scrub: .8, end: () => '+=' + dist(), invalidateOnRefresh: true } })
      gsap.utils.toArray('.j-big').forEach(el => gsap.fromTo(el, { xPercent: 12, opacity: .15, filter: 'blur(10px)' }, { xPercent: -6, opacity: 1, filter: 'blur(0px)', ease: 'none',
        scrollTrigger: { trigger: el.parentElement, containerAnimation: gsap.getTweensOf(track.current)[0], start: 'left 95%', end: 'left 30%', scrub: true } }))
    })
    mm.add('(max-width:767px)', () => {
      if (reduced()) return
      gsap.utils.toArray('.j-stage').forEach(el => gsap.from(el, { opacity: 0, y: 40, filter: 'blur(8px)', duration: 1, scrollTrigger: { trigger: el, start: 'top 85%' } }))
    })
  }, r)
  return (
    <section id="journey" ref={r} className="relative overflow-hidden py-24 md:flex md:h-screen md:items-center md:py-0">
      <h2 className="sr-only">The Journey</h2>
      <div ref={track} className="flex flex-col gap-20 px-6 md:w-max md:flex-row md:items-center md:gap-0 md:px-12">
        <div className="md:w-[45vw] md:shrink-0"><p className="huge text-[clamp(3rem,8vw,8rem)]" aria-hidden="true">THE<br />JOURNEY</p><p className="mt-6 text-steel">Scroll. Follow the thread.</p></div>
        {journey.map(s => (
          <article key={s.title} className="j-stage relative md:w-[60vw] md:shrink-0 md:pr-24">
            <div className="hidden h-px w-full bg-gradient-to-r from-white/40 to-transparent md:mb-10 md:block" />
            <h3 className="j-big huge text-[clamp(3.2rem,11vw,11rem)] uppercase">{s.title}</h3>
            <p className="mt-6 max-w-[38ch] text-lg font-light text-bone/75 md:text-xl">{s.text}</p>
            <p className="mt-3 text-sm text-steel">{s.date || 'Add date'}</p>
          </article>))}
      </div>
    </section>)
}
