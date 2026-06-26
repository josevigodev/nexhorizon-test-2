'use client'

import { motion } from 'motion/react'
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Lock,
  Server,
  Database
} from 'lucide-react'
import { SectionLabel } from '../SectionLabel'

// ─── Tech Logo SVGs ────────────────────────────────────────────────────────

function GitLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#F05032' />
      <path
        d='M33.9 18.5L21.5 6.1a2.05 2.05 0 00-2.9 0L15.5 9.2l3.8 3.8a2.44 2.44 0 013.1 3.1l3.7 3.7a2.44 2.44 0 11-1.5 1.5L21.2 18V26.7a2.44 2.44 0 11-2 .05V17.6a2.44 2.44 0 01-1.32-3.18L14.12 10.66 6.1 18.5a2.05 2.05 0 000 2.9L18.5 33.9a2.05 2.05 0 002.9 0l12.5-12.5a2.05 2.05 0 000-2.9z'
        fill='white'
      />
    </svg>
  )
}

function GitHubLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#24292E' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 5C11.7 5 5 11.7 5 20c0 6.6 4.3 12.2 10.2 14.2.7.1.9-.3.9-.7v-2.8c-4.2.9-5-.6-5.2-1-.5-.9-1.6-1.4-1.4-1.6.5-.1 1.6.5 1.9 1.1.7 1.2 1.8.9 2.3.7.1-.5.3-.9.7-1.1-2.8-.4-5.7-.9-5.7-4.8 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 1.1 1.7-.5 3.6-.5 5.4 0 2.1-1.4 3-1.1 3-1.1.6 1.7.2 2.9.1 3.2.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5 .4.3.7 1 .7 2v2.9c0 .4.2.7 1 .6C30.7 32.2 35 26.6 35 20 35 11.7 28.3 5 20 5z'
        fill='white'
      />
    </svg>
  )
}

function FigmaLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#1E1E1E' />
      <path d='M14 34c3.3 0 6-2.7 6-6v-6h-6a6 6 0 000 12z' fill='#0ACF83' />
      <path d='M8 20a6 6 0 016-6h6v12h-6a6 6 0 01-6-6z' fill='#A259FF' />
      <path d='M8 8a6 6 0 016-6h6v12h-6a6 6 0 01-6-6z' fill='#F24E1E' />
      <path d='M20 2h6a6 6 0 010 12h-6V2z' fill='#FF7262' />
      <path d='M32 20a6 6 0 11-12 0 6 6 0 0112 0z' fill='#1ABCFE' />
    </svg>
  )
}

function AWSLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#232F3E' />
      <path
        d='M10.5 21.3c0 .5.1.9.3 1.2.2.3.4.6.7 1 .1.1.1.2.1.3s-.1.2-.3.4l-.9.6c-.1.1-.2.1-.4.1-.1 0-.3-.1-.4-.2-.2-.2-.4-.5-.5-.7-.2-.3-.3-.6-.5-.9-1.1 1.2-2.5 1.9-4.1 1.9-1.2 0-2.1-.3-2.8-1-.7-.6-1-1.6-1-2.7 0-1.2.4-2.2 1.2-2.9.8-.7 2-1.1 3.5-1.1.5 0 1 0 1.5.1.5.1 1.1.2 1.6.3v-1c0-1.1-.2-1.8-.6-2.2-.5-.5-1.2-.7-2.3-.7-.5 0-1 .1-1.5.2-.5.2-1 .4-1.5.6l-.5.2h-.2c-.2 0-.3-.2-.3-.4v-.7c0-.2.1-.4.1-.5.1-.1.2-.2.4-.3.5-.3 1.1-.5 1.7-.7.7-.2 1.4-.3 2.1-.3 1.6 0 2.8.4 3.5 1.1.7.7 1.1 1.8 1.1 3.3v4.4zM5.2 22.7c.5 0 1-.1 1.5-.2.5-.2.9-.5 1.3-.9.2-.3.4-.6.5-.9.1-.3.1-.7.1-1.2v-.6c-.4-.1-.8-.1-1.3-.1-.7 0-1.3.1-1.7.4-.4.3-.6 1.1-.6 2 0 .8.1 1.4.4 1.8.3.4.9.7 1.7.7l-.9-.0z'
        fill='#FF9900'
      />
      <path
        d='M22.7 25c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.5l-3.3-10.9c-.1-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3h1.4c.2 0 .4 0 .5.1.1.1.2.3.2.5l2.4 9.4 2.2-9.4c.1-.3.1-.4.3-.5.1-.1.3-.1.5-.1h1.1c.2 0 .4 0 .5.1.1.1.2.3.3.5l2.2 9.5 2.5-9.5c.1-.2.2-.4.2-.5.1-.1.2-.1.5-.1h1.3c.2 0 .3.1.3.3 0 .1 0 .2-.1.3l-.2.3-3.4 10.9c-.1.2-.2.4-.3.5-.1.1-.3.1-.5.1h-1.2c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.5l-2.2-9.2-2.2 9.1c-.1.3-.2.4-.3.5-.1.1-.3.1-.5.1h-1.1z'
        fill='#FF9900'
      />
      <path
        d='M35 24c-.9.7-2.1 1-3.8 1-.6 0-1.2-.1-1.7-.2-.5-.1-1-.3-1.3-.4-.3-.2-.5-.3-.5-.5v-.7c0-.3.1-.4.3-.4.1 0 .2 0 .3.1.1 0 .2.1.3.1.5.2 1 .3 1.5.4.6.1 1.1.2 1.7.2.9 0 1.6-.2 2.1-.5.5-.3.8-.8.8-1.4 0-.4-.1-.7-.4-1-.3-.3-.8-.5-1.4-.7l-2.1-.7c-1-.3-1.7-.8-2.2-1.5-.5-.7-.7-1.5-.7-2.3 0-.7.1-1.3.4-1.8.3-.5.7-1 1.2-1.3.5-.4 1.1-.6 1.8-.8.7-.2 1.4-.3 2.2-.3.4 0 .8 0 1.2.1.4.1.8.2 1.1.3.3.1.6.2.9.3.2.1.4.3.4.4v.6c0 .3-.1.4-.3.4-.1 0-.3-.1-.6-.2-.9-.4-1.9-.6-3-.6-.8 0-1.4.1-1.9.4-.5.3-.7.7-.7 1.3 0 .4.1.7.4 1 .3.3.8.5 1.5.7l2.1.7c1 .3 1.7.8 2.2 1.5.5.7.7 1.4.7 2.2 0 .7-.2 1.3-.5 1.8-.3.5-.7.9-1.2 1.3z'
        fill='#FF9900'
      />
    </svg>
  )
}

function PostgreSQLLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#336791' />
      <ellipse
        cx='20'
        cy='13'
        rx='8'
        ry='3.5'
        stroke='white'
        strokeWidth='1.5'
        fill='none'
      />
      <path
        d='M12 13v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5'
        stroke='white'
        strokeWidth='1.5'
        fill='none'
      />
      <path
        d='M12 18v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5'
        stroke='white'
        strokeWidth='1.5'
        fill='none'
      />
      <path
        d='M28 13c0 0 3-1 3 2v2c0 2-3 3-3 3'
        stroke='white'
        strokeWidth='1'
        fill='none'
        strokeLinecap='round'
      />
    </svg>
  )
}

function DockerLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#2496ED' />
      <rect x='6' y='18' width='5' height='4.5' rx='1' fill='white' />
      <rect x='12.5' y='18' width='5' height='4.5' rx='1' fill='white' />
      <rect x='19' y='18' width='5' height='4.5' rx='1' fill='white' />
      <rect x='12.5' y='12.5' width='5' height='4.5' rx='1' fill='white' />
      <rect x='19' y='12.5' width='5' height='4.5' rx='1' fill='white' />
      <rect x='19' y='7' width='5' height='4.5' rx='1' fill='white' />
      <path
        d='M35.5 21.5c-.6-.4-1.9-.5-2.9-.3-.3-1.1-1-1.8-2.1-2.3l-.6-.3-.4.6c-.5.9-.6 2.1-.4 3 .1.4.3.8.6 1.1-.4.2-.9.3-1.7.3H5.5l-.1.5c-.2 1.1 0 2.2.5 3.2.5 1 1.3 1.8 2.3 2.3 1.5.7 4 1.1 5.9.6.8 1.2 1.9 2.2 3.4 2.7H28c5 0 8.7-2.4 10.5-7.6.7 0 2.2 0 3-1.3l.2-.3-.4-.2-1.8-1.3z'
        fill='white'
      />
    </svg>
  )
}

function VercelLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='8' fill='#000' />
      <path d='M20 8L35 30H5L20 8Z' fill='white' />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────

const treeBranches = [
  {
    id: 'codigo',
    label: 'Código',
    color: '#fb923c',
    borderColor: 'rgba(251,146,60,0.3)',
    bgColor: 'rgba(251,146,60,0.08)',
    logos: [<GitLogo size={38} key='git' />, <GitHubLogo size={38} key='gh' />],
    logoLabel: 'Git · GitHub',
    asset: 'Repositorio',
    assetIcon: <Lock className='w-3 h-3' />
  },
  {
    id: 'diseno',
    label: 'Diseño',
    color: '#c084fc',
    borderColor: 'rgba(192,132,252,0.3)',
    bgColor: 'rgba(192,132,252,0.08)',
    logos: [<FigmaLogo size={38} key='figma' />],
    logoLabel: 'Figma',
    asset: 'Archivos & Componentes',
    assetIcon: <Lock className='w-3 h-3' />
  },
  {
    id: 'infra',
    label: 'Infraestructura',
    color: '#fbbf24',
    borderColor: 'rgba(251,191,36,0.3)',
    bgColor: 'rgba(251,191,36,0.08)',
    logos: [
      <AWSLogo size={38} key='aws' />,
      <DockerLogo size={38} key='docker' />
    ],
    logoLabel: 'AWS · Docker',
    asset: 'BD + Servidores',
    assetIcon: <Lock className='w-3 h-3' />
  }
]

const guaranteeCards = [
  {
    id: 1,
    title: 'Código Fuente Completo',
    desc: 'Acceso total al repositorio desde el primer día. Sin dependencias ocultas.',
    icon: <GitLogo size={32} />,
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.12)'
  },
  {
    id: 2,
    title: 'Diseño Entregado',
    desc: 'Todos los diseños y componentes permanecen disponibles para tu equipo.',
    icon: <FigmaLogo size={32} />,
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.12)'
  },
  {
    id: 3,
    title: 'Infraestructura Propia',
    desc: 'Los servicios cloud se crean bajo tu propiedad y tus credenciales.',
    icon: <AWSLogo size={32} />,
    accent: '#fbbf24',
    glow: 'rgba(251,191,36,0.12)'
  },
  {
    id: 4,
    title: 'Datos Siempre Tuyos',
    desc: 'Tienes control total sobre la base de datos y la información de tu negocio.',
    icon: <PostgreSQLLogo size={32} />,
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.12)'
  }
]

const traditionalItems = [
  'Código cerrado y propietario',
  'Accesos restringidos al proveedor',
  'Dependencia total del proveedor',
  'Infraestructura desconocida',
  'Migración difícil y costosa'
]

const nexItems = [
  'Código abierto para el cliente',
  'Acceso permanente garantizado',
  'Infraestructura completamente transparente',
  'Propiedad total e inmediata',
  'Migración sencilla en cualquier momento'
]

// ─── Animations ────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
}

// ─── Ownership Diagram ─────────────────────────────────────────────────────

