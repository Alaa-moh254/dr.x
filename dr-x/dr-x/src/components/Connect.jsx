import { useRef } from 'react'
import gsap from 'gsap'
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react'
import { useGsap, reduced, isTouch } from '../hooks'
import { personalData as p, socialLinks } from '../data/siteData'
const icons = { instagram: Instagram, facebook: Facebook, email: Mail, linkedin: Linkedin }

function Magnetic({ children }) {
  const el = useRef()
  const mv = e => { if (isTouch() || reduced()) return; const b = el.current.getBoundingClientRect(); gsap.to(el.current, { x: (e.clientX - b.left - b.width / 2) * .35, y: (e.clientY - b.top - b.height / 2) * .35, duration: .4 }) }
  return <span ref={el} onMouseMove={mv} onMouseLeave={() => gsap.to(el.current, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1,.5)' })} className="inline-block">{children}</span>
}

function Social({ s, small }) {
  const I = icons[s.id], live = s.enabled && s.url
  const cls = `inline-flex items-center gap-3 ${small ? 'text-sm' : 'rounded-full border border-white/20 p-4'}`
  if (!live) return <span className={`${cls} cursor-not-allowed text-bone/40`} aria-disabled="true" title={s.id === 'linkedin' ? 'Coming soon' : 'Link coming soon'}><I size={small ? 16 : 22} />{small ? s.label : <span className="sr-only">{s.label}</span>}</span>
  return <a href={s.url} target={s.id === 'email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={s.label} data-cursor="OPEN" className={`${cls} transition-colors hover:border-bone hover:bg-bone hover:text-ink`}><I size={small ? 16 : 22} />{small && <span className="ulink">{s.label}</span>}</a>
}

export default function Connect() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    const st = { trigger: r.current, start: 'top 60%' }
    gsap.from('.c-word', { yPercent: 115, stagger: .12, duration: 1.4, ease: 'expo.out', scrollTrigger: st })
    gsap.from('.c-in', { opacity: 0, y: 24, stagger: .2, duration: 1.1, delay: .5, scrollTrigger: st })
    gsap.to('.c-glow', { scale: 1.4, opacity: .5, ease: 'none', scrollTrigger: { trigger: r.current, scrub: true } })
  }, r)
  return (<>
    <section id="contact" ref={r} className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32 md:px-12">
      <img src={p.logo.src} alt="" aria-hidden="true" className="c-glow pointer-events-none absolute -bottom-1/4 -right-1/4 w-[80vw] max-w-none opacity-20 mix-blend-screen" />
      <h2 className="huge relative text-[clamp(3.2rem,13vw,13rem)]"><span className="mask"><span className="c-word block">LET&rsquo;S</span></span><span className="mask"><span className="c-word block">CONNECT.</span></span></h2>
      <div className="relative mt-14 space-y-2 text-xl font-light text-bone/75 md:text-3xl">
        <p className="c-in">Have an idea?</p><p className="c-in">Want to collaborate?</p><p className="c-in">Or just want to talk technology?</p>
      </div>
      <div className="c-in relative mt-14"><Magnetic><a href={'mailto:' + p.email} data-cursor="WRITE" className="ulink font-display text-[clamp(1.3rem,4.5vw,3.5rem)] font-bold">{p.email}</a></Magnetic></div>
      <div className="c-in relative mt-10 flex flex-wrap gap-4">{socialLinks.map(s => <Magnetic key={s.id}><Social s={s} /></Magnetic>)}</div>
    </section>
    <footer className="flex flex-col gap-6 border-t border-white/10 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-12">
      <div><p className="font-display text-xl font-bold">DR. X</p><p className="mt-1 text-sm text-steel">{p.tagline}</p></div>
      <div className="flex flex-wrap gap-x-8 gap-y-3">{socialLinks.map(s => <Social key={s.id} s={s} small />)}</div>
    </footer></>)
}
