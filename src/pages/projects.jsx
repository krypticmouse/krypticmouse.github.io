import Head from 'next/head';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ProjectCard from '@/components/ui/ProjectCard';
import projectList from '../content/website-copy/projects.json';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <>
      <Head>
        <title>Herumb Shandilya | Projects</title>
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
              Building
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Projects
            </h1>
            <p className="text-sm mt-4 italic text-muted-foreground">
              &ldquo;My Experiments with ML and stuff.&rdquo;
            </p>
          </div>

          <div>
            {projectList.map((project, index) => (
              <ProjectCard {...project} index={index} key={index} />
            ))}
            <div className="border-t" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
