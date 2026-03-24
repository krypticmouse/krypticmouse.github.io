import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';

function BlogCard({ title, desc, tags, href, slug, img, date, index = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const isInternal = Boolean(slug);

  const className = `group block border-t py-8 md:py-10 hover:bg-muted/30 -mx-6 px-6 transition-colors duration-300 reveal-hidden ${isInView ? 'animate-fade-up' : ''}`;

  const inner = (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-10 items-start">
      <div>
        <div className="flex items-center gap-3 mb-2">
          {img && (
            <img src={img} className="h-4 w-4 rounded-full grayscale opacity-50" alt="" />
          )}
          <span className="text-[11px] text-muted-foreground tabular-nums">{date}</span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug mb-2 group-hover:underline underline-offset-4 decoration-border group-hover:decoration-foreground transition-colors">
          {title}
        </h3>

        <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 max-w-xl">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 md:pt-6">
        {tags.map((label) => (
          <Badge key={label} variant="secondary" className="text-[9px] uppercase tracking-widest font-medium rounded-sm">
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <Link
        ref={ref}
        href={`/blogs/${slug}`}
        className={className}
        style={{ animationDelay: `${index * 60}ms` }}
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {inner}
    </a>
  );
}

export default BlogCard;
