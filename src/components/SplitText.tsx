import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type SplitTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words' | 'lines' | 'chars,words' | 'chars,lines' | 'words,lines' | 'chars,words,lines'
  from?: { opacity?: number; y?: number; [key: string]: unknown }
  to?: { opacity?: number; y?: number; [key: string]: unknown }
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'right' | 'center'
  tag?: keyof React.JSX.IntrinsicElements
  onLetterAnimationComplete?: () => void
}

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  style: customStyle,
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const ref = useRef<HTMLElement>(null)
  const animationCompletedRef = useRef(false)
  const onCompleteRef = useRef(onLetterAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete
  }, [onLetterAnimationComplete])

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true))
    }
  }, [])

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return
      if (animationCompletedRef.current) return
      const el = ref.current

      const chars = el.querySelectorAll('.split-char')
      const words = el.querySelectorAll('.split-word')
      const lines = el.querySelectorAll('.split-line')

      let targets: Element[] = []
      if (splitType.includes('chars') && chars.length) targets = Array.from(chars)
      if (!targets.length && splitType.includes('words') && words.length) targets = Array.from(words)
      if (!targets.length && splitType.includes('lines') && lines.length) targets = Array.from(lines)
      if (!targets.length) targets = Array.from(chars).length ? Array.from(chars) : [el]

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
      const sign =
        marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      gsap.fromTo(
        targets.length ? targets : [el],
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => {
            animationCompletedRef.current = true
            onCompleteRef.current?.()
          },
          willChange: 'transform, opacity',
          force3D: true,
        },
      )

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill()
        })
      }
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: ref,
    },
  )

  const style: React.CSSProperties = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity',
    ...customStyle,
  }

  const TagComponent = tag as React.ElementType
  return (
    <TagComponent ref={ref} style={style} className={`split-parent ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="split-char" style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </TagComponent>
  )
}

export default SplitText
