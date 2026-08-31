export const SITE = {
  name: 'Modern Atlantic Upholstery',
  url: 'https://maupholsteryclt.com',
  phoneDisplay: '(704) 247-7382',
  phoneHref: '+17042477382',
  email: 'info@maupholsteryclt.com',
  address: {
    street: '616 Arrow Drive Unit C',
    locality: 'Matthews',
    region: 'NC',
    postalCode: '28104',
    country: 'US',
  },
  social: {
    facebook:
      'https://www.facebook.com/people/Modern-Atlantic-Upholstery/100077399907154/',
    instagram: 'https://www.instagram.com/maupholsteryclt',
  },
} as const;

export const PRIMARY_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact', href: '/contact/' },
] as const;