function OwnershipDiagram() {
  return (
    <div className='select-none'>
      {/* Client node */}
      <div className='flex justify-center mb-0'>
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 0px #e6a91e11',
              '0 0 0 10px #e6a91e33',
              '0 0 0 0px #e6a91e11'
            ]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className='flex items-center gap-2.5 px-7 py-3 rounded-full border border-primary-fixed bg-primary-fixed/20 text-on-secondary-fixed font-bold tracking-widest'
          style={{ fontSize: 12 }}
        >
          <Shield className='w-4 h-4 text-blue-400 shrink-0' />
          CLIENTE — PROPIETARIO ABSOLUTO
        </motion.div>
      </div>

      {/* Vertical drop */}
      <div className='flex justify-center'>
        <div className='w-px h-7 bg-linear-to-b from-primary-fixed to-primary-fixed/50' />
      </div>

      {/* Horizontal branch bar + three drops */}
      <div className='relative'>
        <div className='absolute top-0 left-[16.67%] right-[16.67%] h-px bg-primary-fixed/50' />
        <div className='grid grid-cols-3'>
          {[0, 1, 2].map((i) => (
            <div key={i} className='flex justify-center'>
              <div className='w-px h-7 bg-primary-fixed/50' />
            </div>
          ))}
        </div>
      </div>

      {/* Branch labels */}
      <div className='grid grid-cols-3 mb-0'>
        {treeBranches.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className='flex justify-center'
          >
            <div
              className='px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wide whitespace-nowrap'
              style={{
                borderColor: b.borderColor,
                color: b.color,
                background: b.bgColor
              }}
            >
              {b.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connectors to logos */}
      <div className='grid grid-cols-3'>
        {[0, 1, 2].map((i) => (
          <div key={i} className='flex justify-center'>
            <div className='w-px h-7 bg-primary-fixed/20' />
          </div>
        ))}
      </div>

      {/* Tech logos */}
      <div className='grid grid-cols-3'>
        {treeBranches.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
            className='flex flex-col items-center'
          >
            <div className='flex gap-1.5 items-center'>
              {b.logos.map((logo, j) => (
                <div
                  key={j}
                  className='rounded-xl overflow-hidden shadow-lg shadow-black/30'
                >
                  {logo}
                </div>
              ))}
            </div>
            <div
              className='mt-1.5 text-slate-500'
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}
            >
              {b.logoLabel}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connectors to assets */}
      <div className='grid grid-cols-3 mt-1'>
        {[0, 1, 2].map((i) => (
          <div key={i} className='flex justify-center'>
            <div className='w-px h-7 bg-primary-fixed/15' />
          </div>
        ))}
      </div>

      {/* Asset labels */}
      <div className='grid grid-cols-3'>
        {treeBranches.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className='flex justify-center'
          >
            <div className='px-3 py-2 rounded-lg border border-slate-700/40 bg-primary-fixed/10 text-center min-w-0 max-w-35'>
              <div
                className='text-primary-fixed tracking-widest mb-0.5'
                style={{ fontSize: 9 }}
              >
                TUYO
              </div>
              <div className='text-on-secondary-container text-xs font-medium leading-snug'>
                {b.asset}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom footnote */}
      <div className='text-center mt-6'>
        <span
          className='text-primary-fixed tracking-[0.22em] uppercase'
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}
        >
          ── todo bajo tu control ──
        </span>
      </div>
    </div>
  )
}

// ─── Tech Stack Ticker ─────────────────────────────────────────────────────

const tickerLogos = [
  { el: <GitLogo size={28} />, label: 'Git' },
  { el: <GitHubLogo size={28} />, label: 'GitHub' },
  { el: <FigmaLogo size={28} />, label: 'Figma' },
  { el: <AWSLogo size={28} />, label: 'AWS' },
  { el: <PostgreSQLLogo size={28} />, label: 'PostgreSQL' },
  { el: <DockerLogo size={28} />, label: 'Docker' },
  { el: <VercelLogo size={28} />, label: 'Vercel' }
]

// ─── Main Component ────────────────────────────────────────────────────────

