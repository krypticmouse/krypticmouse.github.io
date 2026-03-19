import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ title, desc, tags, stack, href, index = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const stackItems = stack ? stack.split(', ').filter(Boolean) : [];

  const inner = (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 md:gap-10 items-start">
      <div>
        <h3 className={`text-lg md:text-xl font-semibold tracking-tight leading-snug mb-2 ${href ? 'group-hover:underline underline-offset-4 decoration-border group-hover:decoration-foreground transition-colors' : ''}`}>
          {title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xl">
          {desc}
        </p>
      </div>

      <div className="space-y-3 md:pt-0">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5">
            Domain
          </p>
          <div className="flex flex-wrap gap-1">
            {tags.map((label) => (
              <Badge key={label} variant="secondary" className="text-[9px] uppercase tracking-widest font-medium rounded-sm">
                {label}
              </Badge>
            ))}
          </div>
        </div>

        {stackItems.length > 0 && (
          <div>
            <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5">
              Stack
            </p>
            <p className="text-[12px] text-foreground/70 leading-relaxed">
              {stack}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const sharedClass = `group border-t py-8 md:py-10 hover:bg-muted/30 -mx-6 px-6 transition-colors duration-300 reveal-hidden ${isInView ? 'animate-fade-up' : ''}`;

  return href ? (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block ${sharedClass}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {inner}
    </a>
  ) : (
    <div
      ref={ref}
      className={sharedClass}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {inner}
    </div>
  );
}

export default ProjectCard;
