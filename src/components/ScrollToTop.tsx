'use client'
import './scroll-to-top.css'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0

      // aparece después de 921px (como tu Angular)
      setIsVisible(scrollTop > 921)
    }

    window.addEventListener('scroll', handleScroll)

    // chequeo inicial
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className='scroll-to-top-btn fixed bottom-6 right-6 z-9999 w-12 h-12 rounded-xl bg-primary-fixed text-on-primary shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center'
    >
      <span className='material-symbols-outlined'>arrow_upward</span>
    </button>
  )
}
