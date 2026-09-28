import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced, isTouch } from '../hooks'
import { personalData as p } from '../data/siteData'
import { ChevronDown } from 'lucide-react'

function Field() {
  const cv = useRef()
  useGsap(() => {
    const c = cv.current, ctx = c.getContext('2d'), touch = isTouch()
    const N = touch ? 28 : 80, D = Math.min(devicePixelRatio, 2), m = { x: .5, y: .5, tx: .5, ty: .5 }
    let W, H, raf; const P = []
    const size = () => { W = c.clientWidth; H = c.clientHeight; c.width = W * D; c.height = H * D; ctx.setTransform(D, 0, 0, D, 0, 0) }
    size()
    for (let i = 0; i < N; i++) P.push({ x: Math.random(), y: Math.random(), z: .3 + Math.random() * .7, a: Math.random() * 6.28, r: .1 + Math.random() * .4, s: (Math.random() - .5) * .0004 })
    const draw = t => {
      m.x += (m.tx - m.x) * .05; m.y += (m.ty - m.y) * .05
      ctx.clearRect(0, 0, W, H)
      const cx = W / 2, cy = H / 2
      ctx.strokeStyle = 'rgba(154,166,184,.07)'; ctx.lineWidth = 1
      for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.ellipse(cx + (m.x - .5) * 30 * k, cy + (m.y - .5) * 20 * k, W * .16 * k, H * .12 * k, -.3 * k, 0, 6.28); ctx.stroke() }
      P.forEach(q => { q.a += q.s * 16; q.px = cx + Math.cos(q.a) * q.r * W * 1.2 + (m.x - .5) * 80 * q.z; q.py = cy + Math.sin(q.a) * q.r * H * 1.4 + (m.y - .5) * 60 * q.z })
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = P[i], b = P[j], d = Math.hypot(a.px - b.px, a.py - b.py), max = touch ? 110 : 140
        if (d < max) { ctx.strokeStyle = `rgba(190,205,225,${(1 - d / max) * .16})`; ctx.beginPath(); ctx.moveTo(a.px, a.py); ctx.lineTo(b.px, b.py); ctx.stroke() }
      }
      P.forEach(q => { ctx.fillStyle = `rgba(236,240,248,${.25 + q.z * .5})`; ctx.beginPath(); ctx.arc(q.px, q.py, q.z * 1.6, 0, 6.28); ctx.fill() })
      if (!reduced()) raf = requestAnimationFrame(draw)
    }
    draw()
    const mv = e => { m.tx = e.clientX / innerWidth; m.ty = e.clientY / innerHeight }
    addEventListener('mousemove', mv); addEventListener('resize', size)
    return () => { cancelAnimationFrame(raf); removeEventListener('mousemove', mv); removeEventListener('resize', size) }
  }, cv)
  return <canvas ref={cv} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

export default function Hero() {
  const root = useRef()
  useGsap(() => {
    if (reduced()) return
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.from('.h-logo', { opacity: 0, scale: 1.25, filter: 'blur(30px)', duration: 2.4 })
      .from('.h-letter', { yPercent: 115, stagger: .09, duration: 1.4 }, .5)
      .from('.h-fade', { opacity: 0, y: 16, stagger: .25, duration: 1.2 }, 1.4)
    gsap.to('.h-title', { scale: 1.35, opacity: 0, filter: 'blur(14px)', ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
    gsap.to('.h-logo', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
  }, root)
  return (
    <section id="top" ref={root} className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden">
      <img src={p.logo.src} alt="" aria-hidden="true" className="h-logo absolute left-1/2 top-1/2 w-[min(120vw,900px)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050506_75%)]" />
      <Field />
      <div className="h-title relative z-10 px-6 text-center">
        <h1 className="huge text-[clamp(4.5rem,21vw,19rem)]" aria-label="Dr. X">
          {'DR.X'.split('').map((l, i) => <span key={i} className="mask inline-block px-[.02em]"><span className="h-letter inline-block">{l === '.' ? '.' : l}</span></span>)}
        </h1>
        <p className="h-fade mt-6 text-[clamp(.85rem,1.6vw,1.2rem)] font-light tracking-[.18em] text-bone/85">{p.tagline}</p>
        <p className="h-fade mt-3 text-sm text-steel">{p.welcome}</p>
      </div>
      <a href="#about" data-cursor="EXPLORE" className="h-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm text-bone/70 hover:text-bone">
        Explore the journey <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  )
}
