import { useInView } from '@/hooks/useInView';
import workExperienceData from '../../content/website-copy/workExperience.json';

function WorkTimelineEntry({ experience, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const renderRole = (role, companyDisplayName, companyUrl, isAdditional = false) => (
    <>
      <h3 className={`text-lg font-semibold tracking-tight ${isAdditional ? 'mt-6' : ''}`}>
        {role.position}{' '}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-border hover:decoration-foreground transition-colors"
        >
          {companyDisplayName}
        </a>
      </h3>
      <p className="text-[13px] text-muted-foreground mt-0.5 mb-2">{role.period}</p>
      <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-1 leading-relaxed">
        {role.responsibilities.map((responsibility, idx) => (
          <li key={idx}>{responsibility}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div
      ref={ref}
      className={`relative pl-10 md:pl-14 pb-12 last:pb-0 reveal-hidden ${isInView ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
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
        <div className="min-w-0">
          {renderRole(
            {
              position: experience.position,
              period: experience.period,
              responsibilities: experience.responsibilities,
            },
            experience.displayName || experience.company,
            experience.companyUrl
          )}
          {experience.additionalRoles &&
            experience.additionalRoles.map((additionalRole, roleIdx) => (
              <div key={roleIdx}>
                {renderRole(
                  additionalRole,
                  experience.displayName || experience.company,
                  experience.companyUrl,
                  true
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function WorkExperience() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div
          ref={headerRef}
          className={`mb-14 reveal-hidden ${headerInView ? 'animate-fade-up' : ''}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Industry
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div>
          {workExperienceData.map((experience, index) => (
            <WorkTimelineEntry key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