export default function TotalTrasnparencySection() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className='relative pt-20 pb-12 px-6 overflow-hidden'>
        {/* Radial glow */}
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse at center top, #d9ae4b22 0%, transparent 60%)'
          }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          {/* Eyebrow */}
          <SectionLabel>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2'
            >
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-1.5 h-1.5 rounded-full bg-amber-400'
              />
              <span className='tracking-[0.22em] uppercase'>
                Transparencia Total
              </span>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className='w-1.5 h-1.5 rounded-full bg-amber-400'
              />
            </motion.div>
          </SectionLabel>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='font-bold text-5xl md:text-7xl leading-[1.08] tracking-tight mb-6 animated-gradient-text'
          >
            Tu producto. <span>Tu código.</span>
            <br />
            Tu infraestructura.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className='max-w-2xl mx-auto text-xl leading-relaxed text-on-surface-variant'
          >
            No creemos en el código cerrado ni en la dependencia artificial.
            Desde el primer día, todo lo que construimos pertenece completamente
            a tu empresa.
          </motion.p>

          {/* Tech ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-10 flex items-center justify-center gap-3 flex-wrap'
          >
            {tickerLogos.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.45 + i * 0.06 }}
                whileHover={{ scale: 1.15, y: -2 }}
                className='flex flex-col items-center gap-1 cursor-default'
              >
                <div className='rounded-xl overflow-hidden shadow-lg shadow-black/40 ring-1 ring-white/5'>
                  {t.el}
                </div>
                <span
                  className='text-slate-600'
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 9
                  }}
                >
                  {t.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OWNERSHIP DIAGRAM ─────────────────────────────────────────── */}
      <section className='px-6 pb-20'>
        <div className='max-w-3xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative rounded-2xl bg-surface-container border border-blue-500/10 p-8 sm:p-10 overflow-hidden'
          >
            {/* Glow top center */}
            <div
              className='absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none'
              style={{
                background:
                  'radial-gradient(ellipse at center top, rgba(59,130,246,0.12) 0%, transparent 70%)'
              }}
            />
            {/* Corner decoration */}
            <div className='absolute top-4 right-4 opacity-20'>
              <div className='w-16 h-16 border border-blue-500/40 rounded-full' />
              <div className='absolute top-3 left-3 w-10 h-10 border border-blue-500/30 rounded-full' />
            </div>

            <div className='relative'>
              <OwnershipDiagram />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GUARANTEE CARDS ───────────────────────────────────────────── */}
      <section className='px-6 pb-20'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
          >
            {guaranteeCards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className='group relative bg-surface-container rounded-xl border border-blue-500/10 p-6 overflow-hidden cursor-default transition-all duration-300 hover:border-blue-500/25'
              >
                {/* Hover glow */}
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.glow}, transparent 55%)`
                  }}
                />
                <div className='relative'>
                  <div className='mb-4 rounded-xl overflow-hidden w-9 h-9 shadow-md'>
                    {card.icon}
                  </div>
                  <h3
                    className=' text-on-secondary-fixed text-sm font-semibold mb-2 leading-snug'
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {card.title}
                  </h3>
                  <p className='text-on-surface-variant text-xs leading-relaxed'>
                    {card.desc}
                  </p>
                  {/* Bottom accent line */}
                  <div
                    className='absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON ────────────────────────────────────────────────── */}
      <section className='px-6 pb-20'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className='text-center mb-8'>
              <SectionLabel>
                <span
                  className='tracking-[0.2em] uppercase'
                  style={{
                    fontSize: 11
                  }}
                >
                  La diferencia es evidente
                </span>
              </SectionLabel>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch'>
              {/* Traditional */}
              <div className='rounded-xl bg-surface-container border border-on-tertiary-fixed/30 p-8 relative overflow-hidden'>
                <div
                  className='absolute top-0 left-0 right-0 h-1'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, #8a682088, transparent)'
                  }}
                />
                <div className='flex items-center gap-2 mb-6'>
                  <div className='w-2 h-2 rounded-full bg-on-tertiary-fixed' />
                  <span
                    className='text-on-tertiary-fixed tracking-widest uppercase'
                    style={{
                      fontSize: 10
                    }}
                  >
                    Modelo Tradicional
                  </span>
                </div>
                <ul className='space-y-3.5'>
                  {traditionalItems.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-sm text-on-tertiary-fixed/80'
                    >
                      <X className='w-4 h-4 text-on-tertiary-fixed shrink-0 mt-0.5' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS divider */}
              <div className='flex md:flex-col items-center justify-center gap-3 py-4'>
                <div className='hidden md:block w-px flex-1 bg-primary-fixed' />
                <div
                  className='text-primary-fixed/80 font-black tracking-widest'
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13 }}
                >
                  VS
                </div>
                <div className='hidden md:block w-px flex-1 bg-primary-fixed' />
              </div>

              {/* NexHorizons */}
              <div className='rounded-xl bg-surface-container border border-primary-fixed/30 p-8 relative overflow-hidden'>
                <div
                  className='absolute top-0 left-0 right-0 h-1'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, #e6a91e, transparent)'
                  }}
                />
                <div
                  className='absolute top-0 right-0 w-48 h-48 pointer-events-none'
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(59,130,246,0.06), transparent 60%)'
                  }}
                />
                <div className='flex items-center gap-2 mb-6'>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className='w-2 h-2 rounded-full bg-primary-fixed'
                  />
                  <span
                    className='text-primary-fixed tracking-widest uppercase'
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10
                    }}
                  >
                    NexHorizons
                  </span>
                </div>
                <ul className='space-y-3.5 relative'>
                  {nexItems.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-sm text-primary-fixed/90'
                    >
                      <Check className='w-4 h-4 text-primary-fixed/80 shrink-0 mt-0.5' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KEY MESSAGE ───────────────────────────────────────────────── */}
      <section className='px-6 pb-20'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className='relative rounded-2xl bg-surface-container border border-primary-fixed/20 p-12 sm:p-16 text-center overflow-hidden'
          >
            {/* Spotlight glow */}
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 50% 0%, #e6a91e22 0%, transparent 100%)'
              }}
            />
            {/* Corner lines */}
            <div className='absolute top-4 left-4 w-8 h-8 border-l border-t border-primary-fixed/20 rounded-tl' />
            <div className='absolute top-4 right-4 w-8 h-8 border-r border-t border-primary-fixed/20 rounded-tr' />
            <div className='absolute bottom-4 left-4 w-8 h-8 border-l border-b border-primary-fixed/20 rounded-bl' />
            <div className='absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary-fixed/20 rounded-br' />

            <div className='relative'>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className='inline-block mb-5'
              >
                <div className='w-12 h-12 rounded-xl bg-primary-fixed/10 border border-primary-fixed/30 flex items-center justify-center mx-auto'>
                  <Shield className='w-6 h-6 text-primary-fixed' />
                </div>
              </motion.div>

              <h2
                className='font-black text-on-secondary-fixed mb-4 leading-tight'
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)'
                }}
              >
                Nunca quedarás atrapado.
              </h2>
              <p className='text-on-surface-variant max-w-xl mx-auto leading-relaxed'>
                Nuestro objetivo es construir relaciones de largo plazo basadas
                en{' '}
                <span className='text-primary-fixed font-medium'>
                  confianza
                </span>
                , no en dependencia tecnológica.
              </p>

              {/* Trust badges */}
              <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                {[
                  { icon: <Lock className='w-3 h-3' />, label: '100% Tuyo' },
                  {
                    icon: <Server className='w-3 h-3' />,
                    label: 'Infra propia'
                  },
                  {
                    icon: <Database className='w-3 h-3' />,
                    label: 'Datos tuyos'
                  },
                  { icon: <Shield className='w-3 h-3' />, label: 'Sin lock-in' }
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-fixed/30 text-primary-fixed bg-primary-fixed/10'
                    style={{
                      fontSize: 14
                    }}
                  >
                    <span className='text-primary-fixed'>{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────── */}
      <section className='px-6 pb-24'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='text-center'
          >
            {/* Divider */}
            <div className='flex items-center gap-4 mb-12 max-w-xs mx-auto'>
              <div className='flex-1 h-px bg-linear-to-r from-transparent to-primary-fixed/30' />
              <div className='w-1.5 h-1.5 rounded-full bg-primary-fixed/50' />
              <div className='flex-1 h-px bg-linear-to-l from-transparent to-primary-fixed/30' />
            </div>

            <h2 className='text-4xl md:text-5xl font-black animated-gradient-text mb-5 leading-tight'>
              Construimos contigo,
              <br />
              <span>no alrededor de ti.</span>
            </h2>

            <p className='text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed text-base'>
              Cada repositorio, diseño, servidor y base de datos permanece bajo
              tu control. Tú eres el propietario absoluto de tu producto
              digital.
            </p>
            {/* CTA Button */}
            <motion.a
              href='/agendaconsultoria'
              className='px-6 py-3 xs:px-8 xs:py-4 bg-primary-fixed text-on-primary font-bold text-md xs:text-lg rounded-2xl border border-primary-fixed/20 hover:bg-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-primary-fixed/15 flex items-center gap-5 w-fit mx-auto'
            >
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                style={{
                  background:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)'
                }}
              />
              <span className='relative'>Agendar consultoría</span>
              <ArrowRight className='w-4 h-4 relative transition-transform duration-200 group-hover:translate-x-1' />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
