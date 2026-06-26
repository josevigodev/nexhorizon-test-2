'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { motion } from 'motion/react'

const traditionalData = [
  { name: 'Inicio', budget: 20000 },
  { name: 'Mes 1', budget: 15000 },
  { name: 'Mes 2', budget: 10000 },
  { name: 'Mes 3', budget: 5000 },
  { name: 'Mes 4', budget: 0 }
]

const nexHorizonsData = [
  { name: 'Inicio', value: 20000 },
  { name: 'MVP', value: 16000 },
  { name: 'Feedback', value: 14000 },
  { name: 'Ajustes', value: 15500 },
  { name: 'Escalado', value: 24000 }
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-xl'>
        <p className='text-slate-300 font-medium mb-1'>{label}</p>
        <p className='text-white font-bold'>
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    )
  }
  return null
}

export const BudgetCharts = () => {
  return (
    <div className='grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mt-16'>
      {/* Gráfico Tradicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='bg-surface-container border border-on-tertiary-fixed/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group shadow-xl'
      >
        <div className='absolute top-0 left-0 w-full h-1 bg-on-tertiary-fixed'></div>
        <div className='absolute -top-24 -left-24 w-48 h-48 bg-on-tertiary-fixed/40 rounded-full blur-3xl'></div>

        <h3 className='text-xl font-bold text-on-secondary-fixed mb-2 relative z-10'>
          Ruta Tradicional
        </h3>
        <p className='text-on-secondary-container text-sm mb-8 relative z-10'>
          Fuga constante de presupuesto sin validación.
        </p>

        <div className='h-62.5 w-full relative z-10'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={traditionalData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id='colorBudget' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#8a6820' stopOpacity={0.3} />
                  <stop offset='95%' stopColor='#8a6820' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='#5e4a26'
                vertical={false}
                opacity={0.5}
              />
              <XAxis
                dataKey='name'
                stroke='#5e4a26'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke='#5e4a26'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type='monotone'
                dataKey='budget'
                stroke='#7a5810'
                strokeWidth={3}
                fillOpacity={1}
                fill='url(#colorBudget)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className='mt-6 flex items-center justify-between p-4 bg-on-tertiary-fixed/5 border border-on-tertiary-fixed/30 rounded-xl relative z-10'>
          <span className='text-on-tertiary-fixed font-medium'>
            Resultado final:
          </span>
          <span className='text-on-tertiary-fixed font-bold'>
            Proyecto cancelado
          </span>
        </div>
      </motion.div>

      {/* Gráfico NexHorizons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='bg-surface-container border border-primary-fixed/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group shadow-xl shadow-primary-fixed/10'
      >
        <div className='absolute top-0 left-0 w-full h-1 bg-primary-fixed'></div>
        <div className='absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed/40 rounded-full blur-3xl'></div>

        <h3 className='text-xl font-bold text-on-secondary-fixed mb-2 relative z-10'>
          Ruta NexHorizons
        </h3>
        <p className='text-on-secondary-container text-sm mb-8 relative z-10'>
          Inversión inteligente basada en aprendizaje real.
        </p>

        <div className='h-62.5 w-full relative z-10'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={nexHorizonsData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#e6a91e' stopOpacity={0.3} />
                  <stop offset='95%' stopColor='#e6a91e' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='#5e4a26'
                vertical={false}
                opacity={0.5}
              />
              <XAxis
                dataKey='name'
                stroke='#5e4a26'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke='#5e4a26'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type='monotone'
                dataKey='value'
                stroke='#e6a91e'
                strokeWidth={3}
                fillOpacity={1}
                fill='url(#colorValue)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className='mt-6 flex items-center justify-between p-4 bg-primary-fixed/10 border border-primary-fixed/30 rounded-xl relative z-10'>
          <span className='text-primary-fixed font-medium'>
            Resultado final:
          </span>
          <span className='text-primary-fixed font-bold'>
            Crecimiento en evidencia
          </span>
        </div>
      </motion.div>
    </div>
  )
}
