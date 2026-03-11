import { useEffect, useRef, useState } from 'react'
import ClickSpark from './components/ClickSpark'

const imgImage69 = 'http://localhost:3845/assets/9e68c60b7bf7096e6502807c910f71435c656295.png'
const imgImage85 = 'http://localhost:3845/assets/0ab8cf7d93dfacba70b8243c0ffdb8f6976b79bb.png'
const img202603011647221 = 'http://localhost:3845/assets/90cfa5162859cc6965a0efe13f4528204a510d9e.png'
const imgUnsplashEwtgKJw0Jo = 'http://localhost:3845/assets/fea6b53964bb87449488dce79b082d5fccd25af1.png'
const img202603011647222 = 'http://localhost:3845/assets/8db79e397654dcf8304fc6eb92303216ca044bf0.png'
const img202603011647223 = 'http://localhost:3845/assets/07c7154135b586692dfc85f1c192fa12e78ced07.png'
const imgImage87 = 'http://localhost:3845/assets/0715629310cfe06d9cbb93fe322049cc2089cb89.png'
const imgImage88 = 'http://localhost:3845/assets/d2c187b37c7e4cb769f9418c063181e864f4493a.png'
const imgImage89 = 'http://localhost:3845/assets/fa523e6b31911fe2c74e50ee5b24e0157953aa35.png'
const imgImage91 = 'http://localhost:3845/assets/9f66618a7957c999dcac2eaa5bd03c939ea6d1bb.png'
const img40782041286919481 = 'http://localhost:3845/assets/e7abe80668be157e03d40c74fd0c8e4beff6c147.png'
const imgImage86 = 'http://localhost:3845/assets/b67bafbec111d30865748cb06dba81e08a594746.png'
const img1 = 'http://localhost:3845/assets/5b22fcb0021fba51089ecb7d85d2423eca6533f1.png'
const img2 = 'http://localhost:3845/assets/c8465d0ff5aa114591f2d98dc378ffb5d5bf0af8.png'
const imgBasemapImage = '/figma/map.png?v=2'
const imgRectangle2 = 'http://localhost:3845/assets/0facbaa74f677ab1889ef7d7963061ea8b7d7033.svg'
const imgFrame11 = 'http://localhost:3845/assets/c2f8a6677975ce8ba606da99846550f4b791934c.svg'
const imgFrame10 = 'http://localhost:3845/assets/eca861d6908747be249d14f959111144a840bff9.svg'
const imgEllipse10 = 'http://localhost:3845/assets/101efbca94ee897a2ac40d509f6297218e8bcd31.svg'
const imgFrame22 = 'http://localhost:3845/assets/76cd785b2bc89a810b5ce3f54f6bff95c5abb26e.svg'
const imgFrame23 = 'http://localhost:3845/assets/a8c07dfee0f2147105f0484dbdad121d1bea9f50.svg'
const imgFrame24 = 'http://localhost:3845/assets/4ddfbba3f431674ead3e37271088245113ccd0f6.svg'
const imgFrame21 = 'http://localhost:3845/assets/1b18736f552cd7e11eea04c42a189b2a49389ed9.svg'
const imgFrame19 = 'http://localhost:3845/assets/860a852b1ee6f71d3350eb1a078c0c02182aa449.svg'
const imgEllipse9 = 'http://localhost:3845/assets/f9738883787ed130262fcfab8828ffd8d83a44ba.svg'

const DESIGN_WIDTH = 1440
const DESIGN_HEIGHT = 7625
const PROGRAMS_TOP = 1818
const LOCATION_TOP = 2912
const VENDORS_TOP = 3982
const FAQ_TOP = 6621
const neueHaasRoman = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 400,
} as const
const neueHaasMedium = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 500,
} as const
const neueHaasLight = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 300,
} as const
const neueHaasBold = {
  fontFamily: '"Neue Haas Grotesk Display Pro", "Pretendard", sans-serif',
  fontWeight: 700,
} as const

