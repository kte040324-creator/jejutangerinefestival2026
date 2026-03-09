type ListItem = {
  title: string
  description?: string
}

type NamedEntity = {
  name: string
  nameKo?: string
}

import { useEffect, useRef, useState } from 'react'
import ClickSpark from './components/ClickSpark'

const figmaAssets = {
  heroTitleSvg: '/figma/hero-title.svg',
  headerMarkSvg: '/figma/header-mark.svg',
  glowEllipseSvg: '/figma/glow-ellipse.svg',
} as const

const heroCanvas = {
  width: 1440,
  height: 1726, // Figma gradient rectangle height (content area under header)
  headerHeight: 89,
} as const

const heroScaleMultiplier = 0.8
const heroButtonYOffset = 40

const festival = {
  name: '2026 Jeju Tangerine Festival',
  dateLabel: 'Nov 1–7, 2026',
  dateIsoStart: '2026-11-01',
  dateIsoEnd: '2026-11-07',
  location: 'Hyodon-dong, Seogwipo, Jeju, South Korea',
}

const experiences: ListItem[] = [
  { title: 'Tangerine Picking Experience' },
  { title: 'Tangerine Jam & Juice Making' },
  { title: "Fresh Local Farmers' Market" },
  { title: 'Live Local Music & Performances' },
]

const vendors: NamedEntity[] = [
  { name: 'Analog Gyulbat', nameKo: '아날로그 귤밭' },
  { name: 'Jeju In-a-Citrus', nameKo: '제주에인감귤밭' },
  { name: 'Cafe Gyulkkot-darak', nameKo: '귤꽃다락' },
  { name: 'Dolbitna Art Farm', nameKo: '돌빛나예술농장' },
  { name: 'Sanghyowon Botanical Garden', nameKo: '상효원' },
  { name: 'Baekrok-dam Farm', nameKo: '백록담수목원' },
]

const sponsors: NamedEntity[] = [
  { name: 'Jeju Special Self-Governing Province' },
  { name: 'Nonghyup (NH Bank)' },
  { name: 'Jeju Tourism Organization' },
]

function formatDateRangeForHumans(startIso: string, endIso: string) {
  const start = new Date(`${startIso}T00:00:00`)
  const end = new Date(`${endIso}T00:00:00`)
  const fmt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  })
  return `${fmt.format(start)} – ${fmt.format(end)}`
}

function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold tracking-widest text-black/70">{eyebrow.toUpperCase()}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-black/70">{description}</p> : null}
    </div>
  )
}

