import { IconBrandDiscord, IconBrandTwitterFilled, IconAt } from '@tabler/icons-react';

const CONTACT_DATA = [
  { title: 'Email', description: 'herumb@stanford.edu', icon: IconAt },
  { title: 'Discord', description: 'krypticmouse', icon: IconBrandDiscord },
  { title: 'Preferred', description: 'Twitter DM', icon: IconBrandTwitterFilled },
];

function ContactIcon({ icon: Icon, title, description, variant }) {
  const isDark = variant === 'dark';
  return (
    <div className="flex items-center gap-4">
      <Icon
        size={16}
        className={`flex-shrink-0 ${isDark ? 'text-background/40' : 'text-muted-foreground'}`}
      />
      <div>
        <p className={`text-[10px] font-medium uppercase tracking-wider ${isDark ? 'text-background/40' : 'text-muted-foreground'}`}>
          {title}
        </p>
        <p className={`text-sm ${isDark ? 'text-background/80' : 'text-foreground/80'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactIconsList({ variant = 'light' }) {
  return (
    <div className="space-y-4">
      {CONTACT_DATA.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
      ))}
    </div>
  );
}

export default ContactIconsList;
