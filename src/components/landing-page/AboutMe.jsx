import { useInView } from '@/hooks/useInView';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { Separator } from '@/components/ui/separator';

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
    <section className="bg-foreground text-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
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
                I&apos;m currently working as a{' '}
                <strong className="text-background font-medium">
                  Research Assistant at CRFM (Centre for Research in Foundation Models) Lab at Stanford University
                </strong>{' '}
                where most of my task is currently revolving around building infrastructure for evaluating and post-training LLMs.
                I&apos;m working in other labs including Hazy Research and Scaling Intelligence Lab with Jon Saad Falcon on various
                projects ranging from multi model inference, LLM routing, Agent Evaluations, etc.
              </p>
              <p>
                In my free time, I (try to) write posts on Twitter or LinkedIn trying to introduce topics less known to beginners.
                Teaching people is something I love a lot so if you have any questions feel free to DM, I&apos;ll try my very best
                to help you out!
              </p>
              <p>
                I hate sports but I love sports anime and I love beatboxing as well.{' '}
                <strong className="text-background font-medium">
                  Ping me if you are looking for research collaborators, let&apos;s brainstorm together!
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
