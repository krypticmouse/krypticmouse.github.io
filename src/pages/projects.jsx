import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Herumb Shandilya | Projects</title>
        <meta name="description" content="Web Portfolio & Research Journal of Herumb Shandilya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <Footer />
      </main>
    </>
  )
}