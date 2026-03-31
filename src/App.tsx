import { useEffect, useRef, useState } from 'react'
import ClickSpark from './components/ClickSpark'
import ScrollBubbles from './components/ScrollBubbles'
import SplitText from './components/SplitText'

const imgImage85 = '/figma/image85.png'
const img202603011647221 = '/figma/photo1.png'
const imgUnsplashEwtgKJw0Jo = '/figma/unsplash.png'
const img202603011647222 = '/figma/photo2.png'
const img202603011647223 = '/figma/photo3.png'
const imgImage87 = '/figma/image87.png'
const imgImage88 = '/figma/image88.png'
const imgImage89 = '/figma/image89.png'
const imgImage91 = '/figma/image91.png'
const img40782041286919481 = '/figma/vendor.png'
const imgImage86 = '/figma/image86.png'
const img1 = '/figma/sponsor1.png'
const img2 = '/figma/sponsor2.png'
const imgBasemapImage = '/figma/map.png'
const imgRectangle2 = '/figma/rect2.svg'
const imgFrame11 = '/figma/frame11.svg'
const imgEllipse10 = '/figma/ellipse11.svg'
const imgFrame22 = '/figma/ellipse11.svg'
const imgFrame23 = '/figma/ellipse11.svg'
const imgFrame24 = '/figma/ellipse11.svg'
const imgFrame21 = '/figma/ellipse11.svg'
const imgFrame19 = '/figma/ellipse11.svg'
const imgEllipse9 = '/figma/ellipse11.svg'

const DESIGN_WIDTH = 1440
const DESIGN_HEIGHT = 7625
const PROGRAMS_TOP = 1818
const LOCATION_TOP = 2912
const VENDORS_TOP = 3982
const FAQ_TOP = 6685
const neueHaasRoman = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 400,
} as const
const neueHaasMedium = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 500,
} as const
const neueHaasBold = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 700,
} as const

