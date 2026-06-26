'use client'
import Link from 'next/link'
import { useState } from 'react'
import './navbar.css'
import Image from 'next/image'
import NexHorizonLogo from '@/assets/NexHorizons_Logo.svg'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className='navbar-shell'>
        <div className='navbar-panel max-w-7xl mx-auto'>
          <div className='flex items-center justify-between gap-6 px-4 py-4 sm:px-6'>
            <Link
              className='navbar-brand'
              href='/'
              scroll={true}
              onClick={closeMenu}
            >
              <Image
                src={NexHorizonLogo}
                alt='NexHorizon Logo'
                height={50}
                width={100}
                className='object-contain object-center aspect-video'
              />
            </Link>

            <div className='hidden items-center gap-2 lg:flex'>
              <Link className='navbar-link' href='/' onClick={closeMenu}>
                Inicio
              </Link>
              <Link
                className='navbar-link'
                href='/#services'
                onClick={closeMenu}
              >
                Servicios
              </Link>
              {/* <Link
                className='navbar-link'
                href='/#about-us'
                onClick={closeMenu}
              >
                Nosotros
              </Link> */}
              <Link
                className='navbar-link'
                href='/#contact'
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </div>

            <div className='hidden lg:flex'>
              <Link className='navbar-cta' href='/#contact' onClick={closeMenu}>
                Comenzar
              </Link>
            </div>

            <button
              type='button'
              className='navbar-menu-button lg:hidden'
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label='Abrir menu de navegacion'
            >
              <span className='material-symbols-outlined text-[1.7rem]'>
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <div className='navbar-mobile lg:hidden'>
              <Link className='navbar-mobile-link' href='/' onClick={closeMenu}>
                Inicio
              </Link>
              <Link
                className='navbar-mobile-link'
                href='/#services'
                onClick={closeMenu}
              >
                Servicios
              </Link>
              {/* <Link
                className='navbar-mobile-link'
                href='/#about-us'
                onClick={closeMenu}
              >
                Nosotros
              </Link> */}
              <Link
                className='navbar-mobile-link'
                href='/#contact'
                onClick={closeMenu}
              >
                Contacto
              </Link>
              <Link
                className='navbar-mobile-cta'
                href='/#contact'
                onClick={closeMenu}
              >
                Comenzar
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
