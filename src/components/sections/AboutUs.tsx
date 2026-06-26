import './about-us.css'

export function AboutUs() {
  return (
    <section
      id='about-us'
      className='px-8 relative bg-transparent overflow-x-hidden'
    >
      <div className='max-w-7xl mx-auto relative z-10 pt-5'>
        <div className='text-center mb-20 space-y-6'>
          <span className='text-primary-fixed font-bold tracking-[0.2em] uppercase text-sm bg-primary-fixed/10 px-5 py-2.5 rounded-xl border border-primary-fixed/15'>
            Nuestra Historia
          </span>
          <h2 className='text-5xl md:text-7xl font-black tracking-tight animated-gradient-text'>
            El Arquitecto Celestial
          </h2>
          <p className='text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed'>
            Creando constelaciones digitales que conectan la ambicion humana con
            el infinito tecnologico.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          <div className='space-y-8'>
            <div className='bg-surface-container-highest/78 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-2xl hover:-translate-y-1 transition-all duration-300'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center shadow-lg shadow-primary-fixed/20'>
                  <span className='material-symbols-outlined text-on-primary'>
                    architecture
                  </span>
                </div>
                <h3 className='text-2xl font-bold'>Nuestra Vision</h3>
              </div>
              <p className='text-lg text-on-surface-variant leading-relaxed mb-6'>
                Redefinir los limites de la posibilidad digital a traves de la
                precision arquitectonica y la intuicion creativa. No solo
                construimos software; creamos ecosistemas que evolucionan con
                las necesidades humanas.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='text-center p-4 bg-surface-dim/60 rounded-2xl border border-outline-variant/15'>
                  <div className='text-2xl font-bold text-primary-fixed'>
                    50+
                  </div>
                  <div className='text-sm text-on-surface-variant'>
                    Proyectos Completados
                  </div>
                </div>
                <div className='text-center p-4 bg-surface-dim/60 rounded-2xl border border-outline-variant/15'>
                  <div className='text-2xl font-bold text-secondary'>24/7</div>
                  <div className='text-sm text-on-surface-variant'>
                    Soporte Disponible
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-surface-container-highest/78 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-2xl hover:-translate-y-1 transition-all duration-300'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20'>
                  <span className='material-symbols-outlined text-on-secondary'>
                    rocket_launch
                  </span>
                </div>
                <h3 className='text-2xl font-bold'>Nuestra Mision</h3>
              </div>
              <p className='text-lg text-on-surface-variant leading-relaxed'>
                Puente entre la imaginacion y la implementacion, creando
                soluciones que no solo funcionan perfectamente sino que inspiran
                y elevan la experiencia humana.
              </p>
            </div>
          </div>

          <div className='relative'>
            <div className='bg-linear-to-br from-surface-container-highest/90 to-surface-dim p-12 rounded-4xl shadow-2xl border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300'>
              <div className='text-center space-y-8'>
                <div className='relative'>
                  <div className='w-32 h-32 bg-linear-to-br from-primary-fixed to-secondary rounded-xl mx-auto flex items-center justify-center shadow-xl'>
                    <span className='material-symbols-outlined text-6xl text-on-primary'>
                      stars
                    </span>
                  </div>
                  <div className='orbit-dot orbit-dot-1 w-8 h-8 bg-tertiary-fixed-dim rounded-xl'></div>
                  <div className='orbit-dot orbit-dot-2 w-6 h-6 bg-primary-fixed rounded-xl'></div>
                  <div className='orbit-dot orbit-dot-3 w-7 h-7 bg-secondary rounded-xl'></div>
                  <div className='orbit-dot orbit-dot-4 w-5 h-5 bg-tertiary-fixed-dim rounded-xl'></div>
                </div>

                <div className='space-y-4'>
                  <h4 className='text-xl font-bold'>
                    Principios Fundamentales
                  </h4>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-primary-fixed'>
                        check_circle
                      </span>
                      <span>Innovacion Primero</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-primary-fixed'>
                        check_circle
                      </span>
                      <span>Centrado en el Usuario</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-primary-fixed'>
                        check_circle
                      </span>
                      <span>Soluciones Escalables</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='material-symbols-outlined text-primary-fixed'>
                        check_circle
                      </span>
                      <span>Tecnologia Etica</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute -top-6 -right-6 bg-surface-container-highest/88 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-outline-variant/20'>
              <div className='text-center'>
                <div className='text-lg font-bold text-primary-fixed'>98%</div>
                <div className='text-xs text-on-surface-variant'>
                  Satisfaccion del Cliente
                </div>
              </div>
            </div>

            <div className='absolute -bottom-6 -left-6 bg-surface-container-highest/88 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-outline-variant/20'>
              <div className='text-center'>
                <div className='text-lg font-bold text-secondary'>5+</div>
                <div className='text-xs text-on-surface-variant'>
                  Anios de Experiencia
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-surface-container-highest/78 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-xl text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-primary-fixed rounded-[1.25rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary-fixed/20'>
              <span className='material-symbols-outlined text-2xl text-on-primary'>
                verified
              </span>
            </div>
            <h4 className='text-xl font-bold mb-4'>Integridad</h4>
            <p className='text-on-surface-variant'>
              Transparencia y honestidad en cada interaccion y linea de codigo
              que escribimos.
            </p>
          </div>

          <div className='bg-surface-container-highest/78 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-xl text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-secondary rounded-[1.25rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/20'>
              <span className='material-symbols-outlined text-2xl text-on-secondary'>
                palette
              </span>
            </div>
            <h4 className='text-xl font-bold mb-4'>Creatividad</h4>
            <p className='text-on-surface-variant'>
              Diseno que habla antes de funcionar, creando experiencias que
              cautivan.
            </p>
          </div>

          <div className='bg-surface-container-highest/78 backdrop-blur-md p-8 rounded-[1.75rem] border border-outline-variant/25 shadow-xl text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-tertiary-fixed-dim rounded-[1.25rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg'>
              <span className='material-symbols-outlined text-2xl text-on-tertiary-fixed-variant'>
                bolt
              </span>
            </div>
            <h4 className='text-xl font-bold mb-4'>Excelencia</h4>
            <p className='text-on-surface-variant'>
              Calidad inquebrantable en cada proyecto, desde el concepto hasta
              el despliegue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
