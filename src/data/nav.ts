export interface NavItem {
  label: string;
  href: string;
  /** external links open in a new tab */
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Freddy in Your Corner', href: '/freddy-in-your-corner/' },
  { label: 'Motivational Speaker', href: '/motivational-speaker/' },
  { label: 'DevOps / AL-Go for GitHub', href: '/devops/' },
  { label: 'About me', href: '/about/' },
  { label: 'Blog', href: 'https://freddysblog.com', external: true },
  { label: 'Contact', href: '/contact/' },
];

export const social = {
  linkedin: 'https://www.linkedin.com/in/freddykristiansen/',
  twitter: 'https://x.com/freddydk',
  github: 'https://github.com/freddydk',
  bluesky: 'https://bsky.app/profile/freddydk.bsky.social',
};

export const contact = {
  name: 'Freddy Kristiansen',
  address: 'Bybakken 17, Annisse, 3200 Helsinge, Denmark',
  phone: '+45 5352 0103',
  phoneHref: '+4553520103',
  email: 'contact@freddy.dk',
};