function App() {
  const [scale, setScale] = useState(1)
  const heroExitRefs = useRef<(HTMLDivElement | null)[]>([])
  const scaleRef = useRef(scale)
  scaleRef.current = scale
  const [showAnalogGyulbatInfo, setShowAnalogGyulbatInfo] = useState(false)
  const [showJejuInACitrusInfo, setShowJejuInACitrusInfo] = useState(false)
  const [showCafeGyulkkotDarakInfo, setShowCafeGyulkkotDarakInfo] = useState(false)
  const [showDolbitnaArtFarmInfo, setShowDolbitnaArtFarmInfo] = useState(false)
  const [showSanghyowonInfo, setShowSanghyowonInfo] = useState(false)
  const [showBaekrokDamInfo, setShowBaekrokDamInfo] = useState(false)
  const analogGyulbatHoverTimeoutRef = useRef<number | null>(null)
  const jejuInACitrusHoverTimeoutRef = useRef<number | null>(null)
  const cafeGyulkkotDarakHoverTimeoutRef = useRef<number | null>(null)
  const dolbitnaArtFarmHoverTimeoutRef = useRef<number | null>(null)
  const sanghyowonHoverTimeoutRef = useRef<number | null>(null)
  const baekrokDamHoverTimeoutRef = useRef<number | null>(null)
  const scrollAnimationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const updateScale = () => {
      if (typeof window === 'undefined') return
      const vw = window.innerWidth || DESIGN_WIDTH
      const next = vw / DESIGN_WIDTH
      setScale(Number.isFinite(next) ? next : 1)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  useEffect(() => {
    let rafId = 0
    const applyExit = (el: HTMLDivElement | null, exitX: number, exitY: number, rotation: number, p: number) => {
      if (!el) return
      const e = 1 - Math.pow(1 - p, 3)
      el.style.transform = `translate3d(${e * exitX}px, ${e * exitY}px, 0) rotate(${rotation * e}deg) scale(${1 - e * 0.06})`
      el.style.opacity = String(1 - e * 0.82)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / (scaleRef.current || 1) / 760))
        applyExit(heroExitRefs.current[0], -920, -120, -22, p)
        applyExit(heroExitRefs.current[1], 1080, 60, 24, p)
        applyExit(heroExitRefs.current[2], 820, -100, 28, p)
        applyExit(heroExitRefs.current[3], -820, 70, -28, p)
        rafId = 0
      })
    }

    const init = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / (scaleRef.current || 1) / 760))
      applyExit(heroExitRefs.current[0], -920, -120, -22, p)
      applyExit(heroExitRefs.current[1], 1080, 60, 24, p)
      applyExit(heroExitRefs.current[2], 820, -100, 28, p)
      applyExit(heroExitRefs.current[3], -820, 70, -28, p)
    }
    init()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (analogGyulbatHoverTimeoutRef.current !== null) {
        window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
      }
      if (jejuInACitrusHoverTimeoutRef.current !== null) {
        window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
      }
      if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
        window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
      }
      if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
        window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
      }
      if (sanghyowonHoverTimeoutRef.current !== null) {
        window.clearTimeout(sanghyowonHoverTimeoutRef.current)
      }
      if (baekrokDamHoverTimeoutRef.current !== null) {
        window.clearTimeout(baekrokDamHoverTimeoutRef.current)
      }
      if (scrollAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollAnimationFrameRef.current)
      }
    }
  }, [])

  const scrollToSection = (top: number) => {
    if (typeof window === 'undefined') return
    const targetTop = Math.max(0, top * scale)
    const startTop = window.scrollY
    const distance = targetTop - startTop

    if (Math.abs(distance) < 1) return

    if (scrollAnimationFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollAnimationFrameRef.current)
      scrollAnimationFrameRef.current = null
    }

    const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.35))
    const startTime = performance.now()

    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5)

    const animateScroll = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuint(progress)

      window.scrollTo({
        top: startTop + distance * eased,
        behavior: 'auto',
      })

      if (progress < 1) {
        scrollAnimationFrameRef.current = window.requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo({ top: targetTop, behavior: 'auto' })
        scrollAnimationFrameRef.current = null
      }
    }

    scrollAnimationFrameRef.current = window.requestAnimationFrame(animateScroll)
  }

  return (
    <ClickSpark sparkColor="#fff4df" sparkCount={10} sparkRadius={22} sparkSize={14} duration={500} extraScale={1.15}>
      <ScrollBubbles bubbleColor="rgba(255,244,223,0.5)" spawnPerScroll={5}>
      <div className="min-h-screen bg-black text-white">
        <div className="relative flex w-full justify-center overflow-x-hidden">
          <div
            className="relative"
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
            data-name="Wireframe - 1"
            data-node-id="175:1550"
          >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white" />
        <div className="absolute left-1/2 top-[824px] h-[257px] w-[720px] bg-[#d9d9d9]" data-node-id="177:1686" />
        <div className="absolute left-[-2px] top-[944px] h-[137px] w-[720px] bg-[#d9d9d9]" data-node-id="177:1687" />
        <div className="absolute left-0 top-0 flex h-[7625px] w-[1440.001px] items-center justify-center">
          <div className="flex-none rotate-180">
            <div className="relative h-[7625px] w-[1440.001px]" data-node-id="175:1668">
              <img alt="" className="absolute size-full block max-w-none" src={imgRectangle2} />
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(30%+1px)] top-[378px] h-[614px] w-[575px]" data-node-id="177:1818">
          <div className="absolute inset-[-29.77%_-31.79%_-23.42%_-31.79%]">
            <img alt="" className="block size-full max-w-none" src={imgFrame11} />
          </div>
        </div>
        <div
          className="absolute left-0 top-0 h-[89px] w-[1440px] bg-[#eb3604]"
          data-node-id="275:40"
        >
          <button
            type="button"
            className="absolute left-[1045px] top-[34px] h-[21px] w-[77px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(PROGRAMS_TOP)}
            data-node-id="275:41"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[77px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="275:42"
            >
              Program
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1158px] top-[34px] h-[21px] w-[65px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(VENDORS_TOP)}
            data-node-id="275:43"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[65px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="275:44"
            >
              Vendors
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1259px] top-[34px] h-[21px] w-[64px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(LOCATION_TOP)}
            data-node-id="275:45"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[64px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="275:46"
            >
              Location
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1359px] top-[34px] h-[21px] w-[38px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(FAQ_TOP)}
            data-node-id="275:47"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[38px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="275:48"
            >
              FAQ
            </p>
          </button>
          <p
            className="absolute left-[30px] top-[calc(50%-10.5px)] h-[22px] w-[266px] text-[20px] font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] not-italic leading-[1.053] tracking-[0.4px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '0.4px' }}
            data-node-id="275:49"
          >
            Jeju Tangerine Festival 2026
          </p>
        </div>
        <p
          className="absolute bottom-[84px] left-[calc(75%+45px)] h-[22px] w-[340px] translate-y-full text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
          style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
          data-node-id="207:1025"
        >
          @2026 JEJU TANGERINE FESTIVAL
        </p>
        <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[220px] h-[87px] w-[421px]" data-node-id="275:51">
          <p
            className="-translate-x-1/2 absolute left-1/2 top-[4px] m-0 h-[68px] w-[386px] text-center text-[30px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.6px] text-[#eb3604]"
            style={{ ...neueHaasRoman, letterSpacing: '0.6px' }}
            data-node-id="275:52"
          >
            11.01.26 - 11.07.26
          </p>
          <p
            className="-translate-x-1/2 absolute left-1/2 top-[44px] m-0 h-[47px] w-[575px] text-center text-[30px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[normal] text-[#eb3604]"
            style={{ ...neueHaasRoman }}
            data-node-id="275:53"
          >
            PEEL TANGERINES. FEEL JEJU.
          </p>
        </div>
        <div
          className="absolute left-[67.64%] right-[12.5%] top-[761px] aspect-[1140/1120]"
          data-name="image 85"
          data-node-id="275:63"
        >
          <div ref={(el) => { heroExitRefs.current[0] = el }} className="relative size-full" style={{ willChange: 'transform, opacity' }}>
            <div className="float-orbit-2 relative size-full">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage85} />
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(80%+1.18px)] top-[calc(50%-3402.93px)] flex h-[167.134px] w-[242.355px] items-center justify-center"
          style={{ ['--transform-inner-width' as string]: '1200', ['--transform-inner-height' as string]: '19' }}
        >
          <div ref={(el) => { heroExitRefs.current[1] = el }} style={{ willChange: 'transform, opacity' }}>
            <div className="float-orbit-3">
              <div className="flex-none rotate-[-11.65deg]">
                <div className="relative h-[124.94px] w-[221.693px]" data-name="레이어 1" data-node-id="275:236">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[6.92%_68.85%_89.19%_6.94%] contents" data-name="레이어 3" data-node-id="275:237">
          <div className="absolute inset-[6.92%_68.85%_89.19%_6.94%] contents" data-name="l2RSFC.tif" data-node-id="275:238">
            <div className="absolute inset-[6.92%_68.85%_89.19%_6.94%] flex items-center justify-center">
              <div ref={(el) => { heroExitRefs.current[2] = el }} style={{ willChange: 'transform, opacity' }}>
                <div className="float-orbit-4">
                  <div className="h-[234.218px] w-[304.08px] flex-none rotate-[-12.87deg]">
                    <div className="relative size-full" data-name="레이어 1" data-node-id="275:239">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SplitText
          text="A week-long celebration of Jeju's iconic tangerines"
          tag="p"
          className="-translate-x-1/2 absolute left-1/2 top-[1409px] m-0 h-[209px] w-[1126px]"
          style={{
            color: '#000',
            textAlign: 'center',
            fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
            fontSize: '96px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '1.92px',
          }}
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="absolute left-[calc(5%+6px)] top-[1818px] h-[26px] w-[156px] bg-[#eb3604]" data-node-id="310:296" />
        <div
          className="absolute left-[calc(5%+8px)] top-[1818px] flex w-[669px] flex-col items-start"
          data-node-id="275:64"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic leading-[1.053] tracking-[2.88px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="275:65"
          >
            PROGRAMS
          </p>
        </div>
        <div
          className="flip-card absolute left-[calc(5%+1px)] top-[1923px] h-[603px] w-[310px] cursor-pointer"
          data-node-id="197:293"
        >
          <div className="flip-card-inner size-full">
            {/* Front: 기존 카드 */}
            <div className="flip-card-front border border-solid border-[#eb3604]">
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-none"
                data-name="스크린샷 2026-03-01 16.47.22 1"
                data-node-id="207:1029"
              >
                <div className="absolute inset-0 overflow-hidden rounded-none pointer-events-none">
                  <img alt="" className="absolute left-[-52.7%] top-0 h-full w-[297.99%] max-w-none" src={img202603011647223} />
                </div>
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-none bg-gradient-to-b from-[58.654%] from-[rgba(255,149,88,0.29)] to-[#702900] mix-blend-color"
                data-node-id="197:284"
              />
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] bg-gradient-to-b from-[58.654%] from-[rgba(255,149,88,0.29)] to-[#702900] mix-blend-color"
                data-node-id="207:1034"
              />
              <p
                className="absolute left-[27px] top-[479px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="197:291"
              >
                Tangerines Picking Experience
              </p>
            </div>
            {/* Back: Figma node-id=243-3951 디자인 영역 */}
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#eb3604]">
              <p
                className="absolute left-[27px] top-[51px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Harvest fresh Jeju tangerines directly from the orchard and enjoy the seasonal picking experience
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-card absolute left-[calc(25%+41px)] top-[1923px] h-[603px] w-[310px] cursor-pointer"
          data-node-id="197:294"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front border border-solid border-[#eb3604]">
              <div
                className="absolute left-[-154px] top-[-2px] h-[604px] w-[597px]"
                data-name="스크린샷 2026-03-01 16.47.22 1"
                data-node-id="207:1036"
              >
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={img202603011647221} />
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] bg-gradient-to-b from-[58.654%] from-[rgba(255,149,88,0.29)] to-[#702900] mix-blend-color"
                data-node-id="207:1038"
              />
              <div
                className="absolute left-[27px] top-[479px] h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="197:297"
              >
                <p className="m-0">Tangerine</p>
                <p className="m-0">Jam &amp; Juice</p>
                <p className="m-0">Making</p>
              </div>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#04511b]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Create your own tangerine jam and fresh juice using locally harvested citrus
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-card absolute left-[calc(50%+9px)] top-[1923px] h-[603px] w-[310px] cursor-pointer"
          data-node-id="197:295"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front border border-solid border-[#eb3604]">
              <div
                className="absolute left-[-105.32px] top-[-89.05px] flex h-[779px] w-[519px] items-center justify-center"
                style={{ ['--transform-inner-width' as string]: '1200', ['--transform-inner-height' as string]: '19' }}
              >
                <div className="-rotate-90 flex-none">
                  <div className="relative h-[519px] w-[779px]" data-name="unsplash:ewtgKJw_0Jo" data-node-id="207:1049">
                    <img
                      alt=""
                      className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
                      src={imgUnsplashEwtgKJw0Jo}
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] bg-gradient-to-b from-[58.654%] from-[rgba(255,149,88,0.29)] to-[#702900] mix-blend-color"
                data-node-id="207:1046"
              />
              <div
                className="absolute left-[27px] top-[479px] h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="197:299"
              >
                <p className="m-0">Fresh Local</p>
                <p className="m-0">Farmers&rsquo;</p>
                <p className="m-0">Market</p>
              </div>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#3395ff]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Explore a market featuring fresh produce and specialties from Jeju&apos;s local farmers
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-card absolute left-[calc(70%+49px)] top-[1923px] h-[603px] w-[310px] cursor-pointer"
          data-node-id="197:296"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front border border-solid border-[#eb3604]">
              <div
                className="absolute left-[-87px] top-[-2px] h-[604px] w-[597px]"
                data-name="스크린샷 2026-03-01 16.47.22 1"
                data-node-id="207:1051"
              >
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={img202603011647222} />
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-none border-[1.5px] border-solid border-[#eb3604]"
                data-node-id="197:290"
              />
              <div
                className="absolute left-[27px] top-[479px] h-[98px] w-[210px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="197:301"
              >
                <p className="m-0">Live Local</p>
                <p className="m-0">Music&amp;</p>
                <p className="m-0">Performances</p>
              </div>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#ff9e00]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Enjoy live music and performances by local artists throughout the festival
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(5%+6px)] top-[2912px] h-[26px] w-[258px] bg-[#eb3604]" data-node-id="311:297" />
        <p
          className="absolute left-[calc(5%+8px)] top-[2912px] m-0 h-[34px] w-[669px] text-[24px] not-italic leading-[1.053] tracking-[2.88px] text-white"
          style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
          data-node-id="275:68"
        >{`LOCATION & DATES`}</p>
        <p
          className="absolute left-[calc(5%+8px)] top-[2946px] m-0 h-[24px] w-[669px] text-[14px] not-italic leading-[1.053] tracking-[0.28px] text-black"
          style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
          data-node-id="275:69"
        >
          A cozy southern Jeju neighborhood known for orchards and coastal air.
        </p>
        <div
          className="absolute left-[calc(5%+1px)] top-[3019px] h-[535px] w-[857px] border border-solid border-[#eb3604]"
          data-node-id="275:232"
        >
          <div className="absolute left-[-1px] top-[-1px] h-[535px] w-[857px] rounded-none" data-name="Basemap image" data-node-id="241:3886">
            <div className="absolute inset-0 overflow-hidden rounded-none pointer-events-none">
              <img
                alt=""
                className="absolute left-[0.06%] top-[-3.93%] h-[120%] w-[99.88%] max-w-none"
                src={imgBasemapImage}
              />
            </div>
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[535px] w-[857px] rounded-none bg-[#eb3604] mix-blend-overlay"
            data-name="map"
            data-node-id="205:881"
          />
          <p
            className="absolute left-[31px] top-[465px] m-0 h-[35px] w-[519px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-[#8b0e0e]"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="205:882"
          >
            Hyodon-dong, Seogwipo, Jeju Island
          </p>
        </div>
        <div className="absolute left-[calc(65%+48px)] top-[3019px] h-[535px] w-[383px]" data-node-id="205:885">
          <div className="absolute left-[36px] top-[378px] h-[16px] w-[303px] rounded-none bg-[#eb3604]" data-node-id="206:934" />
          <div className="absolute left-[36px] top-[82px] h-[16px] w-[303px] rounded-none bg-[#eb3604]" data-node-id="207:1002" />
          <div className="absolute left-0 top-0 h-[535px] w-[382px] rounded-none border border-solid border-[#eb3604] bg-white" data-node-id="275:100" />
          <div className="absolute left-[46px] top-[262px] text-[10px] not-italic leading-[1.1] tracking-[0.2px] text-[#333]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px]">25</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px]">28</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px]">26</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px]">29</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px]">27</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px]">30</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px]">31</p>
          </div>
          <div className="absolute left-[46px] top-[173px] text-[10px] not-italic leading-[1.1] tracking-[0.2px]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px] text-[#eb3604]">18</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px] text-[#333]">21</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px] text-[#333]">19</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px] text-[#333]">22</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px] text-[#333]">20</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px] text-[#333]">23</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px] text-[#333]">24</p>
          </div>
          <div className="absolute left-[47px] top-[84px] text-[10px] not-italic leading-[1.1] tracking-[0.2px] text-[#333]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px]">11</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px]">14</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px]">12</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px]">15</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px]">13</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px]">16</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px]">17</p>
          </div>
          <p className="absolute left-[30px] top-[326px] m-0 h-[35px] w-[152px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-[#eb3604]" style={{ ...neueHaasBold, letterSpacing: '0.6px' }} data-node-id="206:892">November</p>
          <p className="absolute left-[30px] top-[30px] m-0 h-[35px] w-[152px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-[#eb3604]" style={{ ...neueHaasBold, letterSpacing: '0.6px' }} data-node-id="207:1001">October</p>
          <div className="absolute left-[47px] top-[381px] text-[10px] not-italic leading-[1.1] tracking-[0.2px]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[8px] text-[#eb3604]">1</p>
            <p className="absolute left-[0px] top-[89.59px] m-0 h-[13.963px] w-[8px] text-[#333]">8</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[7px] text-[#eb3604]">4</p>
            <p className="absolute left-[138px] top-[89.59px] m-0 h-[12.799px] w-[9px] text-[#333]">11</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[8px] text-[#eb3604]">2</p>
            <p className="absolute left-[46px] top-[89.59px] m-0 h-[13.963px] w-[8px] text-[#333]">9</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[7px] text-[#eb3604]">5</p>
            <p className="absolute left-[184px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[#333]">12</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[8px] text-[#eb3604]">3</p>
            <p className="absolute left-[92px] top-[89.59px] m-0 h-[13.963px] w-[12px] text-[#333]">10</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[12.799px] w-[7px] text-[#eb3604]">6</p>
            <p className="absolute left-[230px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[#333]">13</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[6px] text-[#eb3604]">7</p>
            <p className="absolute left-[275px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[#333]">14</p>
          </div>
          <p className="absolute left-[39px] top-[402px] m-0 h-[9px] w-[50px] text-[8px] not-italic leading-[1.1] tracking-[0.16px] text-[#eb3604]" style={{ ...neueHaasRoman, letterSpacing: '0.16px' }} data-node-id="207:1005">Festival Dates</p>
          <p className="absolute left-[36px] top-[107px] m-0 h-[9px] w-[62px] text-[8px] not-italic leading-[1.1] tracking-[0.16px] text-[#eb3604]" style={{ ...neueHaasRoman, letterSpacing: '0.16px' }} data-node-id="207:1007">EarlyBird Tickets</p>
        </div>
        <p
          className="absolute left-[calc(5%+33px)] top-[3573px] m-0 h-[23px] w-[542px] text-[14px] not-italic leading-[1.1] tracking-[0.28px] text-white"
          style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
          data-node-id="205:889"
        >
          Parking is available but limited. Taking a taxi or public transportation is recommended.
        </p>
        <div className="absolute left-[calc(5%+6px)] top-[3982px] h-[26px] w-[132px] bg-[#eb3604]" data-node-id="313:308" />
        <div
          className="absolute left-[calc(5%+8px)] top-[3982px] flex w-[669px] flex-col items-start leading-[1.053]"
          data-node-id="275:70"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="275:71"
          >
            VENDORS
          </p>
          <p
            className="m-0 h-[24px] w-full shrink-0 text-[14px] not-italic tracking-[0.28px] text-black"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="275:72"
          >
            Discover Jeju&apos;s makers and growers - from orchard experiences to botanical gardens.
          </p>
        </div>
        <div className="absolute left-[calc(15%+16px)] top-[4208px] contents" data-node-id="197:327">
          <div className="absolute left-[calc(20%+51px)] top-[4313px] size-[762px]" data-node-id="197:324">
            <div className="absolute inset-[-0.2%]">
              <img alt="" className="block size-full max-w-none" src={imgEllipse10} />
            </div>
          </div>
          <div className="absolute left-[calc(25%+19px)] top-[4350px] size-[703px]" data-node-id="201:336">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame22} />
          </div>
          <div className="absolute left-[calc(15%+26px)] top-[4225px] size-[961.22px]" data-node-id="201:337">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame23} />
          </div>
          <div className="absolute left-[calc(15%+16px)] top-[4221px] size-[961.22px]" data-node-id="201:338">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame24} />
          </div>
          <div className="absolute left-[calc(25%+19px)] top-[4341.22px] size-[703px]" data-node-id="201:335">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame21} />
          </div>
          <div className="absolute left-[calc(15%+25px)] top-[4208px] size-[961.22px]" data-node-id="201:333">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame19} />
          </div>
          <div className="absolute left-[calc(15%+16px)] top-[4212px] size-[961.22px]" data-node-id="201:334">
            <div
              className="absolute left-0 top-0 flex size-[961.22px] items-center justify-center"
              style={{ ['--transform-inner-width' as string]: '1200', ['--transform-inner-height' as string]: '19' }}
            >
              <div className="-rotate-120 -scale-y-100 flex-none">
                <div className="relative size-[703.662px]" data-node-id="197:322">
                  <div className="absolute bottom-[7.6%] left-[51.76%] right-0 top-1/2">
                    <img alt="" className="block size-full max-w-none" src={imgEllipse9} />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Show Analog Gyulbat details"
              className="absolute left-[313px] top-[17px] z-20 h-[292px] w-[357px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(47% 0%, 89% 15%, 100% 54%, 64% 100%, 36% 100%, 0% 54%, 11% 15%)' }}
              onMouseEnter={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                }
                analogGyulbatHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowAnalogGyulbatInfo(true)
                  analogGyulbatHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                  analogGyulbatHoverTimeoutRef.current = null
                }
                setShowAnalogGyulbatInfo(false)
              }}
              onFocus={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                }
                analogGyulbatHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowAnalogGyulbatInfo(true)
                  analogGyulbatHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                  analogGyulbatHoverTimeoutRef.current = null
                }
                setShowAnalogGyulbatInfo(false)
              }}
            />
            <button
              type="button"
              aria-label="Show Jeju In-a-Citrus details"
              className="absolute left-[58px] top-[185px] z-20 h-[318px] w-[315px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(28% 0%, 100% 0%, 100% 58%, 73% 99%, 17% 100%, 0% 68%, 0% 20%)' }}
              onMouseEnter={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                }
                jejuInACitrusHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowJejuInACitrusInfo(true)
                  jejuInACitrusHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                  jejuInACitrusHoverTimeoutRef.current = null
                }
                setShowJejuInACitrusInfo(false)
              }}
              onFocus={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                }
                jejuInACitrusHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowJejuInACitrusInfo(true)
                  jejuInACitrusHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                  jejuInACitrusHoverTimeoutRef.current = null
                }
                setShowJejuInACitrusInfo(false)
              }}
            />
            <button
              type="button"
              aria-label="Show Cafe Gyulkkot-darak details"
              className="absolute left-[57px] top-[493px] z-20 h-[242px] w-[318px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(22% 0%, 100% 0%, 84% 100%, 19% 100%, 0% 60%, 0% 18%)' }}
              onMouseEnter={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                }
                cafeGyulkkotDarakHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowCafeGyulkkotDarakInfo(true)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }
                setShowCafeGyulkkotDarakInfo(false)
              }}
              onFocus={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                }
                cafeGyulkkotDarakHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowCafeGyulkkotDarakInfo(true)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }
                setShowCafeGyulkkotDarakInfo(false)
              }}
            />
            <button
              type="button"
              aria-label="Show Dolbitna Art Farm details"
              className="absolute left-[287px] top-[525px] z-20 h-[341px] w-[405px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(28% 0%, 72% 0%, 100% 84%, 59% 100%, 41% 100%, 0% 84%)' }}
              onMouseEnter={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                }
                dolbitnaArtFarmHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowDolbitnaArtFarmInfo(true)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }
                setShowDolbitnaArtFarmInfo(false)
              }}
              onFocus={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                }
                dolbitnaArtFarmHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowDolbitnaArtFarmInfo(true)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }
                setShowDolbitnaArtFarmInfo(false)
              }}
            />
            <button
              type="button"
              aria-label="Show Sanghyowon Botanical Garden details"
              className="absolute left-[602px] top-[494px] z-20 h-[260px] w-[306px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(18% 0%, 81% 0%, 100% 24%, 100% 72%, 81% 100%, 18% 100%, 0% 56%, 0% 20%)' }}
              onMouseEnter={() => {
                if (sanghyowonHoverTimeoutRef.current !== null) {
                  window.clearTimeout(sanghyowonHoverTimeoutRef.current)
                }
                sanghyowonHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowSanghyowonInfo(true)
                  sanghyowonHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (sanghyowonHoverTimeoutRef.current !== null) {
                  window.clearTimeout(sanghyowonHoverTimeoutRef.current)
                  sanghyowonHoverTimeoutRef.current = null
                }
                setShowSanghyowonInfo(false)
              }}
              onFocus={() => {
                if (sanghyowonHoverTimeoutRef.current !== null) {
                  window.clearTimeout(sanghyowonHoverTimeoutRef.current)
                }
                sanghyowonHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowSanghyowonInfo(true)
                  sanghyowonHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (sanghyowonHoverTimeoutRef.current !== null) {
                  window.clearTimeout(sanghyowonHoverTimeoutRef.current)
                  sanghyowonHoverTimeoutRef.current = null
                }
                setShowSanghyowonInfo(false)
              }}
            />
            <button
              type="button"
              aria-label="Show Baekrok-dam Farm details"
              className="absolute left-[602px] top-[183px] z-20 h-[318px] w-[316px] cursor-pointer bg-transparent"
              style={{ clipPath: 'polygon(18% 0%, 84% 0%, 100% 30%, 100% 82%, 75% 100%, 20% 100%, 0% 70%, 0% 22%)' }}
              onMouseEnter={() => {
                if (baekrokDamHoverTimeoutRef.current !== null) {
                  window.clearTimeout(baekrokDamHoverTimeoutRef.current)
                }
                baekrokDamHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowBaekrokDamInfo(true)
                  baekrokDamHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (baekrokDamHoverTimeoutRef.current !== null) {
                  window.clearTimeout(baekrokDamHoverTimeoutRef.current)
                  baekrokDamHoverTimeoutRef.current = null
                }
                setShowBaekrokDamInfo(false)
              }}
              onFocus={() => {
                if (baekrokDamHoverTimeoutRef.current !== null) {
                  window.clearTimeout(baekrokDamHoverTimeoutRef.current)
                }
                baekrokDamHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowBaekrokDamInfo(true)
                  baekrokDamHoverTimeoutRef.current = null
                }, 200)
              }}
              onBlur={() => {
                if (baekrokDamHoverTimeoutRef.current !== null) {
                  window.clearTimeout(baekrokDamHoverTimeoutRef.current)
                  baekrokDamHoverTimeoutRef.current = null
                }
                setShowBaekrokDamInfo(false)
              }}
            />
            <div
              className="absolute left-[315px] top-[43px] h-[282px] w-[779px]"
              onMouseEnter={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                }
                analogGyulbatHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowAnalogGyulbatInfo(true)
                  analogGyulbatHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (analogGyulbatHoverTimeoutRef.current !== null) {
                  window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                  analogGyulbatHoverTimeoutRef.current = null
                }
                setShowAnalogGyulbatInfo(false)
              }}
            >
              <button
                type="button"
                aria-label="Show Analog Gyulbat details"
                className="absolute left-[64px] top-[84px] h-[198px] w-[338px] cursor-pointer rounded-none bg-transparent"
                onFocus={() => {
                  if (analogGyulbatHoverTimeoutRef.current !== null) {
                    window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                  }
                  analogGyulbatHoverTimeoutRef.current = window.setTimeout(() => {
                    setShowAnalogGyulbatInfo(true)
                    analogGyulbatHoverTimeoutRef.current = null
                  }, 200)
                }}
                onBlur={() => {
                  if (analogGyulbatHoverTimeoutRef.current !== null) {
                    window.clearTimeout(analogGyulbatHoverTimeoutRef.current)
                    analogGyulbatHoverTimeoutRef.current = null
                  }
                  setShowAnalogGyulbatInfo(false)
                }}
              />
              <div
                className={`absolute left-[58px] top-0 h-[241px] w-[721px] transition-all duration-300 ease-out ${
                  showAnalogGyulbatInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="210:1159"
              >
                <div className="absolute left-[159px] top-0 contents" data-node-id="201:438">
                  <div
                    className="absolute left-[159px] top-0 h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:433"
                    style={{ background: 'white', border: '1px solid #eb3604' }}
                  />
                  <p
                    className="absolute left-[207px] top-[21px] m-0 h-[64.834px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                    style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                    data-node-id="201:432"
                  >
                    During the tangerine harvest season, visitors can pick tangerines directly from pesticide-free orchards. Photo spots arranged throughout the orchard create a special and memorable citrus-picking experience in Jeju.
                  </p>
                </div>
                <div
                  className="-translate-x-1/2 absolute left-[116.5px] top-[158px] w-[233px] text-center text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                  style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                  data-node-id="201:332"
                >
                  <p className="m-0 block">Analog Gyulbat</p>
                  <p className="m-0 block">아날로그 귤밭</p>
                </div>
              </div>
            </div>
            <div
              className="absolute left-[-179px] top-[257px] h-[225px] w-[573px]"
              onMouseEnter={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                }
                jejuInACitrusHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowJejuInACitrusInfo(true)
                  jejuInACitrusHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (jejuInACitrusHoverTimeoutRef.current !== null) {
                  window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                  jejuInACitrusHoverTimeoutRef.current = null
                }
                setShowJejuInACitrusInfo(false)
              }}
            >
              <button
                type="button"
                aria-label="Show Jeju In-a-Citrus details"
                className="absolute left-[284px] top-[8px] h-[204px] w-[252px] cursor-pointer rounded-none bg-transparent"
                onFocus={() => {
                  if (jejuInACitrusHoverTimeoutRef.current !== null) {
                    window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                  }
                  jejuInACitrusHoverTimeoutRef.current = window.setTimeout(() => {
                    setShowJejuInACitrusInfo(true)
                    jejuInACitrusHoverTimeoutRef.current = null
                  }, 200)
                }}
                onBlur={() => {
                  if (jejuInACitrusHoverTimeoutRef.current !== null) {
                    window.clearTimeout(jejuInACitrusHoverTimeoutRef.current)
                    jejuInACitrusHoverTimeoutRef.current = null
                  }
                  setShowJejuInACitrusInfo(false)
                }}
              />
              <div
                className={`absolute left-0 top-0 h-[225px] w-[573px] transition-all duration-300 ease-out ${
                  showJejuInACitrusInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="210:1164"
              >
                <div className="absolute left-0 top-0 contents" data-node-id="201:855">
                  <div
                    className="absolute left-0 top-0 h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:856"
                    style={{ background: 'white', border: '1px solid #eb3604' }}
                  />
                  <p
                    className="absolute left-[48px] top-[31px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                    style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                    data-node-id="201:857"
                  >
                    A cafe where visitors can enjoy tangerine-picking experiences and relax. A dedicated photo zone in the orchard offers a popular spot for scenic and memorable photos.
                  </p>
                </div>
                <div
                  className="absolute left-[340px] top-[142px] w-[233px] text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                  style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                  data-node-id="201:339"
                >
                  <p className="m-0 block">Jeju In-a-Citrus</p>
                  <p className="m-0 block">제주에인감귤밭</p>
                </div>
              </div>
            </div>
            <div
              className="absolute left-[-179px] top-[501px] h-[196px] w-[562px]"
              onMouseEnter={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                }
                cafeGyulkkotDarakHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowCafeGyulkkotDarakInfo(true)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                  window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                  cafeGyulkkotDarakHoverTimeoutRef.current = null
                }
                setShowCafeGyulkkotDarakInfo(false)
              }}
            >
              <button
                type="button"
                aria-label="Show Cafe Gyulkkot-darak details"
                className="absolute left-[280px] top-0 h-[196px] w-[256px] cursor-pointer rounded-none bg-transparent"
                onFocus={() => {
                  if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                    window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                  }
                  cafeGyulkkotDarakHoverTimeoutRef.current = window.setTimeout(() => {
                    setShowCafeGyulkkotDarakInfo(true)
                    cafeGyulkkotDarakHoverTimeoutRef.current = null
                  }, 200)
                }}
                onBlur={() => {
                  if (cafeGyulkkotDarakHoverTimeoutRef.current !== null) {
                    window.clearTimeout(cafeGyulkkotDarakHoverTimeoutRef.current)
                    cafeGyulkkotDarakHoverTimeoutRef.current = null
                  }
                  setShowCafeGyulkkotDarakInfo(false)
                }}
              />
              <div
                className={`absolute left-0 top-0 h-[196px] w-[562px] transition-all duration-300 ease-out ${
                  showCafeGyulkkotDarakInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="210:1163"
              >
                <div className="absolute left-0 top-[77px] contents" data-node-id="201:719">
                  <div
                    className="absolute left-0 top-[77px] h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:720"
                    style={{ background: 'white', border: '1px solid #eb3604' }}
                  />
                  <p
                    className="absolute left-[48px] top-[108px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                    style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                    data-node-id="201:721"
                  >
                    The Jeju green tea cream latte and green tangerine Americano are popular menu items. The cafe is also known for its scenic walking paths and photo spots.
                  </p>
                </div>
                <div
                  className="absolute left-[340px] top-0 w-[221px] text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                  style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                  data-node-id="201:340"
                >
                  <p className="m-0 block">Cafe Gyulkkot-</p>
                  <p className="m-0 block">darak</p>
                  <p className="m-0 block">귤꽃다락</p>
                </div>
              </div>
            </div>
            <div
              className="absolute left-[-179px] top-[766px] h-[137px] w-[767px]"
              onMouseEnter={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                }
                dolbitnaArtFarmHoverTimeoutRef.current = window.setTimeout(() => {
                  setShowDolbitnaArtFarmInfo(true)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }, 200)
              }}
              onMouseLeave={() => {
                if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                  window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                  dolbitnaArtFarmHoverTimeoutRef.current = null
                }
                setShowDolbitnaArtFarmInfo(false)
              }}
            >
              <button
                type="button"
                aria-label="Show Dolbitna Art Farm details"
                className="absolute left-[470px] top-0 h-[160px] w-[300px] cursor-pointer rounded-none bg-transparent"
                onFocus={() => {
                  if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                    window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                  }
                  dolbitnaArtFarmHoverTimeoutRef.current = window.setTimeout(() => {
                    setShowDolbitnaArtFarmInfo(true)
                    dolbitnaArtFarmHoverTimeoutRef.current = null
                  }, 200)
                }}
                onBlur={() => {
                  if (dolbitnaArtFarmHoverTimeoutRef.current !== null) {
                    window.clearTimeout(dolbitnaArtFarmHoverTimeoutRef.current)
                    dolbitnaArtFarmHoverTimeoutRef.current = null
                  }
                  setShowDolbitnaArtFarmInfo(false)
                }}
              />
              <div
                className={`absolute left-0 top-0 h-[137px] w-[767px] transition-all duration-300 ease-out ${
                  showDolbitnaArtFarmInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="241:3915"
              >
                <div
                  className="absolute left-0 top-[18px] h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                  data-node-id="201:587"
                />
                <p
                  className="absolute left-[48px] top-[39px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                  style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                  data-node-id="201:588"
                >
                  Promotes and preserves the tradition of Jeju stone walls while encouraging their repair and maintenance across the country. Visitors can also join volunteer experiences building traditional Jeju stone walls.
                </p>
                <div
                  className="absolute left-[544px] top-[-57px] flex h-[83px] w-[267px] flex-col items-center justify-start text-center text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                  style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                  data-node-id="201:341"
                >
                  <p className="m-0 block">Dolbitna Art Farm</p>
                  <p className="m-0 block">돌빛나 예술농장</p>
                </div>
              </div>
            </div>
            <div className="absolute left-[565px] top-[502px] h-[222px] w-[590px]">
              <div
                className={`absolute left-0 top-0 h-[222px] w-[590px] transition-all duration-300 ease-out ${
                  showSanghyowonInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="210:1161"
              >
                <div className="absolute left-0 top-0 h-[222px] w-[590px]" data-node-id="241:3932">
                  <div className="absolute left-[28px] top-[103px] contents" data-node-id="201:456">
                    <div
                      className="absolute left-[28px] top-[103px] h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                      data-node-id="201:457"
                    />
                    <p
                      className="absolute left-[76px] top-[124px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                      style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                      data-node-id="201:458"
                    >
                      A natural garden where diverse flower festivals take place throughout the year. In winter, visitors can see camellia flowers, one of Jeju&apos;s most iconic blooms. The site also conducts plant resource research.
                    </p>
                  </div>
                  <div
                    className="absolute left-0 top-0 w-[267px] text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                    style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                    data-node-id="201:342"
                  >
                    <p className="m-0 block">Sanghyowon Botanical</p>
                    <p className="m-0 block">Garden</p>
                    <p className="m-0 block">상효원 수목원</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[591px] top-[257px] h-[230px] w-[588px]">
              <div
                className={`absolute left-0 top-0 h-[230px] w-[588px] transition-all duration-300 ease-out ${
                  showBaekrokDamInfo
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-2 opacity-0 blur-[2px]'
                }`}
                data-node-id="210:1160"
              >
                <div className="absolute left-[26px] top-0 contents" data-node-id="201:453">
                  <div
                    className="absolute left-[26px] top-0 h-[119px] w-[562px] rounded-none border border-solid border-[#eb3604] bg-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:454"
                    style={{ background: 'white', border: '1px solid #eb3604' }}
                  />
                  <p
                    className="absolute left-[74px] top-[39px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-black"
                    style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
                    data-node-id="201:455"
                  >
                    Located near Jeju Airport, this is a space where visitors can purchase tangerines along with Jeju&apos;s local specialties.
                  </p>
                </div>
                <div
                  className="absolute left-0 top-[147px] w-[267px] text-[24px] not-italic leading-[1.28] tracking-[0.48px] text-[#8b0e0e]"
                  style={{ fontFamily: '"Pretendard", sans-serif', fontWeight: 600, letterSpacing: '0.48px' }}
                  data-node-id="201:343"
                >
                  <p className="m-0 block">Baekrok-dam Farm</p>
                  <p className="m-0 block">백록담 감귤농장</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(5%+8px)] top-[5474px] h-[26px] w-[197px] bg-[#eb3604]" data-node-id="314:337" />
        <div
          className="absolute left-[calc(5%+8px)] top-[5475px] flex w-[669px] flex-col items-start leading-[1.053]"
          data-node-id="275:73"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="275:74"
          >
            SPONSORSHIP
          </p>
          <p
            className="m-0 w-full shrink-0 text-[14px] not-italic tracking-[0.28px] text-black"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="275:75"
          >
            Thank you to our partners for helping make the festival possible.
          </p>
        </div>
        <div
          className="flip-card -translate-x-1/2 absolute left-[calc(27.5%-9px)] top-[5658px] h-[577px] w-[310px] cursor-pointer"
          data-node-id="205:870"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front overflow-clip rounded-none border border-solid border-[#eb3604]">
              <div
                className="absolute left-[-249px] top-[-1px] h-[577px] w-[1018px]"
                data-name="407820_412869_1948 1"
                data-node-id="207:1054"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={img40782041286919481}
                />
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[322px] w-[310px] rounded-none bg-white"
                data-node-id="205:871"
              />
              <div className="absolute left-[99px] top-[17px] h-[36px] w-[109px]" data-name="image 86" data-node-id="207:1057">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage86} />
              </div>
              <div className="absolute left-[24px] top-[478px] h-[37px] w-[152px] bg-[#eb3604]" data-node-id="314:332" />
              <p
                className="absolute left-[26px] top-[478px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="205:872"
              >
                Nonghyup
              </p>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#702900]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Supporting local agriculture and promoting Jeju&apos;s tangerine industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-card -translate-x-1/2 absolute left-1/2 top-[5658px] h-[577px] w-[310px] cursor-pointer"
          data-node-id="205:862"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front overflow-clip rounded-none border border-solid border-[#eb3604]">
              <div className="absolute left-[-370px] top-[-1px] h-[577px] w-[932px]" data-name="image 87" data-node-id="207:1060">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage87} />
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[577px] w-[310px] rounded-none bg-white"
                data-node-id="207:1062"
              />
              <div className="absolute left-[24px] top-[478px] h-[37px] w-[115px] bg-[#eb3604]" data-node-id="314:333" />
              <p
                className="absolute left-[26px] top-[478px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="205:864"
              >
                Osulloc
              </p>
              <div className="absolute left-[89px] top-[-1px] size-[128px]" data-name="image 88" data-node-id="207:1065">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage88} />
              </div>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#702900]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Celebrating Jeju&apos;s natural flavors through premium tea and local ingredients
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-card -translate-x-1/2 absolute left-[calc(72.5%+9px)] top-[5658px] h-[577px] w-[310px] cursor-pointer"
          data-node-id="205:873"
        >
          <div className="flip-card-inner size-full">
            <div className="flip-card-front overflow-clip rounded-none border border-solid border-[#eb3604]">
              <div className="absolute left-[-293px] top-[-1px] h-[577px] w-[986px]" data-name="image 89" data-node-id="207:1072">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage89} />
              </div>
              <div
                className="absolute left-[-1px] top-[-1px] h-[577px] w-[310px] rounded-none bg-white"
                data-node-id="207:1074"
              />
              <div className="absolute left-[24px] top-[478px] h-[67px] w-[186px] bg-[#eb3604]" data-node-id="314:335" />
              <p
                className="absolute left-[26px] top-[478px] m-0 max-w-[243px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
                style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
                data-node-id="205:875"
              >
                Jeju Tourism Organization
              </p>
              <div className="absolute left-[83px] top-[8px] h-[51px] w-[141px]" data-name="image 91" data-node-id="207:1083">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 top-[-34.63%] h-[164.08%] w-[143.48%] max-w-none" src={imgImage91} />
                </div>
              </div>
            </div>
            <div className="flip-card-back border border-solid border-[#eb3604] bg-[#702900]">
              <p
                className="absolute left-[27px] top-[44px] m-0 text-left"
                style={{
                  width: '255px',
                  height: '231px',
                  color: '#FFF',
                  ...neueHaasRoman,
                  fontSize: '32px',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                }}
              >
                Promoting Jeju&apos;s culture, nature, and tourism experiences to visitors worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(5%+8px)] top-[6685px] h-[26px] w-[441px] bg-[#eb3604]" data-node-id="315:341" />
        <div
          className="absolute left-[calc(5%+8px)] top-[6685px] flex w-[669px] flex-col items-start"
          data-node-id="275:76"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic leading-[1.053] tracking-[2.88px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="275:77"
          >
            FREQUENTLY ASKED QUESTIONS
          </p>
        </div>
        <div className="absolute left-[calc(10%-13px)] top-[6799px] h-[119px] w-[1236px]" data-node-id="207:969">
          <div
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-none bg-[#eb3604]"
            data-node-id="207:970"
          />
          <p
            className="absolute left-[45px] top-[25px] m-0 h-[35px] w-[252px] text-[20px] not-italic leading-[1.1] tracking-[0.4px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.4px' }}
            data-node-id="207:971"
          >
            Do I need tickets?
          </p>
          <p
            className="absolute left-[60px] top-[67px] m-0 h-[35px] w-[1113px] text-[16px] not-italic leading-[1.1] tracking-[0.32px] text-white"
            style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
            data-node-id="207:972"
          >
            Entry is permitted only with a valid ticket. Tickets can be purchased online, and on-site purchases include tax. Early bird tickets are available at a 20% discount.
          </p>
        </div>
        <div className="absolute left-[calc(10%-13px)] top-[6943px] h-[119px] w-[1236px]" data-node-id="207:1013">
          <div
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-none bg-[#04511b]"
            data-node-id="207:1014"
          />
          <p
            className="absolute left-[45px] top-[25px] m-0 h-[35px] w-[252px] text-[20px] not-italic leading-[1.1] tracking-[0.4px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.4px' }}
            data-node-id="207:1015"
          >
            Is it family-friendly?
          </p>
          <p
            className="absolute left-[60px] top-[67px] m-0 h-[35px] w-[1113px] text-[16px] not-italic leading-[1.1] tracking-[0.32px] text-white"
            style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
            data-node-id="207:1016"
          >
            Yes. The festival is designed for families, friends, and first-time visitors.
          </p>
        </div>
        <div className="absolute left-[calc(10%-13px)] top-[7087px] h-[119px] w-[1236px]" data-node-id="207:1017">
          <div
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-none bg-[#1daeef]"
            data-node-id="207:1018"
          />
          <p
            className="absolute left-[45px] top-[25px] m-0 h-[35px] w-[252px] text-[20px] not-italic leading-[1.1] tracking-[0.4px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.4px' }}
            data-node-id="207:1019"
          >
            Are pets allowed?
          </p>
          <p
            className="absolute left-[60px] top-[67px] m-0 h-[35px] w-[1113px] text-[16px] not-italic leading-[1.1] tracking-[0.32px] text-white"
            style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
            data-node-id="207:1020"
          >
            Yes. Please keep your pet on a leash at all times and clean up after them. We ask all visitors to ensure their pets do not disturb other guests.
          </p>
        </div>
        <div className="absolute left-[calc(10%-13px)] top-[7231px] h-[119px] w-[1236px]" data-node-id="207:1021">
          <div
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-none bg-[#ffb700]"
            data-node-id="207:1022"
          />
          <p
            className="absolute left-[45px] top-[25px] m-0 h-[35px] w-[343px] text-[20px] not-italic leading-[1.1] tracking-[0.4px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.4px' }}
            data-node-id="207:1023"
          >
            Is the venue wheelchair accessible?
          </p>
          <p
            className="absolute left-[60px] top-[67px] m-0 h-[35px] w-[1113px] text-[16px] not-italic leading-[1.1] tracking-[0.32px] text-white"
            style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
            data-node-id="207:1024"
          >
            Yes. the venue is wheelchair accessible. Most areas of the festival grounds are accessible, and staff will be available to assist visitors if needed.
          </p>
        </div>
          {/* 이하 섹션도 Figma 코드 그대로 이어지며, 레이아웃/폰트/색상/텍스트는 전부 동일하게 유지됩니다. */}
          </div>
        </div>
      </div>
      </ScrollBubbles>
    </ClickSpark>
  )
}

export default App
