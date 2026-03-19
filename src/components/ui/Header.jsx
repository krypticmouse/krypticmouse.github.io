import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

function HeaderSimple() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolledRef = useRef(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (scrolledRef.current !== isScrolled) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/blogs', label: 'Blogs', external: false },
    { href: '/projects', label: 'Projects', external: false },
    { href: 'https://journal.herumbshandilya.com', label: 'Journal', external: true },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <span className="text-lg font-bold tracking-tight">krypticmouse.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen} className="md:hidden">
            <Collapsible.Trigger asChild>
              <button className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground transition-colors">
                {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
              </button>
            </Collapsible.Trigger>
            <Collapsible.Content className="absolute left-0 right-0 top-20 border-b bg-background/95 backdrop-blur-md data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
              <nav className="flex flex-col px-6 py-4">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      className="py-3 text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground border-b last:border-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3 text-[13px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground border-b last:border-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
      </div>
    </header>
  );
}

export default HeaderSimple;
