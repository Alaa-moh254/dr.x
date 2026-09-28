import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced, isTouch } from '../hooks'
import { achievements } from '../data/siteData'

function Panel({ a, i }) {
  const el = useRef()
  const move = e => {
    if (isTouch() || reduced()) return
    const b = el.current.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5
    gsap.to(el.current, { rotateY: x * 14, rotateX: -y * 14, x: x * 14, y: y * 10, duration: .5, ease: 'power3.out' })
    el.current.style.setProperty('--gx', (x + .5) * 100 + '%'); el.current.style.setProperty('--gy', (y + .5) * 100 + '%')
  }
  const leave = () => gsap.to(el.current, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.6)' })
  const off = ['md:mt-0 md:ml-0', 'md:mt-24 md:ml-auto', 'md:-mt-8 md:ml-[10%]', 'md:mt-16 md:ml-auto md:mr-[6%]'][i % 4]
  return (
    <div className={`a-wrap w-full md:w-[58%] ${off}`} style={{ perspective: 1000 }}>
      <article ref={el} tabIndex={0} data-cursor="VIEW" onMouseMove={move} onMouseLeave={leave}
        className="a-panel glass group relative overflow-hidden rounded-sm p-8 will-change-transform [transform-style:preserve-3d] md:p-12 focus-visible:[&_.a-more]:opacity-100">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at var(--gx,50%) var(--gy,50%),rgba(200,215,235,.13),transparent 60%)' }} />
        <div className="relative [transform:translateZ(40px)]">
          {a.logo ? <img src={a.logo} alt={a.name + ' logo'} loading="lazy" className="h-14 w-auto object-contain" />
            : <p className="huge text-[clamp(1.8rem,5vw,4rem)] text-bone/90">{a.mark}</p>}
          <p className="mt-6 font-display text-2xl text-steel">{a.result}</p>
          <div className="a-more mt-6 grid gap-2 text-sm opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
            <p><span className="text-steel">Competition </span>{a.name}</p>
            <p><span className="text-steel">Year </span>{a.year}</p>
            <p><span className="text-steel">Role </span>{a.role}</p>
            {a.project && <p><span className="text-steel">Project </span>{a.project}</p>}
            <p className="mt-2 max-w-[48ch] text-base font-light text-bone/75">{a.text}</p>
          </div>
        </div>
      </article>
    </div>)
}

export default function Archive() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    gsap.utils.toArray('.a-wrap').forEach((el, i) => {
      gsap.from(el, { opacity: 0, y: 120, rotateX: 18, filter: 'blur(12px)', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      gsap.to(el, { y: i % 2 ? -50 : 30, ease: 'none', scrollTrigger: { trigger: el, scrub: true } })
    })
    gsap.from('.a-title span', { yPercent: 110, stagger: .12, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: r.current, start: 'top 70%' } })
  }, r)
  return (
    <section id="achievements" ref={r} className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-steel/5 blur-[120px]" aria-hidden="true" />
      <h2 className="a-title huge text-[clamp(2.6rem,9vw,9rem)]"><span className="mask"><span className="block">COMPETITIONS</span></span><span className="mask"><span className="block">&amp; MILESTONES</span></span></h2>
      <p className="mt-6 max-w-[40ch] text-lg font-light text-bone/70">An archive of moments where ideas were put to the test.</p>
      <div className="relative mt-24 flex flex-col gap-10 md:gap-4">{achievements.map((a, i) => <Panel key={a.id} a={a} i={i} />)}</div>
    </section>)
}
