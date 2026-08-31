export const SITE = {
  name: 'Modern Atlantic Upholstery',
  url: 'https://maupholsteryclt.com',
  phoneDisplay: '(704) 247-7382',
  phoneHref: '+17042477382',
  email: 'info@maupholsteryclt.com',
  locationLabel: 'Matthews, North Carolina',
  serviceAreaLabel: 'Matthews & the Charlotte area',
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
  google: {
    rating: '5.0',
    reviewCount: 59,
  },
} as const;

export const SERVICES = [
  {
    name: 'Automotive Upholstery',
    href: '/automotive-upholstery/',
    short: 'Seats, headliners, interior panels, restoration, and custom automotive interior work.',
    image: '/legacy-repo/moto.jpg',
  },
  {
    name: 'Marine Upholstery',
    href: '/marine-upholstery/',
    short: 'Boat seating, cushions, and custom marine upholstery built around the way the space is used.',
    image: '/legacy-repo/bout.jpg',
  },
  {
    name: 'Furniture Upholstery',
    href: '/furniture-upholstery/',
    short: 'Reupholstery for chairs, sofas, dining furniture, and pieces worth giving a second life.',
    image: '/legacy-repo/sofas.jpg',
  },
  {
    name: 'Commercial Upholstery',
    href: '/commercial-upholstery/',
    short: 'Seating and furniture upholstery for businesses, hospitality spaces, and shared environments.',
    image: '/legacy-repo/Commercial.jpg',
  },
] as const;

export const PRIMARY_NAV = [
  { label: 'Services', href: '/services/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Contact', href: '/contact/' },
] as const;
