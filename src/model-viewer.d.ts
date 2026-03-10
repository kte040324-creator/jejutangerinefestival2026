import type * as React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        exposure?: string
        reveal?: string
        'environment-image'?: string
        'interaction-prompt'?: string
        'shadow-intensity'?: string
        'shadow-softness'?: string
        'disable-pan'?: boolean
        'disable-zoom'?: boolean
        'disable-tap'?: boolean
        'auto-rotate'?: boolean
        'rotation-per-second'?: string
      }
    }
  }
}

export {}
