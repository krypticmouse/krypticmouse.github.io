import { useInView } from '@/hooks/useInView';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const socialLinks = [
  { icon: IconBrandTwitter, href: 'https://twitter.com/krypticmouse/', label: 'Twitter' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/herumb-s-740163131/', label: 'LinkedIn' },
  { icon: IconBrandGithub, href: 'https://github.com/krypticmouse', label: 'GitHub' },
];

function Hero() {
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
          <div
            ref={leftRef}
            className={`order-2 md:order-1 reveal-hidden ${leftInView ? 'animate-fade-left' : ''}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
              ML Engineer & Researcher
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
              Herumb
              <br />
              Shandilya
            </h1>

            <div className="mt-8 space-y-1">
              <p className="text-lg md:text-xl text-muted-foreground">
                NLP Researcher <span className="italic">&amp; GPU Whisperer</span>
              </p>
              <p className="text-base text-muted-foreground/70">
                Neat freak coder obsessed with systems. Currently on Rust and CUDA.
              </p>
            </div>

            <div className="flex items-center gap-1 mt-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} stroke={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`order-1 md:order-2 flex justify-center md:justify-end reveal-hidden ${rightInView ? 'animate-fade-right' : ''}`}
          >
            <div className="relative md:-mt-10">
              <img
                src="/dp.jpg"
                className="h-52 w-52 md:h-72 md:w-72 rounded-2xl object-cover grayscale shadow-2xl"
                alt="Herumb Shandilya"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
