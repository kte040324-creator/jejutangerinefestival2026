import type * as React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        poster?: string
        exposure?: string
        'environment-image'?: string
        'interaction-prompt'?: string
        reveal?: string
        'shadow-intensity'?: string
        'shadow-softness'?: string
        'camera-orbit'?: string
        'field-of-view'?: string
        'min-camera-orbit'?: string
        'max-camera-orbit'?: string
        'camera-target'?: string
        'disable-pan'?: boolean
        'disable-zoom'?: boolean
        'disable-tap'?: boolean
        'camera-controls'?: boolean
        autoplay?: boolean
        ar?: boolean
      }
    }
  }
}

export {}
