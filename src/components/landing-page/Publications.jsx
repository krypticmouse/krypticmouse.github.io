import { useInView } from '@/hooks/useInView';
import { Separator } from '@/components/ui/separator';
import publicationsData from '../../content/website-copy/publications.json';

function getPublicationUrl(publication) {
  if (!publication.links) return null;
  return publication.links.arxiv || publication.links.paper || publication.links.code || null;
}

function PublicationRow({ publication, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const url = getPublicationUrl(publication);

  const content = (
    <div
      className={`py-5 md:py-6 grid grid-cols-[45px_1fr] md:grid-cols-[60px_1fr] gap-3 md:gap-6 items-baseline group -mx-4 px-4 rounded transition-colors reveal-hidden ${url ? 'hover:bg-background/[0.03] cursor-pointer' : ''} ${isInView ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span className="text-[13px] font-medium text-background/35 tabular-nums">
        {publication.year}
      </span>
      <div className="min-w-0">
        <p className={`text-sm md:text-[15px] font-medium leading-snug ${url ? 'group-hover:underline underline-offset-4 decoration-background/20 group-hover:decoration-background/60 transition-colors' : ''}`}>
          {publication.title}
        </p>
        {publication.lab && (
          <p className="text-[11px] font-medium uppercase tracking-wider text-background/35 mt-1">
            {publication.lab}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
      <Separator className="bg-background/[0.07]" />
    </div>
  );
}

export default function Publications() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const sortedPublications = [...publicationsData].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <section className="bg-foreground text-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div
          ref={headerRef}
          className={`mb-14 reveal-hidden ${headerInView ? 'animate-fade-up' : ''}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/40 mb-3">
            Research output
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Publications
          </h2>
        </div>

        <div>
          <Separator className="bg-background/[0.07]" />
          {sortedPublications.map((publication, index) => (
            <PublicationRow key={index} publication={publication} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
