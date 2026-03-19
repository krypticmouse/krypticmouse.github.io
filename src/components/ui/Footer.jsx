import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
  IconDiamondsFilled,
  IconLetterG,
} from '@tabler/icons-react';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: IconBrandTwitter, href: 'https://twitter.com/krypticmouse/', label: 'Twitter' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/herumb-s-740163131/', label: 'LinkedIn' },
  { icon: IconBrandGithub, href: 'https://github.com/krypticmouse', label: 'GitHub' },
  { icon: IconBrandStackoverflow, href: 'https://stackoverflow.com/users/12089982/krypticmouse', label: 'StackOverflow' },
  { icon: IconBrandMedium, href: 'https://theaveragecoder.medium.com/', label: 'Medium' },
  { icon: IconDiamondsFilled, href: 'https://krypticmouse.hashnode.dev/', label: 'Hashnode' },
  { icon: IconLetterG, href: 'https://auth.geeksforgeeks.org/user/herumbshandilya/articles', label: 'GFG' },
];

function FooterSocial() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="/">
              <img
                src="/Krypticmouse.jpeg"
                className="h-8 w-8 rounded-full object-cover grayscale"
                alt=""
              />
            </a>
            <p className="text-[13px] text-muted-foreground">
              Herumb Shandilya{' '}
              <span className="text-border mx-1">|</span>{' '}
              <a
                target="_blank"
                href="https://twitter.com/krypticmouse/"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
                rel="noreferrer"
              >
                @krypticmouse
              </a>
            </p>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                target="_blank"
                href={href}
                rel="noreferrer"
                className="rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSocial;
