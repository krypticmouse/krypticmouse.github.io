import Head from 'next/head'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import PostCard from '@/components/ui/PostCard';
import {
	Text,
	Stack,
  SimpleGrid,
  Container
} from '@mantine/core';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function AnybodyCanCode({ allFrontMatter }) {
  return (
    <>
      <Head>
        <title>Anybody can Code | Journal</title>
        <meta name="description" content="Web Portfolio & Research Journal of Herumb Shandilya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <Container size="lg" padding='md' className='my-24'>
          <Stack align="center" spacing={0}>
            <Text className='title-font text-3xl md:text-5xl font-extrabold text-sky-800'>Anybody can Code</Text>
            <Text className='dm title-font text-xl md:text-2xl font-medium mt-4 italic text-sky-600 text-opacity-60'>"Those who can imagine anything, can create the impossible."</Text>
          </Stack>
          <SimpleGrid
            cols={1}
            md={2}
            spacing="xl"
            mt={50}
          >
            {allFrontMatter.map((frontMatter, index) => (
              <PostCard category={"Anybody can Code"} {...frontMatter} key={index} />
            ))}
          </SimpleGrid>
        </Container>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'journal', 'anybody-can-code', 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  let allFrontMatter = fileNames.map((fileName) => {
    const postFilePath = path.join(postsDirectory, fileName);
    const source = fs.readFileSync(postFilePath, 'utf8');
    const { data } = matter(source);
    return data;
  });

  // Sort by date
  allFrontMatter = allFrontMatter.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      allFrontMatter,
    },
  };
}
