'use client'

import { useState } from 'react'
import Link from 'next/link'
import './pricing.css'

type PricingPlan = {
  id: string
  name: string
  description: string
  price: number | null
  currency: string
  billingPeriod: 'monthly' | 'yearly'
  features: string[]
  highlighted: boolean
  cta: string
  ctaLink: string
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly'
  )

  const pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Startup',
      description: 'Perfecto para MVP y pequeños proyectos',
      price: 4999,
      currency: '$',
      billingPeriod: 'monthly',
      features: [
        'Hasta 40 horas desarrollo',
        'Diseño y UI/UX',
        'Tecnología moderna (React, Node.js)',
        'Testing y QA',
        'Deployment en la nube',
        '2 semanas de soporte post-lanzamiento',
        'Repositorio Git privado',
        'Documentación técnica'
      ],
      highlighted: false,
      cta: 'Comenzar',
      ctaLink: '/contact'
    },
    {
      id: '2',
      name: 'Professional',
      description: 'Para aplicaciones complejas',
      price: 12999,
      currency: '$',
      billingPeriod: 'monthly',
      features: [
        'Hasta 120 horas desarrollo',
        'Diseño UI/UX avanzado',
        'Arquitectura escalable',
        'Testing completo + CI/CD',
        'Performance optimization',
        'Soporte 30 días',
        'API integrations',
        'Analytics y monitoreo',
        'Security audit',
        'Reuniones semanales'
      ],
      highlighted: true,
      cta: 'Consulta Gratis',
      ctaLink: '/contact'
    },
    {
      id: '3',
      name: 'Enterprise',
      description: 'Soluciones personalizadas a escala',
      price: null,
      currency: '$',
      billingPeriod: 'monthly',
      features: [
        'Horas ilimitadas',
        'Equipo dedicado',
        'Arquitectura personalizada',
        'DevOps y infraestructura',
        'Seguridad avanzada',
        'Soporte 24/7',
        'Escalabilidad garantizada',
        'Machine Learning / AI',
        'Mentoring técnico',
        'SLA garantizado'
      ],
      highlighted: false,
      cta: 'Contactar Ventas',
      ctaLink: '/contact'
    }
  ]

  const getYearlyPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.85)
  }

  const getDisplayPrice = (plan: PricingPlan) => {
    if (!plan.price) return null

    return billingPeriod === 'monthly' ? plan.price : getYearlyPrice(plan.price)
  }

  const getDisplayPeriod = () => {
    return billingPeriod === 'monthly' ? '/mes' : '/año'
  }

  return (
    <section className='py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Planes
          </span>

          <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface'>
            Pricing Transparente y Justo
          </h2>

          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto mb-12'>
            Elige el plan que se ajuste a tu proyecto. Todos incluyen calidad de
            clase mundial.
          </p>

          {/* Billing Toggle */}
          <div className='inline-flex bg-surface-container-highest/80 p-1 rounded-full gap-1'>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary-fixed text-on-primary'
                  : 'text-on-surface'
              }`}
            >
              Mensual
            </button>

            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                billingPeriod === 'yearly'
                  ? 'bg-primary-fixed text-on-primary'
                  : 'text-on-surface'
              }`}
            >
              Anual
              <span className='text-xs bg-secondary/30 text-secondary px-2 py-0.5 rounded-full'>
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto'>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem] transition-all duration-300 flex flex-col justify-between ${
                plan.highlighted ? 'ring-2 ring-primary-fixed scale-105' : ''
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className='mb-4 inline-block'>
                  <span className='bg-primary-fixed/20 text-primary-fixed text-xs font-bold px-3 py-1 rounded-full'>
                    <span className='material-symbols-outlined inline mr-1 text-sm'>
                      trending_up
                    </span>
                    Más Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className='mb-6'>
                <h3 className='text-2xl font-bold text-on-surface'>
                  {plan.name}
                </h3>

                <p className='text-on-surface-variant text-sm mt-1'>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className='mb-8'>
                <div className='flex items-baseline gap-1'>
                  {getDisplayPrice(plan) ? (
                    <>
                      <span className='text-sm text-on-surface-variant'>
                        {plan.currency}
                      </span>

                      <span className='text-4xl font-black text-on-surface'>
                        {getDisplayPrice(plan)}
                      </span>
                    </>
                  ) : (
                    <span className='text-3xl font-black text-on-surface'>
                      Personalizado
                    </span>
                  )}
                </div>

                {getDisplayPrice(plan) && (
                  <p className='text-on-surface-variant text-sm mt-2'>
                    {getDisplayPeriod()}
                  </p>
                )}
              </div>

              {/* CTA */}
              <Link
                href={plan.ctaLink}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 mb-6 ${
                  plan.highlighted
                    ? 'bg-primary-fixed text-on-primary'
                    : 'bg-secondary text-on-primary'
                }`}
              >
                {plan.cta}

                <span className='material-symbols-outlined text-base'>
                  arrow_forward
                </span>
              </Link>

              {/* Features */}
              <div className='space-y-3 pt-6 border-t border-outline-variant/25'>
                {plan.features.map((feature) => (
                  <div key={feature} className='flex items-start gap-3'>
                    <span className='material-symbols-outlined text-primary-fixed text-lg shrink-0'>
                      check_circle
                    </span>

                    <span className='text-on-surface-variant text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className='bg-primary-fixed/10 border border-primary-fixed/25 rounded-[1.75rem] p-12 text-center'>
          <h3 className='text-2xl font-black text-on-surface mb-3'>
            ¿Necesitas algo personalizado?
          </h3>

          <p className='text-on-surface-variant mb-6 max-w-2xl mx-auto'>
            Contáctanos para discutir tu proyecto específico y obtener una
            cotización personalizada.
          </p>

          <a
            href='#contact'
            className='inline-flex items-center gap-2 bg-primary-fixed text-on-primary px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1'
          >
            Hablar con Especialista
            <span className='material-symbols-outlined'>phone</span>
          </a>
        </div>
      </div>
    </section>
  )
}