function App() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(festival.location)}`
  const humanDate = formatDateRangeForHumans(festival.dateIsoStart, festival.dateIsoEnd)
  const [heroScale, setHeroScale] = useState(1)
  const heroSectionRef = useRef<HTMLElement | null>(null)

  const pillRef = useRef<HTMLDivElement | null>(null)
  const logoFrameRef = useRef<HTMLDivElement | null>(null)
  const shellRef = useRef<HTMLElement | null>(null)
  const orangeLeftRef = useRef<HTMLElement | null>(null)
  const sliceRef = useRef<HTMLElement | null>(null)
  const orangeRightRef = useRef<HTMLElement | null>(null)
  const viewProgramRef = useRef<HTMLAnchorElement | null>(null)
  const getTicketsRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    void import('@google/model-viewer')
  }, [])

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth || heroCanvas.width
      const s = Math.min(1, vw / heroCanvas.width) * heroScaleMultiplier
      setHeroScale(Number.isFinite(s) ? s : 1)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' && 'matchMedia' in window
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false

    if (prefersReducedMotion) return

    const layers = [
      { ref: shellRef, rotateDeg: 2.83, ampX: 6, ampY: 10, scaleAmp: 0.015, parallaxX: 0, parallaxY: 26, outwardSign: 1, outwardMax: 120, phase: 2.2, freq: 0.8 },
      { ref: orangeLeftRef, rotateDeg: -35.88, ampX: 7, ampY: 12, scaleAmp: 0.018, parallaxX: 0, parallaxY: 28, outwardSign: -1, outwardMax: 140, phase: 3.4, freq: 0.85 },
      { ref: sliceRef, rotateDeg: 20.82, ampX: 6, ampY: 10, scaleAmp: 0.015, parallaxX: 0, parallaxY: 24, outwardSign: -1, outwardMax: 100, phase: 4.1, freq: 0.75 },
      { ref: orangeRightRef, rotateDeg: 0, ampX: 5, ampY: 10, scaleAmp: 0.015, parallaxX: 0, parallaxY: 22, outwardSign: 1, outwardMax: 160, phase: 5.0, freq: 0.78 },
    ] as const

    const allInteractiveEls = [
      pillRef.current,
      logoFrameRef.current,
      viewProgramRef.current,
      getTicketsRef.current,
      shellRef.current,
      orangeLeftRef.current,
      sliceRef.current,
      orangeRightRef.current,
    ].filter(Boolean) as HTMLElement[]

    for (const layer of layers) {
      const el = layer.ref.current
      if (el) el.style.willChange = 'transform'
    }

    let rafId = 0
    let p = 0

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
    const easeOutCubic = (v: number) => 1 - Math.pow(1 - clamp01(v), 3)

    const tick = () => {
      const t = performance.now() / 1000
      const heroEl = heroSectionRef.current
      let targetP = 0

      if (heroEl) {
        const rect = heroEl.getBoundingClientRect()
        targetP = clamp01(-rect.top / Math.max(1, rect.height))
      }

      p += (targetP - p) * 0.08
      const centeredP = p - 0.35
      const outward = easeOutCubic(p)

      for (const layer of layers) {
        const el = layer.ref.current
        if (!el) continue

        const drift = Math.sin(t * layer.freq + layer.phase)
        const drift2 = Math.cos(t * layer.freq * 0.93 + layer.phase * 1.17)
        const dx =
          drift2 * layer.ampX +
          centeredP * layer.parallaxX +
          outward * layer.outwardMax * layer.outwardSign
        const dy = drift * layer.ampY + centeredP * layer.parallaxY
        const scale = 1 + drift * layer.scaleAmp
        const rotate = layer.rotateDeg ? ` rotate(${layer.rotateDeg}deg)` : ''
        el.style.transform = `translate3d(${dx.toFixed(3)}px, ${dy.toFixed(3)}px, 0) scale(${scale.toFixed(4)})${rotate}`
      }

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)
    return () => {
      window.cancelAnimationFrame(rafId)
      for (const el of allInteractiveEls) {
        el.style.transform = ''
        el.style.willChange = ''
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 h-[89px] bg-gradient-to-r from-white to-[#dfdfdf]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-3 sm:px-4">
          <p className="text-sm font-semibold tracking-[0.4px] text-black sm:text-base">Jeju Tangerine Festival 2026</p>

          <img
            className="hidden shrink-0 object-contain sm:block sm:h-[64px] sm:w-[48.6674px] sm:max-w-none"
            src={figmaAssets.headerMarkSvg}
            alt="Jeju Tangerine Festival mark"
          />

          <nav className="hidden items-center gap-7 text-sm text-black sm:flex" aria-label="Primary">
            <a className="hover:underline" href="#highlights">
              Highlights
            </a>
            <a className="hover:underline" href="#program">
              Program
            </a>
            <a className="hover:underline" href="#location">
              Location
            </a>
            <a className="hover:underline" href="#faq">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main id="content">
        <section
          ref={heroSectionRef}
          className="relative overflow-hidden"
          style={{
            height: Math.ceil(heroCanvas.height * heroScale),
          }}
        >
          <ClickSpark sparkColor="rgba(255,255,255,0.9)" sparkSize={24} sparkRadius={36} sparkCount={10} duration={420}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff4000] to-white" />

            <div
              className="absolute left-1/2 top-0"
              style={{
                width: heroCanvas.width,
                height: heroCanvas.height,
                transform: `translateX(-50%) scale(${heroScale})`,
                transformOrigin: 'top center',
              }}
            >
              {/* Glass pill container (selected frame: 177:1853 / 660x104) */}
              <div
                ref={pillRef}
                className="absolute z-20"
                style={{
                  left: 390,
                  top: 163 - heroCanvas.headerHeight,
                  width: 660,
                  height: 104,
                }}
              >
                <div
                  className="absolute left-1/2 top-0 h-[104px] w-[530px] -translate-x-1/2 rounded-[72px] border border-solid border-white"
                  style={{
                    backgroundImage:
                      'linear-gradient(100.751deg, rgba(255, 255, 255, 0.12) 0.52999%, rgba(63, 255, 245, 0.11) 51.312%, rgba(255, 255, 255, 0.114) 97.435%)',
                  }}
                />
                <p className="absolute m-0 left-1/2 top-[17px] h-[68px] w-[386px] -translate-x-1/2 text-center text-[30px] font-light leading-[1.053] tracking-[0.6px] text-white">
                  11.01.26 - 11.07.26
                </p>
                <p className="absolute m-0 left-[calc(50%+0.5px)] top-[57px] h-[47px] w-[575px] -translate-x-1/2 text-center text-[30px] font-light leading-[normal] text-white">
                  PEEL TANGERINES. FEEL JEJU.
                </p>
              </div>

              {/* Main logo frame */}
              <div
                ref={logoFrameRef}
                className="absolute z-20"
                style={{
                  left: 433,
                  top: 378 - heroCanvas.headerHeight,
                  width: 575,
                  height: 614,
                }}
              >
                <img
                  alt=""
                  src={figmaAssets.glowEllipseSvg}
                  className="absolute left-1/2 top-[287.5px] h-[940.6px] w-[940.6px] -translate-x-1/2 -translate-y-1/2 object-contain"
                />
                <img
                  src={figmaAssets.heroTitleSvg}
                  alt="Jeju tangerine festival"
                  className="absolute left-[53px] top-[17px] h-[597px] w-[446px] object-contain"
                />
              </div>

              {/* Decorations */}
              <model-viewer
                ref={shellRef}
                src="/gltf/g1.glb"
                className="pointer-events-none absolute z-0"
                style={{
                  left: 1017,
                  top: 258 - heroCanvas.headerHeight + 40,
                  width: 354.8065,
                  height: 280.1722,
                  backgroundColor: 'transparent',
                  filter: 'saturate(1.08) contrast(1.06)',
                  transformOrigin: 'center',
                }}
                camera-controls={false}
                disable-pan
                disable-zoom
                disable-tap
                interaction-prompt="none"
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.45"
                environment-image="legacy"
                reveal="auto"
              />
              <model-viewer
                ref={orangeLeftRef}
                src="/gltf/t1.glb"
                className="pointer-events-none absolute z-0"
                style={{
                  left: 33.2868,
                  top: 461.5528 - heroCanvas.headerHeight + 40,
                  width: 340.7182,
                  height: 327.9672,
                  backgroundColor: 'transparent',
                  filter: 'saturate(1.08) contrast(1.06)',
                  transformOrigin: 'center',
                }}
                camera-controls={false}
                disable-pan
                disable-zoom
                disable-tap
                interaction-prompt="none"
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.45"
                environment-image="legacy"
                reveal="auto"
              />
              <model-viewer
                ref={sliceRef}
                src="/gltf/g3.glb"
                className="pointer-events-none absolute z-0"
                style={{
                  left: 171.2913,
                  top: 850 - heroCanvas.headerHeight + 40,
                  width: 330.2893,
                  height: 256.7225,
                  backgroundColor: 'transparent',
                  filter: 'saturate(1.08) contrast(1.06)',
                  transformOrigin: 'center',
                }}
                camera-controls={false}
                disable-pan
                disable-zoom
                disable-tap
                interaction-prompt="none"
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.45"
                environment-image="legacy"
                reveal="auto"
              />
              <model-viewer
                ref={orangeRightRef}
                src="/gltf/g4.glb"
                className="pointer-events-none absolute z-0"
                style={{
                  left: 1108,
                  top: 720 - heroCanvas.headerHeight + 40,
                  width: 403,
                  height: 395,
                  backgroundColor: 'transparent',
                  filter: 'saturate(1.08) contrast(1.06)',
                  transformOrigin: 'center',
                }}
                camera-controls={false}
                disable-pan
                disable-zoom
                disable-tap
                interaction-prompt="none"
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.45"
                environment-image="legacy"
                reveal="auto"
              />

              {/* Buttons */}
              <a
                ref={viewProgramRef}
                href="#program"
                className="absolute z-20 h-[50px] w-[163px] rounded-[100px]"
                style={{
                  left: 530,
                  top: 1031 - heroCanvas.headerHeight + heroButtonYOffset,
                }}
              >
                <span className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] opacity-80">
                  <span className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(63,255,245,0.9)]" />
                </span>
                <span
                  className="absolute left-[82px] top-[14px] h-[29px] w-[130px] -translate-x-1/2 text-center text-black"
                  style={{
                    fontFamily: '"Neue Haas Grotesk Display Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
                    fontWeight: 400, // 55 Roman
                    fontSize: 18,
                    lineHeight: 1.053,
                    letterSpacing: '0.36px',
                  }}
                >
                  View Program
                </span>
              </a>
              <a
                ref={getTicketsRef}
                href="#location"
                className="absolute z-20 h-[50px] w-[163px] rounded-[100px]"
                style={{
                  left: 747,
                  top: 1031 - heroCanvas.headerHeight + heroButtonYOffset,
                }}
              >
                <span className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] opacity-80">
                  <span className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(255,255,255,0.9)]" />
                </span>
                <span
                  className="absolute left-[82px] top-[15px] h-[29px] w-[130px] -translate-x-1/2 text-center text-black"
                  style={{
                    fontFamily: '"Neue Haas Grotesk Display Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
                    fontWeight: 400, // 55 Roman
                    fontSize: 18,
                    lineHeight: 1.053,
                    letterSpacing: '0.36px',
                  }}
                >
                  Get Tickets
                </span>
              </a>
            </div>
          </ClickSpark>
        </section>

        <section id="highlights" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="highlights-heading"
            eyebrow="Highlights"
            title="What to look forward to"
            description="A week-long celebration of Jeju’s iconic tangerines (gyul) — orchards, markets, and local performances."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-black">Dates</p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">{humanDate}</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-black">Location</p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">{festival.location}</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-black">At a glance</p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                Orchard picking, jam &amp; juice making, a farmers&apos; market, and live local music &amp; performances.
              </p>
            </div>
          </div>
        </section>

        <section id="program" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="program-heading"
            eyebrow="Program"
            title="Experiences"
            description="Hands-on orchard activities and local culture — designed for first-timers and citrus superfans."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {experiences.map((item) => (
              <div key={item.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:bg-black/[0.02]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-[#ff4000] text-white">
                    <span className="text-sm font-bold">•</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-black">{item.title}</p>
                    {item.description ? <p className="mt-1 text-sm text-black/70">{item.description}</p> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-black/70">
              Note: Detailed time slots and ticketing will be announced by partners closer to the festival dates.
            </p>
          </div>
        </section>

        <section id="vendors" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="vendors-heading"
            eyebrow="Vendors"
            title="Local farms, cafés & gardens"
            description="Discover Jeju’s makers and growers — from orchard experiences to botanical gardens."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendors.map((v) => (
              <div key={v.name} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-black">{v.name}</p>
                {v.nameKo ? <p className="mt-1 text-sm text-black/60">{v.nameKo}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <section id="sponsors" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="sponsors-heading"
            eyebrow="Sponsorship"
            title="Supported by"
            description="Thank you to our local partners for helping make the festival possible."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-semibold text-black">{s.name}</p>
                <span className="rounded-full border border-black/10 bg-black/[0.03] px-2 py-1 text-xs text-black/60">Sponsor</span>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="location-heading"
            eyebrow="Location"
            title="Hyodon-dong, Seogwipo"
            description="A cozy southern Jeju neighborhood known for orchards and warm coastal air — perfect for an autumn citrus week."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-black">Address</p>
                <p className="mt-2 text-sm text-black/70">{festival.location}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-black/90"
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open map
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-black/[0.02]"
                    href="/jeju-tangerine-festival-2026.ics"
                    download
                  >
                    Add to calendar
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-black">Dates</p>
                <p className="mt-2 text-sm text-black/70">{festival.dateLabel}</p>

                <div className="mt-6 border-t border-black/10 pt-6">
                  <p className="text-sm font-semibold text-black">Quick tips</p>
                  <ul className="mt-2 space-y-2 text-sm text-black/70">
                    <li>Arrive earlier in the day for the freshest market picks.</li>
                    <li>Wear comfortable shoes for orchard paths.</li>
                    <li>Bring a reusable bag for citrus and crafts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-3 py-14 sm:px-4 sm:py-18">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers for planning your visit."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-black">Do I need tickets?</p>
              <p className="mt-2 text-sm text-black/70">
                Some experiences may require advance booking. Details will be announced closer to the festival dates.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-black">Is it family-friendly?</p>
              <p className="mt-2 text-sm text-black/70">
                Yes — the festival is designed for families, friends, and first-time visitors.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-black">What should I wear?</p>
              <p className="mt-2 text-sm text-black/70">Comfortable shoes are recommended for orchard paths.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-black">How do I get there?</p>
              <p className="mt-2 text-sm text-black/70">
                Use the map link in the Location section to open navigation from your current position.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-10 text-sm text-black/60 sm:px-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {festival.name}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-black" href="#highlights">
              Highlights
            </a>
            <a className="hover:text-black" href="#program">
              Program
            </a>
            <a className="hover:text-black" href="#vendors">
              Vendors
            </a>
            <a className="hover:text-black" href="#location">
              Location
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
