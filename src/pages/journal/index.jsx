import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
	Text,
	Stack
} from '@mantine/core';

export default function Journal() {
  return (
    <>
      <Head>
        <title>Herumb Shandilya | Journal</title>
        <meta name="description" content="Web Portfolio & Research Journal of Herumb Shandilya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <div className='mx-96 mb-24'>
          <Stack align="center" className='mt-12' spacing={0}>
            <Text className='title-font text-7xl font-extrabold text-sky-800'>Journal</Text>
            <Text className='dm title-font text-2xl font-medium mt-4 italic text-sky-600 text-opacity-60'>"Knowledge brings liberation."</Text>
          </Stack>
        </div>
        <Footer />
      </main>
    </>
  )
}