import { StaticImageData } from 'next/image'

export type ServiceAccentTone = 'primary' | 'secondary' | 'neutral'

export interface ServiceStat {
  value: string
  label: string
  description: string
}

export interface ServiceBenefit {
  icon: string
  title: string
  description: string
}

export interface ServiceProcessStep {
  step: string
  title: string
  description: string
}

export interface ServiceProjectMetric {
  value: string
  label: string
}

export interface ServiceProject {
  name: string
  category: string
  summary: string
  description: string
  badges: string[]
  metrics: ServiceProjectMetric[]
  previewIcon: string
  previewLabel: string
  actionLabel: string
  actionUrl?: string | null
  actionExternal?: boolean
  image: StaticImageData
}

export interface ServiceHeroVisualCard {
  icon: string
  label: string
  text: string
}

export interface ServiceHeroFloatingCard {
  icon: string
  label: string
  text: string
  tone: ServiceAccentTone
}

export interface ServiceHeroVisual {
  panelEyebrow: string
  panelTitle: string
  panelBadge: string
  image: StaticImageData
  imageAlt: string
  chips: string[]
  cards: ServiceHeroVisualCard[]
  floatingTop: ServiceHeroFloatingCard
  floatingBottom: ServiceHeroFloatingCard
}

export interface ServicePageModel {
  slug: string
  serviceLabel: string
  heroTitle: string
  heroDescription: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  whyTitle: string
  whyDescription: string
  showcaseTitle: string
  showcaseDescription: string
  ctaTitle: string
  ctaDescription: string
  stats: ServiceStat[]
  benefits: ServiceBenefit[]
  deliveryPillars: string[]
  process: ServiceProcessStep[]
  successProjects: ServiceProject[]
  heroVisual: ServiceHeroVisual
}
