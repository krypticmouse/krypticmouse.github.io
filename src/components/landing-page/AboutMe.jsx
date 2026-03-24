import { useInView } from '@/hooks/useInView';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { Separator } from '@/components/ui/separator';
import DotGrid from '@/components/ui/DotGrid';

const stats = [
  { title: 'Blogs', value: '30+' },
  { title: 'Projects', value: '20+' },
  { title: 'Talks & Sessions', value: '50+' },
  { title: 'Rust Crates', value: '6' },
  { title: 'Python Libraries', value: '5' },
];

function AboutMe() {
  const [leftRef, leftInView] = useInView({ threshold: 0.15 });
  const [rightRef, rightInView] = useInView({ threshold: 0.15 });

  return (
    <section className="bg-foreground text-background py-24 md:py-32 relative overflow-hidden">
      <DotGrid variant="dark" />
      <div className="mx-auto max-w-5xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 md:gap-20">
          <div
            ref={leftRef}
            className={`reveal-hidden ${leftInView ? 'animate-fade-left' : ''}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/40 mb-4">
              About
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Hi, I&apos;m Herumb. Thanks for dropping by.
            </h2>
            <div className="text-[15px] text-background/65 leading-[1.85] space-y-6">
              <p>
                I&apos;m joining{' '}
                <strong className="text-background font-semibold">
                  MixedBread
                </strong>{' '}
                as a Research Engineer, building infrastructure for retrieval systems. Before this I spent time at Stanford&apos;s{' '}
                <strong className="text-background font-semibold">CRFM</strong>,{' '}
                <strong className="text-background font-semibold">Hazy Research</strong>,{' '}
                <strong className="text-background font-semibold">Scaling Intelligence Lab</strong>, and{' '}
                <strong className="text-background font-semibold">Brains in Silicon</strong>{' '}
                working on LLM evaluation, post-training, multi-model inference, routing, and agent evals.
              </p>
              <p>
                At Brains on Silicon, I built training methods for scalable and efficient hyperbolic retrievers
                on nanodendrite-based hardware inference, enabling zero-latency retrieval.
              </p>
              <p>
                I write threads on Twitter and LinkedIn breaking down topics that don&apos;t
                get enough beginner-friendly coverage. If something confuses you, feel free toDM me. Seriously.
              </p>
              <p>
                Zero interest in sports, unreasonable interest in sports anime, and I beatbox.{' '}
                <strong className="text-background font-semibold">
                  Always down to brainstorm! Hit me up if you want a research collaborator.
                </strong>
              </p>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`reveal-hidden ${rightInView ? 'animate-fade-right' : ''}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/40 mb-4">
              Numbers
            </p>
            <div>
              {stats.map((stat, index) => (
                <div key={stat.title}>
                  {index === 0 && <Separator className="bg-background/10" />}
                  <div className="py-5">
                    <p className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
                      <AnimatedNumber value={stat.value} isInView={rightInView} />
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-background/40">
                      {stat.title}
                    </p>
                  </div>
                  <Separator className="bg-background/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
