import { useInView } from '@/hooks/useInView';
import researchExperienceData from '../../content/website-copy/researchExperience.json';

function TimelineEntry({ experience, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const renderRole = (role) => {
    const advisorsText = role.advisors ? ` under ${role.advisors.join(' and ')}` : '';
    const labText = role.lab ? ` at ${role.lab}` : '';

    return (
      <>
        <h3 className="text-lg font-semibold tracking-tight">
          {role.position}
        </h3>
        <p className="text-[13px] text-muted-foreground mt-0.5 mb-2">
          {role.period} · {role.duration}
        </p>
        {role.lab && role.advisors && (
          <p className="text-sm text-foreground/70 mb-2 leading-relaxed">
            {role.description}{labText}{advisorsText}
          </p>
        )}
        {role.projects && (
          <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-1 leading-relaxed">
            {role.projects.map((project, idx) => {
              const projectAdvisorsText = project.advisors ? ` under ${project.advisors.join(' and ')}` : '';
              const projectLabText = project.lab ? ` at ${project.lab}` : '';
              return (
                <li key={idx}>
                  {project.description}{projectLabText}{projectAdvisorsText}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={`relative pl-10 md:pl-14 pb-12 last:pb-0 reveal-hidden ${isInView ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="absolute left-[-3px] top-2 h-[7px] w-[7px] rounded-full bg-foreground" />

      <div className="flex gap-5 md:gap-6 items-start">
        <img
          src={experience.image}
          className="w-11 h-11 md:w-14 md:h-14 object-contain flex-shrink-0 grayscale opacity-80"
          style={{ borderRadius: experience.imageRadius || 0 }}
          alt=""
        />
        <div className="min-w-0 space-y-0">
          {experience.roles.map((role, roleIdx) => (
            <div key={roleIdx} className={roleIdx > 0 ? 'mt-6' : ''}>
              {renderRole(role)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResearchExperience() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div
          ref={headerRef}
          className={`mb-14 reveal-hidden ${headerInView ? 'animate-fade-up' : ''}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Academic work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Research Experience
          </h2>
        </div>

        <div>
          {researchExperienceData.map((experience, index) => (
            <TimelineEntry key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchExperience;
