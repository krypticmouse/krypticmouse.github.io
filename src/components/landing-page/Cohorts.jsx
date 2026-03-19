import { useInView } from '@/hooks/useInView';
import { Separator } from '@/components/ui/separator';

const cohorts = [
  {
    year: '2022',
    title: 'Started Beginner in Research Group',
    description:
      'Joined the research community at Cohere Labs as a beginner, contributing to foundational work in multilingual NLP and open-source data collection.',
  },
  {
    year: '2022 – 2023',
    title: 'Lead Paper Implementation Sprints',
    description:
      'Organized and led sprint sessions where participants implemented key research papers, fostering hands-on understanding of cutting-edge ML techniques.',
  },
  {
    year: '2023',
    title: 'Lead CUDA Programming Cohort',
    description:
      'Designed and taught a structured cohort on GPU programming with CUDA, covering kernel writing, memory optimization, and parallel computing fundamentals.',
  },
  {
    year: '2023',
    title: 'Co-Lead AI Alignment Cohort',
    description:
      'Co-organized a reading and discussion group focused on AI safety and alignment, covering topics from RLHF to constitutional AI approaches.',
  },
  {
    year: '2024',
    title: 'Co-Lead NLP Reading Group',
    description:
      'Facilitated weekly paper discussions covering the latest advances in NLP, from retrieval-augmented generation to efficient fine-tuning methods.',
  },
];

function CohortEntry({ cohort, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <div ref={ref}>
      {index === 0 && <Separator className="bg-background/10" />}
      <div
        className={`py-8 md:py-10 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start reveal-hidden ${isInView ? 'animate-fade-up' : ''}`}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <p className="text-[13px] font-medium text-background/40 pt-1 tabular-nums">
          {cohort.year}
        </p>
        <div>
          <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2">
            {cohort.title}
          </h3>
          <p className="text-[13px] md:text-sm text-background/60 leading-relaxed">
            {cohort.description}
          </p>
        </div>
      </div>
      <Separator className="bg-background/10" />
    </div>
  );
}

function Cohorts() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-foreground text-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div
          ref={headerRef}
          className={`mb-14 reveal-hidden ${headerInView ? 'animate-fade-up' : ''}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/40 mb-3">
            Community & Teaching
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Talks @ Cohere Labs
          </h2>
        </div>

        <div>
          {cohorts.map((cohort, index) => (
            <CohortEntry key={index} cohort={cohort} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cohorts;
