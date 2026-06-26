import { Hero } from '@/components/sections/Hero'
// import { AboutUs } from '../components/sections/AboutUs'
import { Services } from '../components/sections/Services'
// import BrandCollaborations from '../components/sections/BrandColaborations'
// import Testimonials from '../components/sections/Testimonials'
// import Team from '../components/sections/Team'
// import Pricing from '../components/sections/Pricing'
// import FAQ from '../components/sections/FAQ'
// import Newsletter from '../components/sections/Newsletter'
import Contact from '../components/sections/Contact'
import { PainAgitation } from '../components/sections/Pain&Agitation'
import { EvolutiveModelSection } from '@/components/sections/EvolutiveModelSection'
import SuccessCaseSection from '@/components/sections/SuccessCaseSection'
import TotalTrasnparencySection from '../components/sections/TotalTransparency'
import { ThreeEssentialPilarsSections } from '../components/sections/ThreeEssentialPilars'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainAgitation />
      <ThreeEssentialPilarsSections />
      <EvolutiveModelSection />
      <SuccessCaseSection />
      <TotalTrasnparencySection />

      {/* <AboutUs /> */}
      {/* <Services /> */}
      {/* <BrandCollaborations />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <Newsletter /> */}
      <Contact />
    </>
  )
}
