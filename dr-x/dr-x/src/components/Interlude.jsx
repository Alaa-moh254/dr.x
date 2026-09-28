import { useRef } from 'react'
import gsap from 'gsap'
import { useGsap, reduced } from '../hooks'
import { interlude } from '../data/siteData'
export default function Interlude() {
  const r = useRef()
  useGsap(() => {
    if (reduced()) return
    const words = gsap.utils.toArray('.i-word')
    gsap.set(words, { opacity: 0 })
    const tl = gsap.timeline({ scrollTrigger: { trigger: r.current, pin: true, scrub: .6, start: 'top top', end: '+=' + interlude.length * 90 + '%' } })
    words.forEach((w, i) => {
      tl.fromTo(w, { opacity: 0, scale: 1.7, filter: 'blur(28px)', clipPath: 'inset(0 100% 0 0)', skewX: 8 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', clipPath: 'inset(0 0% 0 0)', skewX: 0, duration: 1, ease: 'power3.out' })
        .to(w, { opacity: i === words.length - 1 ? 1 : 0, scale: i === words.length - 1 ? 1 : .7, filter: i === words.length - 1 ? 'blur(0px)' : 'blur(20px)', yPercent: i === words.length - 1 ? 0 : -25, duration: 1, ease: 'power2.in' }, '+=.5')
    })
  }, r)
  return (
    <section ref={r} aria-label="Think. Create. Explore. Repeat." className="relative flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#15171c,#050506_70%)]">
      {interlude.map(w => <span key={w} className="i-word huge absolute px-4 text-[clamp(3.5rem,17vw,17rem)] motion-reduce:static motion-reduce:hidden">{w}</span>)}
      <p className="hidden text-3xl motion-reduce:block">{interlude.join(' ')}</p>
    </section>)
}
