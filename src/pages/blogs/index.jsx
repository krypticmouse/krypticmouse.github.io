import Head from 'next/head';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BlogCard from '@/components/ui/BlogCard';
import { useInView } from '@/hooks/useInView';
import { getAllPosts } from '@/lib/posts';
import externalBlogs from '../../content/website-copy/blogs.json';

function parseDate(str) {
  const d = new Date(str);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

export async function getStaticProps() {
  const journalPosts = getAllPosts();
  const journalTitles = new Set(journalPosts.map((p) => p.title.toLowerCase()));

  const internal = journalPosts.map((p) => ({
    title: p.title,
    desc: p.desc,
    tags: p.tags,
    slug: p.slug,
    date: new Date(p.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    _sortDate: p.date,
  }));

  const external = externalBlogs
    .filter((b) => !journalTitles.has(b.title.toLowerCase()))
    .map((b) => ({
      title: b.title,
      desc: b.desc,
      tags: b.tags,
      href: b.href,
      img: b.img,
      date: b.date,
      _sortDate: parseDate(b.date).toISOString(),
    }));

  const all = [...internal, ...external].sort(
    (a, b) => new Date(b._sortDate) - new Date(a._sortDate)
  );

  return { props: { blogs: all } };
}

export default function Blog({ blogs }) {
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
            {blogs.map((blog, index) => (
              <BlogCard {...blog} index={index} key={blog.slug || blog.href || index} />
            ))}
            <div className="border-t" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
