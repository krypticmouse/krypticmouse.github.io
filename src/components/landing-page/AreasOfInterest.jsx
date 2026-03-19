import { useInView } from '@/hooks/useInView';
import {
  IconLanguage,
  IconEye,
  IconDeviceDesktop,
  IconZoomExclamation,
  IconRobot,
  IconSearch,
} from '@tabler/icons-react';

const areas = [
  {
    title: 'ML Systems',
    description:
      "Systems became an area of major interest for me this year. I've worked on project in Rust, CUDA and Triton to name a few. I'm currently working building DSRs which is a Rust port of DSPy and building Synapse which is a configuration language and runtime for building memory systems for AI agents.",
    icon: IconEye,
  },
  {
    title: 'LLM Post-Training',
    description:
      "The fun is after pretraining ends! In my current and past works, I've worked on post-training techniques and building infrastructure for various downstream tasks like Tool Use, etc. I'm currently working on finding techniques to improve output format adaptation in LLMs.",
    icon: IconLanguage,
  },
  {
    title: 'Information Retrieval',
    description:
      "Information Retrieval is something I've been working on for a while now. I've seen the power of it and how it can be used to solve real world problems. I've worked on traditional IR models and also on modern ones. I've researched deeply on training retrieval models for LLM routing. I love it!",
    icon: IconSearch,
  },
  {
    title: 'Performance Optimization',
    description:
      "Performance is as important as model itself. The limitations of research should be around the ideas and not the infrastructure. Building fast and efficient research infrastructure is something I'm passionate about and have been doing in labs for the past few years.",
    icon: IconDeviceDesktop,
  },
  {
    title: 'Deep Learning Research',
    description:
      "I've implemented papers for personal learning, for work and as freelancer for student researchers and worked with them to improve them. Up for hearing your ideas in mind and help you brainstorm how to can go about the task!",
    icon: IconZoomExclamation,
  },
  {
    title: 'Reinforcement Learning',
    description:
      "Reinforcement Learning was my gateway to ML, so it has always been something I wanted to try. After reading AlphaTensor I got more fascinated with it. Currently, I'm working with RL for LLM post-training team at Stanford.",
    icon: IconRobot,
  },
];

function AreaItem({ area, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`border-t pt-7 pb-8 reveal-hidden ${isInView ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <area.icon size={18} stroke={1.5} className="text-foreground/70" />
        <h3 className="text-base font-semibold tracking-tight">{area.title}</h3>
      </div>
      <p className="text-[13px] text-muted-foreground leading-relaxed">
        {area.description}
      </p>
    </div>
  );
}

function AreasOfInterest() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div
          ref={headerRef}
          className={`mb-14 reveal-hidden ${headerInView ? 'animate-fade-up' : ''}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
            What I work on
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Areas of Interest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {areas.map((area, index) => (
            <AreaItem key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasOfInterest;
