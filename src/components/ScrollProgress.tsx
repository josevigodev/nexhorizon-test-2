'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight

      const scrolled = window.scrollY

      const percentage = (scrolled / documentHeight) * 100
      setProgress(percentage)
    }

    window.addEventListener('scroll', handleScroll)

    // calcular inicial (por si la página ya está scrolleada)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className='fixed top-0 left-0 h-0.75 z-9999 transition-all duration-100'
      style={{
        width: `${progress}%`,
        background:
          'linear-gradient(90deg, var(--color-primary-fixed) 90%, var(--color-secondary-fixed), transparent)',
        boxShadow: '0 0 10px rgba(var(--color-primary-rgb), 0.5)'
      }}
    />
  )
}
