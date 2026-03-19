import Head from 'next/head';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import blogList from '../content/website-copy/blogs.json';
import BlogCard from '@/components/ui/BlogCard';
import { useInView } from '@/hooks/useInView';

export default function Blog() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <>
      <Head>
        <title>Herumb Shandilya | Blogs</title>
        <meta
          name="description"
          content="Web Portfolio & Research Journal of Herumb Shandilya."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />
      </Head>
      <main>
        <Header />
        <div className="mx-auto max-w-4xl px-6 sm:px-8 mb-24">
          <div
            ref={headerRef}
            className={`mt-16 md:mt-24 mb-12 reveal-hidden ${headerInView ? 'animate-fade-left' : ''}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Writing
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Blogs
            </h1>
            <p className="text-sm mt-4 italic text-muted-foreground">
              &ldquo;Knowledge brings liberation.&rdquo;
            </p>
          </div>

          <div>
            {blogList.map((blog, index) => (
              <BlogCard {...blog} index={index} key={index} />
            ))}
            <div className="border-t" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
