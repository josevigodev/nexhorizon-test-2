import { WEB_DEVELOPMENT_PAGE } from '@/models/web-development-page.model'
import './service-detail-page.css'
import { PageLayout } from '@/components/PageLayout'

export default function WebDevelopmentPage() {
  const page = WEB_DEVELOPMENT_PAGE

  return <PageLayout page={page} />
}
