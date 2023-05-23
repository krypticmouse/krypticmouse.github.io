// pages/[slug].jsx
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import MDXComponents from '@/components/mdx/MDXComponents';
import matter from 'gray-matter';
import Head from 'next/head';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function DynamicPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <Header />
        <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 sm:px-4 mx-auto blog text-slate-600 mb-8">
          <h1 className="text-center md:text-4xl text-2xl font-extrabold">{frontMatter.title}</h1>
          <MDXRemote {...source} components={MDXComponents} lazy/>
        </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'journal', 'anybody-can-code', 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(
    process.cwd(),
    'src',
    'pages',
    'journal',
    'anybody-can-code',
    'posts',
    `${params.slug}.mdx`
  );

  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
