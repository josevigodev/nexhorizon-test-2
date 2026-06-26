'use client'
import { FormEvent, useState } from 'react'
import './newsletter.css'

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus>('idle')

  const [successMessage, setSuccessMessage] = useState('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const isEmailValid = emailRegex.test(email)

  const isInvalid = touched && !isEmailValid

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTouched(true)

    if (!isEmailValid) {
      return
    }

    setSubscriptionStatus('loading')

    // Simula el envío
    setTimeout(() => {
      setSubscriptionStatus('success')

      setSuccessMessage(
        '¡Suscripción exitosa! Revisa tu email de confirmación.'
      )

      setEmail('')
      setTouched(false)

      setTimeout(() => {
        setSubscriptionStatus('idle')
        setSuccessMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <section className='py-32 px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Suscripción
          </span>

          <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface'>
            No Te Pierdas Nada
          </h2>

          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto mb-12'>
            Recibe insights sobre tendencias tech, mejores prácticas de
            desarrollo y actualizaciones de nuestro blog.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {/* Benefits */}
          <div className='space-y-4'>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <span className='material-symbols-outlined text-primary-fixed shrink-0 mt-1'>
                  check_circle
                </span>

                <span className='text-on-surface-variant'>
                  Artículos exclusivos y guías especializadas
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='material-symbols-outlined text-primary-fixed shrink-0 mt-1'>
                  check_circle
                </span>

                <span className='text-on-surface-variant'>
                  Tendencias tecnológicas actualizadas semanalmente
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='material-symbols-outlined text-primary-fixed shrink-0 mt-1'>
                  check_circle
                </span>

                <span className='text-on-surface-variant'>
                  Ofertas especiales y descuentos para suscriptores
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='material-symbols-outlined text-primary-fixed shrink-0 mt-1'>
                  check_circle
                </span>

                <span className='text-on-surface-variant'>
                  Sin spam, una vez al mes como máximo
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem]'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Email Input */}
              <div>
                <input
                  type='email'
                  placeholder='tu@email.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface-dim text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition-all ${
                    isInvalid ? 'border-error' : 'border-outline-variant/25'
                  }`}
                />

                {isInvalid && (
                  <div className='mt-2 text-sm text-error flex items-center gap-2'>
                    <span className='material-symbols-outlined text-sm'>
                      error
                    </span>
                    Email inválido
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={!isEmailValid || subscriptionStatus === 'loading'}
                className='w-full py-3 rounded-xl font-bold text-on-primary bg-primary-fixed hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
              >
                {subscriptionStatus !== 'loading' ? (
                  'Suscribirse'
                ) : (
                  <span className='inline-flex items-center gap-2'>
                    <span className='material-symbols-outlined animate-spin'>
                      schedule
                    </span>
                    Enviando...
                  </span>
                )}
              </button>

              {/* Success Message */}
              {subscriptionStatus === 'success' && (
                <div className='mt-4 p-4 bg-surface-dim border border-primary-fixed/25 rounded-xl text-primary-fixed text-sm flex items-start gap-2'>
                  <span className='material-symbols-outlined shrink-0 mt-0.5'>
                    check_circle
                  </span>

                  <span>{successMessage}</span>
                </div>
              )}

              {/* Disclaimer */}
              <p className='text-xs text-on-surface-variant text-center'>
                Respetamos tu privacidad. Puedes cancelar en cualquier momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
