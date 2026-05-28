import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import AudienceStrip from '@/components/AudienceStrip'
import Features      from '@/components/Features'
import HowItWorks    from '@/components/HowItWorks'
import Methods       from '@/components/Methods'
import Rates         from '@/components/Rates'
import Metrics       from '@/components/Metrics'
import Testimonials  from '@/components/Testimonials'
import Faq           from '@/components/Faq'
import FinalCta      from '@/components/FinalCta'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AudienceStrip />
        <Features />
        <HowItWorks />
        <Methods />
        <Rates />
        <Metrics />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
