'use client'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const getControl = (name: keyof FormData) => form[name]

  const hasError = (
    field: keyof FormData,
    type: 'required' | 'minlength' | 'email'
  ) => {
    const value = getControl(field)

    if (!touched[field]) return false

    if (type === 'required') {
      return value.trim().length === 0
    }

    if (type === 'minlength') {
      if (field === 'name') return value.trim().length < 2
      if (field === 'subject') return value.trim().length < 5
      if (field === 'message') return value.trim().length < 10
    }

    if (type === 'email') {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }

    return false
  }

  const isValid = () => {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.subject.trim().length >= 5 &&
      form.message.trim().length >= 10
    )
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })

    if (!isValid()) return

    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      // simulación ContactService
      await new Promise((r) => setTimeout(r, 1200))

      setSubmitSuccess(true)
      setSubmitMessage(
        'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
      )

      setForm({ name: '', email: '', subject: '', message: '' })
      setTouched({})

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch {
      setSubmitError(true)
      setSubmitMessage('Error al enviar el mensaje. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-32 px-8 relative overflow-hidden'>
      <div className='hidden absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-primary-fixed rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* HEADER (igual) */}
        <div className='text-center mb-20'>
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Contacto
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-4 animated-gradient-text'>
            Inicia Tu Viaje
          </h2>
          <p className='text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed mt-6'>
            Listo para trascender lo ordinario? Conecta con nuestro equipo de
            arquitectura y construyamos tu proximo horizonte.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* LEFT SIDE (NO TOCADO VISUALMENTE) */}
          <div className='space-y-8'>
            <div className='bg-surface-container-highest/80 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-2xl'>
              <h3 className='text-2xl font-bold mb-8 text-center'>
                Informacion de Contacto
              </h3>

              <div className='space-y-4 sm:space-y-6'>
                {[
                  {
                    label: 'Telefono',
                    value: '+1 (555) 000-1111',
                    bg: 'bg-primary-fixed',
                    text: 'text-white',
                    icon: 'call'
                  },
                  {
                    label: 'Correo Electronico',
                    value: 'hello@nexthorizon.tech',
                    bg: 'bg-secondary',
                    text: 'text-white',
                    icon: 'mail'
                  },
                  {
                    label: 'WhatsApp',
                    value: '+1 (555) 000-1111',
                    bg: 'bg-green-500',
                    text: 'text-white',
                    icon: 'chat',
                    link: 'https://wa.me/15550001111'
                  },
                  {
                    label: 'Ubicacion',
                    value: 'Madrid, Espana',
                    bg: 'bg-tertiary-fixed-dim',
                    text: 'text-on-tertiary-fixed-variant',
                    icon: 'location_on'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-[1.35rem] bg-surface-container-lowest/55 border border-outline-variant/15 hover:bg-surface-container-lowest/75 hover:-translate-y-1 transition-all'
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bg} rounded-[1.15rem] flex items-center justify-center shadow-lg shrink-0`}
                    >
                      <span
                        className={`material-symbols-outlined text-xl sm:text-2xl ${item.text}`}
                      >
                        {item.icon}
                      </span>
                    </div>

                    <div className='min-w-0 flex-1'>
                      <span className='block text-xs sm:text-sm uppercase font-bold tracking-widest text-on-surface-variant'>
                        {item.label}
                      </span>

                      {item.link ? (
                        <a
                          href={item.link}
                          className='font-bold text-base sm:text-lg text-on-surface break-all hover:text-green-500'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className='font-bold text-base sm:text-lg text-on-surface break-all'>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-surface-container-highest/80 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-2xl'>
              <h4 className='text-xl font-bold mb-6 text-center'>Siguenos</h4>
              <div className='flex justify-center gap-4'>
                <a
                  className='w-12 h-12 bg-surface-container-lowest/70 border border-outline-variant/15 rounded-2xl flex items-center justify-center text-on-surface hover:bg-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg'
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='material-symbols-outlined'>
                    photo_camera
                  </span>
                </a>
                <a
                  className='w-12 h-12 bg-surface-container-lowest/70 border border-outline-variant/15 rounded-2xl flex items-center justify-center text-on-surface hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg'
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='material-symbols-outlined'>public</span>
                </a>
                <a
                  className='w-12 h-12 bg-surface-container-lowest/70 border border-outline-variant/15 rounded-2xl flex items-center justify-center text-on-surface hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg'
                  href='https://youtube.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='material-symbols-outlined'>play_circle</span>
                </a>
                <a
                  className='w-12 h-12 bg-surface-container-lowest/70 border border-outline-variant/15 rounded-2xl flex items-center justify-center text-on-surface hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg'
                  href='https://wa.me'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='material-symbols-outlined'>groups</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM (idéntico comportamiento Angular) */}
          <div className='bg-surface-container-highest/80 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-2xl'>
            <h3 className='text-2xl font-bold mb-8 text-center'>
              Envíanos un Mensaje
            </h3>

            {submitSuccess && (
              <div className='mb-6 p-4 rounded-[1.15rem] bg-green-50 border border-green-200 text-green-800'>
                <p className='font-bold'>✓ {submitMessage}</p>
              </div>
            )}

            {submitError && (
              <div className='mb-6 p-4 rounded-[1.15rem] bg-red-50 border border-red-200 text-red-800'>
                <p className='font-bold'>✗ {submitMessage}</p>
              </div>
            )}

            <form onSubmit={onSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* NAME */}
                <div className='space-y-2'>
                  <label className='text-sm font-bold text-on-surface'>
                    Nombre
                  </label>

                  <input
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-surface-container-lowest/70 border p-4 rounded-[1.15rem] ${
                      hasError('name', 'required') ||
                      hasError('name', 'minlength')
                        ? 'border-red-500'
                        : 'border-outline-variant/30'
                    }`}
                    placeholder='Juan Perez'
                  />

                  {hasError('name', 'required') ? (
                    <span className='text-xs text-red-600 font-bold'>
                      El nombre es requerido
                    </span>
                  ) : (
                    hasError('name', 'minlength') && (
                      <span className='text-xs text-red-600 font-bold'>
                        El nombre debe tener al menos 2 caracteres
                      </span>
                    )
                  )}
                </div>

                {/* EMAIL */}
                <div className='space-y-2'>
                  <label className='text-sm font-bold text-on-surface'>
                    Correo Electronico
                  </label>

                  <input
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-surface-container-lowest/70 border p-4 rounded-[1.15rem] ${
                      hasError('email', 'required') ||
                      hasError('email', 'email')
                        ? 'border-red-500'
                        : 'border-outline-variant/30'
                    }`}
                    placeholder='juan@ejemplo.com'
                  />

                  {hasError('email', 'required') ? (
                    <span className='text-xs text-red-600 font-bold'>
                      El email es requerido
                    </span>
                  ) : (
                    hasError('email', 'email') && (
                      <span className='text-xs text-red-600 font-bold'>
                        Ingresa un email válido
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* SUBJECT */}
              <div className='space-y-2'>
                <label className='text-sm font-bold text-on-surface'>
                  Asunto
                </label>

                <input
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-surface-container-lowest/70 border p-4 rounded-[1.15rem] ${
                    hasError('subject', 'required') ||
                    hasError('subject', 'minlength')
                      ? 'border-red-500'
                      : 'border-outline-variant/30'
                  }`}
                  placeholder='En que podemos ayudarte?'
                />

                {hasError('subject', 'required') ? (
                  <span className='text-xs text-red-600 font-bold'>
                    El asunto es requerido
                  </span>
                ) : (
                  hasError('subject', 'minlength') && (
                    <span className='text-xs text-red-600 font-bold'>
                      El asunto debe tener al menos 5 caracteres
                    </span>
                  )
                )}
              </div>

              {/* MESSAGE */}
              <div className='space-y-2'>
                <label className='text-sm font-bold text-on-surface'>
                  Mensaje
                </label>

                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={`w-full bg-surface-container-lowest/70 border p-4 rounded-[1.15rem] resize-none ${
                    hasError('message', 'required') ||
                    hasError('message', 'minlength')
                      ? 'border-red-500'
                      : 'border-outline-variant/30'
                  }`}
                  placeholder='Describe tu vision...'
                />

                {hasError('message', 'required') ? (
                  <span className='text-xs text-red-600 font-bold'>
                    El mensaje es requerido
                  </span>
                ) : (
                  hasError('message', 'minlength') && (
                    <span className='text-xs text-red-600 font-bold'>
                      El mensaje debe tener al menos 10 caracteres
                    </span>
                  )
                )}
              </div>

              {/* BUTTON */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-4 bg-linear-to-r from-primary-fixed to-secondary text-on-primary font-black uppercase tracking-widest rounded-2xl hover:shadow-lg hover:shadow-primary-fixed/25 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
