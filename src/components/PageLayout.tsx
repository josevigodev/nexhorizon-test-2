import Image from 'next/image'
import Link from 'next/link'
import '@/app/web-development/service-detail-page.css'
import { ServicePageModel } from '@/models/service-page.model'

export function PageLayout({ page }: { page: ServicePageModel }) {
  return (
    <main>
      <section className='service-detail-page relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-7xl space-y-24 lg:space-y-32'>
          <section className='grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='space-y-8'>
              <div className='space-y-5'>
                <span className='inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm'>
                  <span className='h-px w-10 bg-secondary/70'></span>
                  Servicio
                </span>

                <div className='space-y-4'>
                  <p className='text-xs font-semibold uppercase tracking-[0.35em] text-primary-fixed sm:text-sm'>
                    {page.serviceLabel}
                  </p>
                  <h1 className='text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl'>
                    {page.heroTitle}
                  </h1>
                  <p className='max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg'>
                    {page.heroDescription}
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Link
                  className='inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-on-primary transition-transform duration-300 hover:-translate-y-1'
                  href='/#contact'
                >
                  {page.primaryCtaLabel}
                  <span className='material-symbols-outlined text-base'>
                    north_east
                  </span>
                </Link>

                <button
                  type='button'
                  className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-surface-container-low px-6 py-3 text-sm font-bold text-on-surface transition-colors duration-300 hover:border-primary-fixed hover:text-primary-fixed'
                  // onClick={scrollToSuccessProjects}
                >
                  {page.secondaryCtaLabel}
                  <span className='material-symbols-outlined text-base'>
                    arrow_downward
                  </span>
                </button>
              </div>

              <div className='grid gap-4 sm:grid-cols-3'>
                {page.stats.map((stat, index) => (
                  <article
                    key={index}
                    className='service-detail-stat rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low/80 p-5 shadow-xl'
                  >
                    <div className='text-2xl font-black text-primary-fixed'>
                      {stat.value}
                    </div>
                    <h2 className='mt-4 text-sm font-bold uppercase tracking-[0.22em] text-on-surface'>
                      {stat.label}
                    </h2>
                    <p className='mt-3 text-sm leading-relaxed text-on-surface-variant'>
                      {stat.description}
                    </p>
                  </article>
                ))}
                {/* <article
            *ngFor="let stat of page().stats"
            className="service-detail-stat rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low/80 p-5 shadow-xl"
          >
            <div className="text-2xl font-black text-primary-fixed">{stat.value}</div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-on-surface">
              {stat.label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{stat.description}</p>
          </article> */}
              </div>
            </div>

            <div className='service-detail-hero-card rounded-4xl border border-outline/50 bg-surface-container-lowest/90 p-4 shadow-2xl sm:p-6'>
              <div className='service-detail-hero-shell rounded-[1.6rem] border border-outline/50 bg-surface-container-lowest/95 p-5 sm:p-7'>
                <div className='flex items-center justify-between gap-4 border-b border-outline/50 pb-5'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.32em] text-secondary'>
                      {page.heroVisual.panelEyebrow}
                    </p>
                    <h2 className='mt-2 text-2xl font-black text-on-surface'>
                      {page.heroVisual.panelTitle}
                    </h2>
                  </div>
                  <div className='rounded-full border border-primary-fixed/30 bg-primary-fixed/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed'>
                    {page.heroVisual.panelBadge}
                  </div>
                </div>

                <div className='service-detail-hero-visual mt-6'>
                  <div className='service-detail-image-frame'>
                    <Image
                      src={page.heroVisual.image || null}
                      alt={page.heroVisual.imageAlt}
                      className='h-full w-full object-cover'
                      loading='lazy'
                    />
                  </div>

                  <div
                    className='service-detail-floating-card service-detail-floating-card-top'
                    // [ngClass]="getFloatingAccentClasses(page().heroVisual.floatingTop.tone)"
                  >
                    <span className='material-symbols-outlined text-lg'>
                      {page.heroVisual.floatingTop.icon}
                    </span>
                    <div>
                      <p className='text-xs uppercase tracking-[0.24em] text-on-surface-variant'>
                        {page.heroVisual.floatingTop.label}
                      </p>
                      <p className='text-sm font-semibold text-on-surface'>
                        {page.heroVisual.floatingTop.text}
                      </p>
                    </div>
                  </div>

                  <div
                    className='service-detail-floating-card service-detail-floating-card-bottom'
                    // [ngClass]="getFloatingAccentClasses(page().heroVisual.floatingBottom.tone)"
                  >
                    <span className='material-symbols-outlined text-lg'>
                      {page.heroVisual.floatingBottom.icon}
                    </span>
                    <div>
                      <p className='text-xs uppercase tracking-[0.24em] text-on-surface-variant'>
                        {page.heroVisual.floatingBottom.label}
                      </p>
                      <p className='text-sm font-semibold text-on-surface'>
                        {page.heroVisual.floatingBottom.text}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                  {page.deliveryPillars.map((pillar, index) => (
                    <div
                      key={index}
                      className='rounded-[1.25rem] border border-outline/50 bg-surface-container-low px-4 py-4 text-sm leading-relaxed text-on-surface-variant'
                    >
                      {pillar}
                    </div>
                  ))}
                  {/* <div
              *ngFor="let pillar of page().deliveryPillars"
              className="rounded-[1.25rem] border border-outline/50 bg-surface-container-low px-4 py-4 text-sm leading-relaxed text-on-surface-variant"
            >
              {{ pillar }}
            </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* </section> */}

          <section className='grid gap-10 lg:grid-cols-[0.82fr_1.18fr]'>
            <div className='space-y-5'>
              <span className='text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm'>
                Por que elegirnos
              </span>
              <h2 className='text-3xl font-black leading-tight sm:text-4xl lg:text-5xl'>
                {page.whyTitle}
              </h2>
              <p className='max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg'>
                {page.whyDescription}
              </p>
            </div>

            <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
              {page.benefits.map((benefit, index) => (
                <article
                  key={index}
                  className='service-detail-benefit group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35'
                >
                  <div className='service-detail-benefit-icon'>
                    <span className='material-symbols-outlined text-[1.7rem]'>
                      {benefit.icon}
                    </span>
                  </div>
                  <h3 className='mt-6 text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary-fixed'>
                    {benefit.title}
                  </h3>
                  <p className='mt-4 text-sm leading-relaxed text-on-surface-variant'>
                    {benefit.description}
                  </p>
                </article>
              ))}
              {/* <article
          *ngFor="let benefit of page().benefits"
          className="service-detail-benefit group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35"
        >
          <div className="service-detail-benefit-icon">
            <span className="material-symbols-outlined text-[1.7rem]">{ benefit.icon }</span>
          </div>
          <h3 className="mt-6 text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary-fixed">
            { benefit.title }
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
            { benefit.description }
          </p>
        </article> */}
            </div>
          </section>

          <section id='showcase' className='space-y-8'>
            <div className='space-y-4'>
              <span className='text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm'>
                Proyectos y escenarios
              </span>
              <h2 className='text-3xl font-black leading-tight sm:text-4xl lg:text-5xl'>
                {page.showcaseTitle}
              </h2>
              <p className='max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg'>
                {page.showcaseDescription}
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {page.successProjects.map((project, index) => (
                <article
                  key={index}
                  className='service-detail-project-card group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35'
                >
                  <div className='overflow-hidden rounded-[1.35rem] border border-outline/40 bg-surface-container-low'>
                    <Image
                      src={project.image || null}
                      alt={project.name}
                      className='aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105'
                      loading='lazy'
                    />
                  </div>

                  <div className='mt-5 space-y-4'>
                    <p className='text-xs font-bold uppercase tracking-[0.24em] text-primary-fixed'>
                      {project.category}
                    </p>
                    <h3 className='text-2xl font-black text-on-surface'>
                      {project.name}
                    </h3>
                    <p className='text-sm leading-relaxed text-on-surface-variant'>
                      {project.summary}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {project.badges.map((badge, index) => (
                        <span
                          key={index}
                          className='rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-fixed'
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <button
                      type='button'
                      className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-fixed transition-colors duration-300 hover:text-secondary'
                      // onClick={() => openProject(project)}
                    >
                      Ver proyecto
                      <span className='material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1'>
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </article>
              ))}
              {/* <article
          *ngFor="let project of page().successProjects"
          className="service-detail-project-card group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35"
        >
          <div className="overflow-hidden rounded-[1.35rem] border border-outline/40 bg-surface-container-low">
            <img
              *ngIf="project.image; else projectPreviewFallback"
              [src]="project.image"
              [alt]="project.name"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <ng-template #projectPreviewFallback>
              <div className="service-detail-project-preview aspect-[4/3] w-full">
                <span className="material-symbols-outlined text-5xl text-primary-fixed">{{ project.previewIcon }}</span>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.24em] text-on-surface-variant">{{ project.previewLabel }}</p>
              </div>
            </ng-template>
          </div>

          <div className="mt-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary-fixed">{{ project.category }}</p>
            <h3 className="text-2xl font-black text-on-surface">{{ project.name }}</h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">{{ project.summary }}</p>

            <div className="flex flex-wrap gap-2">
              <span
                *ngFor="let badge of project.badges"
                className="rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-fixed"
              >
                {{ badge }}
              </span>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-fixed transition-colors duration-300 hover:text-secondary"
              (click)="openProject(project)"
            >
              Ver proyecto
              <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </article> */}
            </div>
          </section>

          <section className='grid gap-8 lg:grid-cols-[1fr_0.9fr]'>
            <article className='service-detail-cta rounded-4xl border border-primary-fixed/15 bg-primary-container/60 p-8 shadow-2xl'>
              <span className='text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm'>
                Solicitar servicio
              </span>
              <h2 className='mt-5 max-w-2xl text-3xl font-black leading-tight sm:text-4xl'>
                {page.ctaTitle}
              </h2>
              <p className='mt-5 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg'>
                {page.ctaDescription}
              </p>
              <Link
                className='mt-8 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1'
                href='/#contact'
              >
                {page.primaryCtaLabel}
                <span className='material-symbols-outlined text-base'>
                  call_made
                </span>
              </Link>
            </article>

            <div className='space-y-4'>
              {page.process.map((item, index) => (
                <article
                  key={index}
                  className='rounded-[1.7rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl'
                >
                  <div className='text-sm font-bold uppercase tracking-[0.3em] text-primary-fixed'>
                    {item.step}
                  </div>
                  <h3 className='mt-4 text-2xl font-black text-on-surface'>
                    {item.title}
                  </h3>
                  <p className='mt-4 text-sm leading-relaxed text-on-surface-variant sm:text-base'>
                    {item.description}
                  </p>
                </article>
              ))}
              {/* <article
          *ngFor="let item of page().process"
          className="rounded-[1.7rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl"
        >
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-primary-fixed">{{ item.step }}</div>
          <h3 className="mt-4 text-2xl font-black text-on-surface">{{ item.title }}</h3>
          <p className="mt-4 text-sm leading-relaxed text-on-surface-variant sm:text-base">{{ item.description }}</p>
        </article> */}
            </div>
          </section>
        </div>

        {/* <div
    *ngIf="selectedProject as project"
    className="service-detail-modal fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
    role="dialog"
    aria-modal="true"
    aria-label="Detalle del proyecto"
  >
    <button
      type="button"
      className="service-detail-modal-backdrop absolute inset-0"
      aria-label="Cerrar dialogo"
      // (click)="closeProject()"
    ></button>

    <div className="service-detail-modal-panel relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-4xl border border-outline/50 bg-surface-container-lowest/95 p-4 shadow-2xl sm:p-6">
      <button
        type="button"
        className="absolute right-5 top-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline/50 bg-surface-container-lowest text-on-surface transition-colors duration-300 hover:border-primary-fixed/35 hover:text-primary-fixed"
        aria-label="Cerrar proyecto"
        // (click)="closeProject()"
      >
        <span className="material-symbols-outlined">close</span>
      </button>

      <section className="service-detail-showcase grid gap-10 rounded-4xl border border-outline/50 bg-surface-container-lowest/95 p-4 shadow-2xl lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="service-detail-showcase-media rounded-[1.6rem] border border-outline/40 bg-surface-container-lowest p-5">
          <div className="flex flex-wrap gap-3">
            <span
              *ngFor="let badge of project.badges"
              className="rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed"
            >
              {{ badge }}
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-outline/40 bg-surface-container-low">
            <img
              *ngIf="project.image; else projectModalPreviewFallback"
              [src]="project.image"
              [alt]="project.name"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <ng-template #projectModalPreviewFallback>
              <div className="service-detail-project-preview aspect-[4/3] w-full">
                <span className="material-symbols-outlined text-6xl text-primary-fixed">{{ project.previewIcon }}</span>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.24em] text-on-surface-variant">{{ project.previewLabel }}</p>
              </div>
            </ng-template>
          </div>
        </div>

        <div className="space-y-6 self-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm">Proyecto destacado</span>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-fixed">
              {{ project.category }}
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {{ project.name }}
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              {{ project.summary }}
            </p>
            <p className="text-sm leading-relaxed text-on-surface-variant/90 sm:text-base">
              {{ project.description }}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article
              *ngFor="let metric of project.metrics"
              className="rounded-[1.35rem] border border-outline/40 bg-surface-container-low px-5 py-5"
            >
              <div className="text-lg font-black text-tertiary-fixed">{{ metric.value }}</div>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{{ metric.label }}</p>
            </article>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-on-primary transition-transform duration-300 hover:-translate-y-1"
              (click)="handleProjectAction(project)"
            >
              {{ project.actionLabel }}
              <span className="material-symbols-outlined text-base">south_east</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div> */}
      </section>
    </main>
  )
}
