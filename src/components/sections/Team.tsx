import Image from 'next/image'
import './team.css'

type TeamMember = {
  id: string
  name: string
  role: string
  specialization: string
  image: string
  bio: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alex Rivera',
      role: 'CTO & Co-founder',
      specialization: 'Full Stack Architecture',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: '10+ años en desarrollo escalable. Experto en cloud-native arquitecturas y performance optimization.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: '2',
      name: 'Sofia Mendez',
      role: 'Lead Designer',
      specialization: 'UI/UX & Product Design',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Diseñadora premiada con enfoque en experiencia de usuario centrada en humanos. Apasionada por accesibilidad.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: '3',
      name: 'Juan García',
      role: 'Senior Backend Developer',
      specialization: 'Microservices & Databases',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Especialista en sistemas distribuidos. Construyó infraestructura para millones de usuarios.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      id: '4',
      name: 'María López',
      role: 'Frontend Architect',
      specialization: 'React & Performance',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Experta en frameworks modernos y optimización de rendimiento. Contribuidora en librerías open source.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      id: '5',
      name: 'Carlos Sánchez',
      role: 'Mobile Developer',
      specialization: 'React Native & Flutter',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Desarrollador mobile con 8+ años de experiencia. Experto en aplicaciones nativas y multiplataforma.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      id: '6',
      name: 'Anna Kowalski',
      role: 'Product Manager',
      specialization: 'Strategy & Innovation',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Estratega de producto con visión de mercado. Lidera la transformación digital de nuestros clientes.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ]

  return (
    <section className='py-32 px-8'>
      {' '}
      <div className='max-w-7xl mx-auto'>
        {/* Header */}{' '}
        <div className='text-center mb-16'>
          {' '}
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Equipo{' '}
          </span>
          <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface'>
            Arquitectos de la Innovación Digital
          </h2>
          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto'>
            Talento excepcional en diseño, desarrollo y estrategia. Cada miembro
            aporta expertise único para crear soluciones extraordinarias.
          </p>
        </div>
        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 rounded-[1.75rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary-fixed/10 group'
            >
              {/* Image Container */}
              <div className='relative overflow-hidden h-64 bg-surface-dim'>
                <Image
                  height={400}
                  width={400}
                  src={member.image}
                  alt={member.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Social Links Overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                  <div className='flex items-center gap-3'>
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        title='LinkedIn'
                        className='w-10 h-10 rounded-full bg-white/20 hover:bg-primary-fixed flex items-center justify-center text-white transition-all duration-300'
                      >
                        <span className='material-symbols-outlined text-lg'>
                          share
                        </span>
                      </a>
                    )}

                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        title='GitHub'
                        className='w-10 h-10 rounded-full bg-white/20 hover:bg-primary-fixed flex items-center justify-center text-white transition-all duration-300'
                      >
                        <span className='material-symbols-outlined text-lg'>
                          code
                        </span>
                      </a>
                    )}

                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Twitter'
                        className='w-10 h-10 rounded-full bg-white/20 hover:bg-primary-fixed flex items-center justify-center text-white transition-all duration-300'
                      >
                        <span className='material-symbols-outlined text-lg'>
                          chat
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className='p-8'>
                <h3 className='text-xl font-bold text-on-surface'>
                  {member.name}
                </h3>

                <p className='text-primary-fixed font-bold text-sm uppercase tracking-wide mb-2'>
                  {member.role}
                </p>

                <p className='text-on-surface-variant text-sm mb-3'>
                  {member.specialization}
                </p>

                <p className='text-on-surface-variant text-sm leading-relaxed'>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Team Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-primary-fixed/10 border border-primary-fixed/25 p-8 rounded-[1.75rem] text-center'>
            <div className='text-4xl font-black text-primary-fixed mb-2'>
              6+
            </div>
            <div className='text-on-surface-variant font-bold'>
              Especialistas
            </div>
          </div>

          <div className='bg-secondary/10 border border-secondary/25 p-8 rounded-[1.75rem] text-center'>
            <div className='text-4xl font-black text-secondary mb-2'>12+</div>
            <div className='text-on-surface-variant font-bold'>
              Años de Experiencia
            </div>
          </div>

          <div className='bg-tertiary/10 border border-tertiary/25 p-8 rounded-[1.75rem] text-center'>
            <div className='text-4xl font-black text-tertiary mb-2'>50+</div>
            <div className='text-on-surface-variant font-bold'>
              Proyectos Completados
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
