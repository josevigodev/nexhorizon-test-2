'use client'
import { motion } from 'motion/react'
import {
  Hourglass,
  CircleDollarSign,
  LightbulbOff,
  SearchX,
  TriangleAlert,
  TrendingDown,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { BudgetCharts } from '@/components/BudgetCharts'

export function PainAgitation() {
  return (
    <div className='overflow-x-hidden min-h-screen font-sans'>
      <div className='max-w-7xl mx-auto px-6 py-24 lg:py-32 relative'>
        {/* Decorative background glow */}
        <div className='absolute top-40 left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none'></div>

        {/* Header Section */}
        <div className='text-center max-w-3xl mx-auto mb-20 relative z-10'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animated-gradient-text'
          >
            El problema no es tu idea. Es cómo la estás validando
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-lg md:text-xl text-on-surface-variant leading-relaxed'
          >
            Cada año, miles de empresas invierten tiempo y dinero construyendo
            productos que nadie utiliza. El problema rara vez es la tecnología.
            El problema es desarrollar antes de validar.
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 relative z-10'>
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='group relative'
          >
            <div className='absolute -inset-0.5 bg-linear-to-br from-surface-container-highest to-transparent rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative h-full bg-surface-container border border-outline-variant/25 shadow-2xl p-8 md:p-10 rounded-3xl flex flex-col'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-on-tertiary-fixed/5 shadow-lg'>
                  <TrendingDown className='w-6 h-6 text-on-tertiary-fixed' />
                </div>
                <h2 className='text-2xl font-bold text-on-secondary-fixed'>
                  Desarrollo Tradicional
                </h2>
              </div>

              <div className='space-y-5 grow'>
                {[
                  { icon: Hourglass, text: '6 a 12 meses de desarrollo' },
                  {
                    icon: CircleDollarSign,
                    text: 'Grandes inversiones iniciales'
                  },
                  {
                    icon: LightbulbOff,
                    text: 'Funcionalidades basadas en suposiciones'
                  },
                  { icon: SearchX, text: 'Sin validación temprana' },
                  { icon: TriangleAlert, text: 'Alto riesgo de fracaso' },
                  {
                    icon: TrendingDown,
                    text: 'Presupuesto consumido antes de conseguir usuarios'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex items-start gap-4 text-slate-300'
                  >
                    <div className='mt-0.5 min-w-6'>
                      <item.icon className='w-5 h-5 text-on-tertiary-fixed' />
                    </div>
                    <span className='text-on-surface-variant leading-relaxed'>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className='mt-10 pt-6 border border-on-surface-variant/30 bg-on-surface-variant/10 p-8 rounded-3xl'>
                <p className='text-on-surface-variant/85 font-medium text-center'>
                  Meses de trabajo antes de descubrir si alguien realmente
                  necesita el producto.
                </p>
              </div>
            </div>
          </motion.div>

          {/* NexHorizons Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='group relative'
          >
            <div className='absolute -inset-0.5 bg-linear-to-br from-primary-fixed/40 to-indigo-500/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative h-full bg-surface-container p-8 md:p-10 rounded-3xl flex flex-col shadow-2xl shadow-primary-fixed/40'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center border border-primary-fixed/5 shadow-lg'>
                  <Rocket className='w-6 h-6 text-primary-fixed' />
                </div>
                <h2 className='text-2xl font-bold text-on-secondary-fixed'>
                  NexHorizons
                </h2>
              </div>

              <div className='space-y-5 grow'>
                {[
                  { icon: CheckCircle2, text: 'MVP funcional en semanas' },
                  {
                    icon: CheckCircle2,
                    text: 'Validación temprana del mercado'
                  },
                  { icon: CheckCircle2, text: 'Feedback de usuarios reales' },
                  { icon: CheckCircle2, text: 'Decisiones basadas en datos' },
                  { icon: CheckCircle2, text: 'Menor riesgo financiero' },
                  {
                    icon: CheckCircle2,
                    text: 'Evolución continua según resultados'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex items-start gap-4 text-slate-200'
                  >
                    <div className='mt-0.5 min-w-6'>
                      <item.icon className='w-5 h-5 text-primary-fixed' />
                    </div>
                    <span className='text-primary-fixed leading-relaxed font-medium'>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className='mt-10 pt-6 border border-primary-fixed/20 bg-primary-fixed/10 p-8 rounded-3xl'>
                <p className='text-primary-fixed font-medium text-center'>
                  Valida antes de invertir grandes cantidades de tiempo y
                  dinero.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Budget Visualization Section */}
        <div className='relative z-10 pt-8 pb-20'>
          <BudgetCharts />
        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='max-w-3xl mx-auto text-center relative z-10 mt-12 bg-surface-container border border-primary-fixed/30 p-10 md:p-14 rounded-3xl '
        >
          <div className='w-16 h-16 bg-primary-fixed/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>
            <ShieldCheck className='w-8 h-8 text-primary-fixed' />
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-on-secondary-fixed mb-6'>
            Antes de construir, valida.
          </h2>
          <p className='text-lg text-on-surface-variant mb-10 leading-relaxed'>
            Reducimos el riesgo de desarrollo mediante MVPs estratégicos
            diseñados para obtener aprendizaje real del mercado antes de
            comprometer grandes inversiones.
          </p>
          <a
            href='/metodologiamvp'
            className='px-6 py-3 xs:px-8 xs:py-4 bg-primary-fixed text-on-primary font-bold text-md xs:text-lg rounded-2xl border border-primary-fixed/20 hover:bg-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-primary-fixed/15 flex items-center gap-5 w-fit mx-auto'
          >
            Descubrir nuestra metodología MVP
            <ArrowRight className='w-5 h-5' />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
