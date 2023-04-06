import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
	Text,
	Stack,
  SimpleGrid
} from '@mantine/core';
import ProjectCard from '@/components/ui/ProjectCard'
import projectList from '../content/website-copy/projects.json'

export default function Projects() {
  const cards = projectList.map((project, index) =>
    <ProjectCard {...project} key={index}/>
  );

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
        <div className='mx-96 mb-24'>
          <Stack align="center" className='mt-12' spacing={0}>
            <Text className='title-font text-7xl font-extrabold text-sky-800'>Projects</Text>
            <Text className='dm title-font text-2xl font-medium mt-4 italic text-sky-600 text-opacity-60'>"My Experiments with ML and stuff."</Text>
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
