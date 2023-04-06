import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
	Text,
	Stack,
  SimpleGrid
} from '@mantine/core';
import blogList from '../content/website-copy/blogs.json'
import BlogCard from '@/components/ui/BlogCard';

export default function Blog() {
  const cards = blogList.map((blog =>
    <BlogCard {...blog} />
  ));

  return (
    <>
      <Head>
        <title>Herumb Shandilya | Blogs</title>
        <meta name="description" content="Web Portfolio & Research Journal of Herumb Shandilya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <div className='mx-96 mb-24'>
          <Stack align="center" className='mt-12' spacing={0}>
            <Text className='title-font text-7xl font-extrabold text-sky-800'>Blogs</Text>
            <Text className='dm title-font text-2xl font-medium mt-4 italic text-sky-600 text-opacity-60'>"Knowledge brings liberation."</Text>
          </Stack>
          <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {cards}
          </SimpleGrid>
        </div>
        <Footer />
      </main>
    </>
  )
}
