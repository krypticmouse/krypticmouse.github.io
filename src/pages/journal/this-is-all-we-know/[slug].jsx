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
        <div className="w-3/5 mx-auto p-6 blog text-slate-600 mb-8">
          <h1 className="text-center text-4xl font-extrabold">{frontMatter.title}</h1>
          <MDXRemote {...source} components={MDXComponents} />
        </div>
			<Footer />
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'journal', 'this-is-all-we-know', 'posts');
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
    'this-is-all-we-know',
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
