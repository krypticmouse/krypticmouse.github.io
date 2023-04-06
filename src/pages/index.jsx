import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/landing-page/Hero'
import AboutMe from '@/components/landing-page/AboutMe'
import AreasOfInterest from '@/components/landing-page/AreasOfInterest'
import Stats from '@/components/landing-page/Stats'
import WorkExperience from '@/components/landing-page/WorkExperience'
import Testimonials from '@/components/landing-page/Testimonial'
import ContactMe from '@/components/landing-page/ContactMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Herumb Shandilya | krypticmouse</title>
        <meta name="description" content="Web Portfolio & Research Journal of Herumb Shandilya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <Hero />
        <AboutMe />
        <AreasOfInterest />
        <Stats />
        <WorkExperience />
        <Testimonials />
        <ContactMe />
        <Footer />
      </main>
    </>
  )
}
