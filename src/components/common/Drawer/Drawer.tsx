import React from 'react'

export default function Drawer({
  children,
  isOpen = false,
  speed = 0.5,
  width = '100vw',
  height = '100vh',
  bgColor = 'white',
  direction = 'right',
  zIndex = 99,
  className,
  style
}: DrawerProps) {
  return (
    <div
      className={className}
      position='fixed'
      height={height}
      width={width}
      backgroundColor={bgColor}
      zIndex={zIndex}
      boxShadow='0 0 15px 3px rgba(0, 0, 0, 0.1)'
      style={{
        transition: `all ${speed}s ease`,
        ...directions(isOpen)[direction],
        ...style
      }}
      data-testid='drawer'
    >
      {children}
    </div>
  )
}

export interface DrawerProps {
  children?: React.ReactNode
  isOpen?: boolean
  speed?: number
  width?: number | string
  height?: number | string
  bgColor?: string
  zIndex?: number
  direction?: 'top' | 'left' | 'right' | 'bottom'
}

export const directions = (isOpen: boolean) => ({
    right: {
      transform: isOpen ? 'translateX(-100%)' : 'translateX(100%)',
      top: 0,
      left: '100%'
    },
    left: {
      transform: isOpen ? 'translateX(100%)' : 'translateX(-100%)',
      top: 0,
      right: '100%'
    },
    top: {
      transform: isOpen ? 'translateY(100%)' : 'translateY(-100%)',
      left: 0,
      bottom: '100%'
    },
    bottom: {
      transform: isOpen ? 'translateY(-100%)' : 'translateY(100%)',
      left: 0,
      top: '100%'
    }
  })