import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { IconArrowLeft, IconList, IconChevronRight } from '@tabler/icons-react';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');
  const [tocOpen, setTocOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean);
    if (!els.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <>
      {/* Mobile TOC toggle */}
      <button
        onClick={() => setTocOpen(!tocOpen)}
        className="xl:hidden fixed bottom-6 right-6 z-40 bg-foreground text-background p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle table of contents"
      >
        <IconList size={20} />
      </button>

      {/* Mobile TOC overlay */}
      {tocOpen && (
        <div className="xl:hidden fixed inset-0 z-50" onClick={() => setTocOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <nav
            className="absolute bottom-0 left-0 right-0 bg-background border-t rounded-t-2xl p-6 max-h-[60vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              On this page
            </p>
            <ul className="space-y-1">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setTocOpen(false)}
                    className={`block py-1.5 text-[13px] leading-snug transition-colors ${
                      h.depth === 3 ? 'pl-4' : ''
                    } ${
                      activeId === h.id
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop TOC sidebar */}
      <aside className="hidden xl:block shrink-0">
        <div className="sticky top-8">
          <button
            onClick={() => setDesktopOpen(!desktopOpen)}
            className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <IconChevronRight
              size={14}
              className={`transition-transform duration-200 ${desktopOpen ? 'rotate-90' : ''}`}
            />
            On this page
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              desktopOpen ? 'max-h-[80vh] opacity-100 w-56' : 'max-h-0 opacity-0 w-0'
            }`}
          >
            <ul className="space-y-0.5 border-l border-border">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className={`block py-1 text-[12.5px] leading-snug transition-colors whitespace-nowrap ${
                      h.depth === 3 ? 'pl-6' : 'pl-3'
                    } ${
                      activeId === h.id
                        ? 'text-foreground font-medium border-l-2 border-foreground -ml-px'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function BlogPost({ frontmatter, html, headings }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Herumb Shandilya</title>
        <meta name="description" content={frontmatter.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Krypticmouse.jpeg" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.desc} />
        <meta property="og:site_name" content="Herumb Shandilya" />
        {frontmatter.date && (
          <meta property="article:published_time" content={new Date(frontmatter.date).toISOString()} />
        )}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.desc} />
      </Head>
      <main>
        <Header sticky={false} />
        <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-12 md:pt-20 pb-24">
          <div className="flex gap-12 justify-center">
            <article className="min-w-0 max-w-3xl w-full">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10"
              >
                <IconArrowLeft size={14} stroke={1.5} />
                Back to blogs
              </Link>

              <header className="mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4">
                  {frontmatter.title}
                </h1>
                <p className="text-[13px] text-muted-foreground">
                  {formatDate(frontmatter.date)}
                  <span className="mx-2">·</span>
                  {frontmatter.readingTime} min read
                </p>
              </header>

              <div
                className="prose prose-neutral max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-8
                  prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:mt-12 prose-h1:mb-5
                  prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-5
                  prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-p:text-base prose-p:sm:text-[17px] prose-p:leading-[1.85] prose-p:text-foreground/75
                  prose-a:underline prose-a:underline-offset-2 prose-a:decoration-border hover:prose-a:decoration-foreground
                  prose-blockquote:border-l-2 prose-blockquote:border-foreground/20 prose-blockquote:italic prose-blockquote:text-foreground/60
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-[#1e1e1e] prose-pre:text-[#d4d4d4] prose-pre:rounded-lg prose-pre:text-sm prose-pre:overflow-x-auto
                  prose-img:rounded-lg prose-img:mx-auto
                  prose-li:text-base prose-li:sm:text-[17px] prose-li:text-foreground/75
                  prose-table:text-sm
                  prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
                  prose-td:px-4 prose-td:py-2"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </article>

            <TableOfContents headings={headings} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, content } = getPostBySlug(params.slug);

  const { unified } = await import('unified');
  const remarkParse = (await import('remark-parse')).default;
  const remarkMath = (await import('remark-math')).default;
  const remarkCallouts = (await import('@/lib/remark-callouts.mjs')).default;
  const remarkRehype = (await import('remark-rehype')).default;
  const rehypeRaw = (await import('rehype-raw')).default;
  const rehypeKatex = (await import('rehype-katex')).default;
  const rehypeHighlight = (await import('rehype-highlight')).default;
  const rehypeSlug = (await import('rehype-slug')).default;
  const rehypeStringify = (await import('rehype-stringify')).default;

  const headings = [];

  function getTextContent(node) {
    if (node.type === 'text') return node.value;
    if (node.children) return node.children.map(getTextContent).join('');
    return '';
  }

  function walkTree(node) {
    if (node.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
      const id = node.properties?.id;
      const text = getTextContent(node);
      if (id && text) {
        headings.push({ id, text, depth: parseInt(node.tagName.charAt(1), 10) });
      }
    }
    if (node.children) node.children.forEach(walkTree);
  }

  function rehypeExtractHeadings() {
    return (tree) => walkTree(tree);
  }

  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkCallouts)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeSlug)
    .use(rehypeExtractHeadings)
    .use(rehypeStringify)
    .process(content);

  return {
    props: {
      frontmatter,
      html: String(result),
      headings,
    },
  };
}
