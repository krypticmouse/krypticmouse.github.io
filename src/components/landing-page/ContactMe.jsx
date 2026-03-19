import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
import ContactIconsList from './ContactIcons';

function ContactMe() {
  const [leftRef, leftInView] = useInView({ threshold: 0.15 });
  const [rightRef, rightInView] = useInView({ threshold: 0.15 });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 md:gap-20">
          <div
            ref={leftRef}
            className={`reveal-hidden ${leftInView ? 'animate-fade-left' : ''}`}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Contact Me
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              If you are a <strong className="text-foreground font-medium">Researcher, Founder or Student</strong> —
              let&apos;s have a chat.
            </p>

            <div className="mt-10">
              <ContactIconsList variant="light" />
            </div>

            <div className="flex gap-1 mt-10">
              <a
                href="https://twitter.com/krypticmouse/"
                className="rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandTwitter size={18} stroke={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/herumb-s-740163131/"
                className="rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconBrandLinkedin size={18} stroke={1.5} />
              </a>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`reveal-hidden ${rightInView ? 'animate-fade-right' : ''}`}
          >
            <div className="border rounded-xl p-8 md:p-10">
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Email *
                  </label>
                  <Input placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Your message *
                  </label>
                  <Textarea
                    placeholder="Wanna collaborate over a project on..."
                    rows={4}
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Button>Send message</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