function App() {
  const [scale, setScale] = useState(1)
  const [heroFloatExitProgress, setHeroFloatExitProgress] = useState(0)
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
    const updateHeroFloatExitProgress = () => {
      if (typeof window === 'undefined') return
      const designScrollY = window.scrollY / (scale || 1)
      const nextProgress = Math.min(Math.max(designScrollY / 760, 0), 1)
      setHeroFloatExitProgress(nextProgress)
    }

    updateHeroFloatExitProgress()
    window.addEventListener('scroll', updateHeroFloatExitProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateHeroFloatExitProgress)
  }, [scale])

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

  const getHeroFloatExitStyle = (
    baseX: number,
    baseY: number,
    exitX: number,
    exitY: number,
    rotation = 0,
    baseScale = 1,
  ) => {
    const easedExit = 1 - Math.pow(1 - heroFloatExitProgress, 3)

    return {
      transform: `translate3d(${baseX + easedExit * exitX}px, ${baseY + easedExit * exitY}px, 0) rotate(${rotation * easedExit}deg) scale(${baseScale * (1 - easedExit * 0.06)})`,
      opacity: 1 - easedExit * 0.82,
      willChange: 'transform, opacity',
    }
  }

  return (
    <ClickSpark sparkColor="#fff4df" sparkCount={10} sparkRadius={22} sparkSize={14} duration={500} extraScale={1.15}>
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
          className="absolute left-px top-0 h-[89px] w-[1440px] bg-[rgba(255,255,255,0.15)]"
          data-node-id="175:1635"
        >
          <button
            type="button"
            className="absolute left-[1045px] top-[34px] h-[21px] w-[77px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(PROGRAMS_TOP)}
            data-node-id="175:1641"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[77px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="175:1636"
            >
              Program
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1158px] top-[34px] h-[21px] w-[65px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(VENDORS_TOP)}
            data-node-id="175:1642"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[65px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="175:1638"
            >
              Vendors
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1259px] top-[34px] h-[21px] w-[64px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(LOCATION_TOP)}
            data-node-id="175:1643"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[64px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="175:1639"
            >
              Location
            </p>
          </button>
          <button
            type="button"
            className="absolute left-[1359px] top-[34px] h-[21px] w-[38px] cursor-pointer bg-transparent p-0 text-left"
            onClick={() => scrollToSection(FAQ_TOP)}
            data-node-id="175:1644"
          >
            <p
              className="absolute left-0 top-[calc(50%-10.5px)] h-[21px] w-[38px] text-[16px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.32px] text-white"
              style={{ ...neueHaasRoman, letterSpacing: '0.32px' }}
              data-node-id="175:1640"
            >
              FAQ
            </p>
          </button>
          <div className="absolute left-[695.68px] top-[10px] h-[64px] w-[48.667px]" data-node-id="177:1805">
            <img alt="" className="absolute block size-full max-w-none" src={imgFrame10} />
          </div>
          <p
            className="absolute left-[30px] top-[calc(50%-10.5px)] h-[22px] w-[266px] text-[20px] font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] not-italic leading-[1.053] tracking-[0.4px] text-white"
            style={{ ...neueHaasMedium, letterSpacing: '0.4px' }}
            data-node-id="175:1633"
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
        <div className="absolute left-[calc(25%+30px)] top-[163px] h-[104px] w-[660px]" data-node-id="177:1853">
          <div
            className="-translate-x-1/2 absolute left-1/2 top-0 h-[104px] w-[530px] rounded-[72px] border border-solid border-white"
            data-node-id="177:1713"
            style={{
              backgroundImage:
                'linear-gradient(100.751deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
            }}
          />
          <p
            className="-translate-x-1/2 absolute left-1/2 top-[17px] m-0 h-[68px] w-[386px] text-center text-[30px] font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] not-italic leading-[1.053] tracking-[0.6px] text-white"
            style={{ ...neueHaasLight, letterSpacing: '0.6px' }}
            data-node-id="175:1667"
          >
            11.01.26 - 11.07.26
          </p>
          <p
            className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[57px] m-0 h-[47px] w-[575px] text-center text-[30px] font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] not-italic leading-[normal] text-white"
            style={{ ...neueHaasLight, letterSpacing: '0px' }}
            data-node-id="175:1670"
          >
            PEEL TANGERINES. FEEL JEJU.
          </p>
        </div>
        <div className="absolute left-[calc(35%+26px)] top-[1031px] h-[50px] w-[163px] rounded-[100px]" data-node-id="175:1680">
          <div
            className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(0,0,0,0)] opacity-80"
            data-node-id="175:1681"
          >
            <div
              className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(255,255,255,0.9)]"
              data-node-id="175:1673"
            />
          </div>
          <p
            className="-translate-x-1/2 absolute left-[82px] top-[14px] m-0 h-[29px] w-[130px] text-center text-[18px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.36px] text-black"
            style={{ ...neueHaasRoman, letterSpacing: '0.36px' }}
            data-node-id="175:1677"
          >
            View Program
          </p>
        </div>
        <div className="absolute left-[calc(50%+27px)] top-[1031px] h-[50px] w-[163px] rounded-[100px]" data-node-id="175:1679">
          <div
            className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(0,0,0,0)] opacity-80"
            data-node-id="175:1682"
          >
            <div
              className="absolute left-0 top-0 h-[50px] w-[163px] rounded-[100px] bg-[rgba(255,255,255,0.9)]"
              data-node-id="175:1676"
            />
          </div>
          <p
            className="-translate-x-1/2 absolute left-[82px] top-[15px] m-0 h-[29px] w-[130px] text-center text-[18px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053] tracking-[0.36px] text-black"
            style={{ ...neueHaasRoman, letterSpacing: '0.36px' }}
            data-node-id="175:1678"
          >
            Get Tickets
          </p>
        </div>
        <div className="absolute left-[2.31%] right-[74.03%] top-[304.53px] flex aspect-[340.7181986097812/327.96715335845147] items-center justify-center">
          <div className="float-orbit-1" style={getHeroFloatExitStyle(0, 0, -760, -80, -18)}>
            <div className="h-[210.986px] w-[267.894px] flex-none rotate-[-35.88deg]">
              <div className="relative size-full" data-name="image 69" data-node-id="177:1706">
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={imgImage69}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-[71.67%] right-[8.47%] top-[722px] aspect-[1140/1120]"
          data-name="image 85"
          data-node-id="177:1705"
        >
          <div className="float-orbit-2 relative size-full" style={getHeroFloatExitStyle(0, 0, 860, 30, 18)}>
            <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage85} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(80%+1.18px)] top-[calc(50%-3435.93px)] flex h-[167.134px] w-[242.355px] items-center justify-center"
          style={{ ['--transform-inner-width' as string]: '1200', ['--transform-inner-height' as string]: '19' }}
        >
          <div className="float-orbit-3" style={getHeroFloatExitStyle(0, 0, 620, -70, 20)}>
            <div className="flex-none rotate-[-11.65deg]">
              <div className="relative h-[124.94px] w-[221.693px]" data-name="레이어 1" data-node-id="209:1133">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[12.28%_69.05%_83.84%_6.74%] contents" data-name="레이어 3" data-node-id="209:1134">
          <div className="absolute inset-[12.28%_69.05%_83.84%_6.74%] contents" data-name="l2RSFC.tif" data-node-id="209:1135">
            <div className="absolute inset-[12.28%_69.05%_83.84%_6.74%] flex items-center justify-center">
              <div className="float-orbit-4" style={getHeroFloatExitStyle(0, 0, -620, -70, -20)}>
                <div className="h-[234.218px] w-[304.08px] flex-none rotate-[-12.87deg]">
                  <div className="relative size-full" data-name="레이어 1" data-node-id="209:1136">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute left-1/2 top-[1487px] h-[125px] w-[856px] text-center text-[#8b0e0e]"
          data-node-id="210:1141"
        >
          <p
            className="-translate-x-1/2 absolute left-1/2 top-0 m-0 h-[68px] w-[548px] text-[42px] font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] not-italic leading-[1.053]"
            style={{ ...neueHaasMedium, letterSpacing: '0.84px' }}
            data-node-id="197:282"
          >
            What to look forward to
          </p>
          <p
            className="-translate-x-1/2 absolute left-1/2 top-[78px] m-0 h-[47px] w-[856px] text-[24px] font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] not-italic leading-[1.053]"
            style={{ ...neueHaasRoman, letterSpacing: '0.48px' }}
            data-node-id="197:283"
          >
            A week-long promotion &amp; celebration of Jeju&apos;s iconic tangerines
          </p>
        </div>
        <div
          className="absolute left-[calc(5%+8px)] top-[1818px] flex w-[669px] flex-col items-start leading-[1.053] text-white"
          data-node-id="197:310"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px]"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="197:285"
          >
            PROGRAMS
          </p>
          <p
            className="m-0 h-[24px] w-full shrink-0 text-[14px] not-italic tracking-[0.28px]"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="197:307"
          >
            *Detailed time slots and ticketing will be announced by partners closer to the festival dates.
          </p>
        </div>
        <div
          className="absolute left-[calc(5%+1px)] top-[1923px] h-[603px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="197:293"
        >
          <div
            className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-[20px]"
            data-name="스크린샷 2026-03-01 16.47.22 1"
            data-node-id="207:1029"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
              <img alt="" className="absolute left-[-52.7%] top-0 h-full w-[297.99%] max-w-none" src={img202603011647223} />
            </div>
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-[20px] bg-gradient-to-b from-[47.264%] from-[rgba(255,255,255,0.25)] to-[86.982%] to-[rgba(156,57,12,0.25)]"
            data-node-id="197:284"
          />
          <div
            className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] bg-gradient-to-b from-[58.654%] from-[rgba(255,149,88,0.29)] to-[#702900] mix-blend-color"
            data-node-id="207:1034"
          />
          <p
            className="absolute left-[26px] top-[478px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="197:291"
          >
            Tangerines Picking Experience
          </p>
        </div>
        <div
          className="absolute left-[calc(25%+41px)] top-[1923px] h-[603px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="197:294"
        >
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
            className="absolute left-[26px] top-[478px] h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="197:297"
          >
            <p className="m-0">Tangerine</p>
            <p className="m-0">Jam &amp; Juice</p>
            <p className="m-0">Making</p>
          </div>
        </div>
        <div
          className="absolute left-[calc(50%+9px)] top-[1923px] h-[603px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="197:295"
        >
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
            className="absolute left-[26px] top-[478px] h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="197:299"
          >
            <p className="m-0">Fresh Local</p>
            <p className="m-0">Farmers&rsquo;</p>
            <p className="m-0">Market</p>
          </div>
        </div>
        <div
          className="absolute left-[calc(70%+49px)] top-[1923px] h-[603px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="197:296"
        >
          <div
            className="absolute left-[-87px] top-[-2px] h-[604px] w-[597px]"
            data-name="스크린샷 2026-03-01 16.47.22 1"
            data-node-id="207:1051"
          >
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={img202603011647222} />
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[603px] w-[310px] rounded-[20px] border-[1.5px] border-solid border-white bg-gradient-to-b from-[47.264%] from-[rgba(255,255,255,0.25)] to-[86.982%] to-[rgba(156,57,12,0.25)]"
            data-node-id="197:290"
          />
          <div
            className="absolute left-[26px] top-[478px] h-[98px] w-[210px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="197:301"
          >
            <p className="m-0">Live Local</p>
            <p className="m-0">Music&amp;</p>
            <p className="m-0">Performances</p>
          </div>
        </div>
        <div
          className="absolute left-[calc(5%+8px)] top-[2912px] grid w-[669px] grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] leading-[1.053] text-white"
          data-node-id="205:876"
        >
          <p
            className="col-1 row-1 m-0 h-[34px] shrink-0 justify-self-stretch text-[24px] not-italic tracking-[2.88px]"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="205:877"
          >{`LOCATION & DATES`}</p>
          <p
            className="col-1 row-2 m-0 h-[24px] shrink-0 justify-self-stretch text-[14px] not-italic tracking-[0.28px]"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="205:878"
          >
            A cozy southern Jeju neighborhood known for orchards and coastal air.
          </p>
        </div>
        <div
          className="absolute left-[calc(5%+1px)] top-[3019px] h-[535px] w-[857px] rounded-[20px] border border-solid border-white"
          data-node-id="207:1011"
        >
          <div className="absolute left-[-1px] top-[-1px] h-[535px] w-[857px] rounded-[20px]" data-name="Basemap image" data-node-id="241:3886">
            <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
              <img
                alt=""
                className="absolute left-[0.06%] top-[-3.93%] h-[120%] w-[99.88%] max-w-none"
                src={imgBasemapImage}
              />
            </div>
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[535px] w-[857px] rounded-[20px] bg-[#eb3604] mix-blend-overlay"
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
          <div className="absolute left-[36px] top-[378px] h-[16px] w-[303px] rounded-[64px] bg-[#eb3604]" data-node-id="206:934" />
          <div className="absolute left-[36px] top-[82px] h-[16px] w-[303px] rounded-[64px] bg-[#eb3604]" data-node-id="207:1002" />
          <div className="absolute left-0 top-0 h-[535px] w-[382px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[47.264%] from-[rgba(255,255,255,0.25)] to-[86.982%] to-[rgba(156,57,12,0.25)]" data-node-id="205:886" />
          <div className="absolute left-[46px] top-[262px] text-[10px] not-italic leading-[1.1] tracking-[0.2px] text-[rgba(255,255,255,0.72)]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px]">25</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px]">28</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px]">26</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px]">29</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px]">27</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px]">30</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px]">31</p>
          </div>
          <div className="absolute left-[46px] top-[173px] text-[10px] not-italic leading-[1.1] tracking-[0.2px]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px] text-white">18</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px] text-[rgba(255,255,255,0.72)]">21</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px] text-[rgba(255,255,255,0.72)]">19</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px] text-[rgba(255,255,255,0.72)]">22</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px] text-[rgba(255,255,255,0.72)]">20</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px] text-[rgba(255,255,255,0.72)]">23</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px] text-[rgba(255,255,255,0.72)]">24</p>
          </div>
          <div className="absolute left-[47px] top-[84px] text-[10px] not-italic leading-[1.1] tracking-[0.2px] text-white" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[14px]">11</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[13px]">14</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[14px]">12</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[13px]">15</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[21px]">13</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[13px] w-[14px]">16</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[13px]">17</p>
          </div>
          <p className="absolute left-[30px] top-[326px] m-0 h-[35px] w-[152px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white" style={{ ...neueHaasBold, letterSpacing: '0.6px' }} data-node-id="206:892">November</p>
          <p className="absolute left-[30px] top-[30px] m-0 h-[35px] w-[152px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white" style={{ ...neueHaasBold, letterSpacing: '0.6px' }} data-node-id="207:1001">October</p>
          <div className="absolute left-[47px] top-[381px] text-[10px] not-italic leading-[1.1] tracking-[0.2px]" style={neueHaasBold}>
            <p className="absolute left-[0px] top-[0px] m-0 h-[13.963px] w-[8px] text-white">1</p>
            <p className="absolute left-[0px] top-[89.59px] m-0 h-[13.963px] w-[8px] text-[rgba(255,255,255,0.72)]">8</p>
            <p className="absolute left-[138px] top-[0px] m-0 h-[12.799px] w-[7px] text-white">4</p>
            <p className="absolute left-[138px] top-[89.59px] m-0 h-[12.799px] w-[9px] text-[rgba(255,255,255,0.72)]">11</p>
            <p className="absolute left-[46px] top-[0px] m-0 h-[13.963px] w-[8px] text-white">2</p>
            <p className="absolute left-[46px] top-[89.59px] m-0 h-[13.963px] w-[8px] text-[rgba(255,255,255,0.72)]">9</p>
            <p className="absolute left-[184px] top-[0px] m-0 h-[12.799px] w-[7px] text-white">5</p>
            <p className="absolute left-[184px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[rgba(255,255,255,0.72)]">12</p>
            <p className="absolute left-[92px] top-[0px] m-0 h-[13.963px] w-[8px] text-white">3</p>
            <p className="absolute left-[92px] top-[89.59px] m-0 h-[13.963px] w-[12px] text-[rgba(255,255,255,0.72)]">10</p>
            <p className="absolute left-[230px] top-[0px] m-0 h-[12.799px] w-[7px] text-white">6</p>
            <p className="absolute left-[230px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[rgba(255,255,255,0.72)]">13</p>
            <p className="absolute left-[275px] top-[0px] m-0 h-[12.799px] w-[6px] text-white">7</p>
            <p className="absolute left-[275px] top-[89.59px] m-0 h-[12.799px] w-[11px] text-[rgba(255,255,255,0.72)]">14</p>
          </div>
          <p className="absolute left-[39px] top-[402px] m-0 h-[9px] w-[50px] text-[8px] not-italic leading-[1.1] tracking-[0.16px] text-white" style={{ ...neueHaasRoman, letterSpacing: '0.16px' }} data-node-id="207:1005">Festival Dates</p>
          <p className="absolute left-[36px] top-[107px] m-0 h-[9px] w-[62px] text-[8px] not-italic leading-[1.1] tracking-[0.16px] text-white" style={{ ...neueHaasRoman, letterSpacing: '0.16px' }} data-node-id="207:1007">EarlyBird Tickets</p>
        </div>
        <p
          className="absolute left-[calc(5%+33px)] top-[3573px] m-0 h-[23px] w-[542px] text-[14px] not-italic leading-[1.1] tracking-[0.28px] text-white"
          style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
          data-node-id="205:889"
        >
          Parking is available but limited. Taking a taxi or public transportation is recommended.
        </p>
        <div
          className="absolute left-[calc(5%+8px)] top-[3982px] flex w-[669px] flex-col items-start leading-[1.053] text-white"
          data-node-id="197:311"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px]"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="197:312"
          >
            VENDORS
          </p>
          <p
            className="m-0 h-[24px] w-full shrink-0 text-[14px] not-italic tracking-[0.28px]"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="197:313"
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
                className="absolute left-[64px] top-[84px] h-[198px] w-[338px] cursor-pointer rounded-[999px] bg-transparent"
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
                    className="absolute left-[159px] top-0 h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:433"
                    style={{
                      backgroundImage:
                        'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                    }}
                  />
                  <p
                    className="absolute left-[207px] top-[21px] m-0 h-[64.834px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
                className="absolute left-[284px] top-[8px] h-[204px] w-[252px] cursor-pointer rounded-[999px] bg-transparent"
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
                    className="absolute left-0 top-0 h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:856"
                    style={{
                      backgroundImage:
                        'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                    }}
                  />
                  <p
                    className="absolute left-[48px] top-[31px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
                className="absolute left-[280px] top-0 h-[196px] w-[256px] cursor-pointer rounded-[999px] bg-transparent"
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
                    className="absolute left-0 top-[77px] h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:720"
                    style={{
                      backgroundImage:
                        'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                    }}
                  />
                  <p
                    className="absolute left-[48px] top-[108px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
                className="absolute left-[470px] top-0 h-[160px] w-[300px] cursor-pointer rounded-[999px] bg-transparent"
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
                  className="absolute left-0 top-[18px] h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                  data-node-id="201:587"
                  style={{
                    backgroundImage:
                      'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                  }}
                />
                <p
                  className="absolute left-[48px] top-[39px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
                      className="absolute left-[28px] top-[103px] h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                      data-node-id="201:457"
                      style={{
                        backgroundImage:
                          'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                      }}
                    />
                    <p
                      className="absolute left-[76px] top-[124px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
                    className="absolute left-[26px] top-0 h-[119px] w-[562px] rounded-[96px] border border-solid border-white shadow-[0px_4px_16.5px_0px_rgba(0,0,0,0.1)]"
                    data-node-id="201:454"
                    style={{
                      backgroundImage:
                        'linear-gradient(99.9799deg, rgba(255, 255, 255, 0.17) 0.52999%, rgba(125, 153, 152, 0.24) 17.302%, rgba(125, 153, 152, 0.24) 81.595%, rgba(255, 255, 255, 0.17) 97.435%)',
                    }}
                  />
                  <p
                    className="absolute left-[74px] top-[39px] m-0 h-[47px] w-[466px] text-[16px] not-italic leading-[1.28] tracking-[0.32px] text-white"
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
        <div
          className="absolute left-[calc(5%+8px)] top-[5475px] flex w-[669px] flex-col items-start leading-[1.053] text-white"
          data-node-id="201:428"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px]"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="201:429"
          >
            SPONSORSHIP
          </p>
          <p
            className="m-0 w-full shrink-0 text-[14px] not-italic tracking-[0.28px]"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="201:430"
          >
            Thank you to our partners for helping make the festival possible.
          </p>
        </div>
        <div
          className="-translate-x-1/2 absolute left-[calc(27.5%-9px)] top-[5658px] h-[577px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="205:870"
        >
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
            className="absolute left-[-1px] top-[-1px] h-[322px] w-[310px] rounded-[20px] bg-gradient-to-b from-[9.161%] from-white to-[63.665%] to-[rgba(156,57,12,0)]"
            data-node-id="205:871"
          />
          <p
            className="absolute left-[26px] top-[478px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="205:872"
          >
            NONGHYUP
          </p>
        </div>
        <div
          className="absolute left-[calc(20%+44px)] top-[5676px] h-[36px] w-[109px]"
          data-name="image 86"
          data-node-id="207:1057"
        >
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={imgImage86} />
        </div>
        <div
          className="-translate-x-1/2 absolute left-1/2 top-[5658px] h-[577px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="205:862"
        >
          <div className="absolute left-[-370px] top-[-1px] h-[577px] w-[932px]" data-name="image 87" data-node-id="207:1060">
            <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage87} />
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[577px] w-[310px] rounded-[20px] bg-gradient-to-b from-[9.161%] from-white to-[63.665%] to-[rgba(156,57,12,0)]"
            data-node-id="207:1062"
          />
          <p
            className="absolute left-[26px] top-[478px] m-0 h-[98px] w-[186px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="205:864"
          >
            OSULLOC
          </p>
          <div className="absolute left-[89px] top-[-1px] size-[128px]" data-name="image 88" data-node-id="207:1065">
            <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage88} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute left-[calc(72.5%+9px)] top-[5658px] h-[577px] w-[310px] overflow-hidden rounded-[20px] border border-solid border-white"
          data-node-id="205:873"
        >
          <div className="absolute left-[-293px] top-[-1px] h-[577px] w-[986px]" data-name="image 89" data-node-id="207:1072">
            <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage89} />
          </div>
          <div
            className="absolute left-[26px] top-[478px] h-[98px] w-[243px] text-[30px] not-italic leading-[1.1] tracking-[0.6px] text-white"
            style={{ ...neueHaasBold, letterSpacing: '0.6px' }}
            data-node-id="205:875"
          >
            <p className="m-0">JEJU TOURISM</p>
            <p className="m-0">ORGANIZATION</p>
          </div>
          <div
            className="absolute left-[-1px] top-[-1px] h-[577px] w-[310px] rounded-[20px] bg-gradient-to-b from-[9.161%] from-white to-[63.665%] to-[rgba(156,57,12,0)]"
            data-node-id="207:1074"
          />
          <div className="absolute left-[83px] top-[8px] h-[51px] w-[141px]" data-name="image 91" data-node-id="207:1083">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 top-[-34.63%] h-[164.08%] w-[143.48%] max-w-none" src={imgImage91} />
            </div>
          </div>
        </div>
        <div
          className="absolute left-[calc(5%+8px)] top-[6621px] flex w-[669px] flex-col items-start leading-[1.053] text-white"
          data-node-id="207:948"
        >
          <p
            className="m-0 h-[34px] w-full shrink-0 text-[24px] not-italic tracking-[2.88px]"
            style={{ ...neueHaasMedium, letterSpacing: '2.88px' }}
            data-node-id="207:949"
          >
            FREQUENTLY ASKED QUESTIONS
          </p>
          <p
            className="m-0 w-full shrink-0 text-[14px] not-italic tracking-[0.28px]"
            style={{ ...neueHaasRoman, letterSpacing: '0.28px' }}
            data-node-id="207:950"
          >
            Quick answers for planning your visit.
          </p>
        </div>
        <div className="absolute left-[calc(10%-13px)] top-[6799px] h-[119px] w-[1236px]" data-node-id="207:969">
          <div
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[202.94%] to-[rgba(156,57,12,0.25)]"
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
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[202.94%] to-[rgba(156,57,12,0.25)]"
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
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[202.94%] to-[rgba(156,57,12,0.25)]"
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
            className="absolute left-0 top-0 h-[119px] w-[1184px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[202.94%] to-[rgba(156,57,12,0.25)]"
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
    </ClickSpark>
  )
}

export default App
