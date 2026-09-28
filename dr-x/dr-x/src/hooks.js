import { useLayoutEffect } from 'react'
import gsap from 'gsap'
export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const isTouch = () => window.matchMedia('(hover: none), (max-width: 767px)').matches
export function useGsap(fn, ref) {
  useLayoutEffect(() => { const ctx = gsap.context(fn, ref); return () => ctx.revert() }, [])
}
