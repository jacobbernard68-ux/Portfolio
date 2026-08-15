export type PortfolioProject = {
  number: string;
  slug: string;
  title: string;
  type: string;
  summary: string;
  image: string;
  darkImage?: string;
  heroImage?: string;
  darkHeroImage?: string;
  imageAlt: string;
  skills: readonly string[];
  dark: boolean;
  status: string;
  challenge: string;
  approach: string;
  outcome: string;
  gallery: readonly string[];
  liveHref?: string;
  liveLabel?: string;
  conceptHref?: string;
  conceptLabel?: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    number: '01',
    slug: 'beans-place',
    title: "The Bean's Place",
    type: 'React · Commerce experience',
    summary:
      'A warm, responsive specialty-coffee storefront that connects product discovery, conservation storytelling, and a working cart experience.',
    image: '/images/portfolio/beans/home-preview-card-tall.png',
    heroImage: '/images/portfolio/beans/home-preview-clean.png',
    imageAlt: "The Bean's Place responsive website",
    skills: ['React', 'Context API', 'Responsive UI'],
    dark: false,
    status: 'Working website',
    challenge:
      'Make a broad specialty-coffee catalog feel approachable while keeping product discovery, brand storytelling, and the route to purchase obvious.',
    approach:
      'Reusable React components establish a consistent shopping system, while Context API keeps cart state available across the catalog and checkout journey.',
    outcome:
      'A complete responsive storefront prototype with a distinctive conservation-led identity, browsable coffee catalog, shared cart state, and clear purchase flow.',
    gallery: [
      '/images/portfolio/beans/home-preview.png',
      '/images/portfolio/beans/home-preview-tall.png',
    ],
    liveHref: '/beans-place/index.html',
    liveLabel: 'Open website',
  },
  {
    number: '02',
    slug: 'vintage-barbershop',
    title: 'Vintage Barbershop',
    type: 'JavaScript · Interactive booking site',
    summary:
      'A fully developed class project pairing a character-rich local-business website with service details, responsive navigation, and an interactive appointment calendar.',
    image: '/images/portfolio/barber/site-preview-card-v2.png',
    heroImage: '/images/portfolio/barber/site-preview-v2.png',
    imageAlt: 'Vintage Barbershop website',
    skills: ['HTML', 'CSS', 'JavaScript'],
    dark: true,
    status: 'Completed class project',
    challenge:
      'Balance a nostalgic neighborhood identity with the speed and clarity customers expect from a modern service website.',
    approach:
      'Editorial imagery and traditional typography establish character, while JavaScript-powered service details, mobile navigation, and appointment selection make the experience useful.',
    outcome:
      'A complete responsive website with dynamically rendered services, modal details, and a functional client-side booking calendar.',
    gallery: [
      '/images/portfolio/barber/site-preview-v2.png',
      '/images/portfolio/barber/site-preview-services.png',
      '/images/portfolio/barber/site-preview-card-v2.png',
    ],
    liveHref: '/vintage-barbershop/index.html',
    liveLabel: 'Open website',
  },
  {
    number: '03',
    slug: 'professional-cleaning',
    title: 'Clearline Services',
    type: 'Service platform · UX design',
    summary:
      'A complete responsive cleaning-service experience built from the original Figma system of precision, order, environment, and care.',
    image: '/images/portfolio/clearline/site-preview-tall-light.png',
    darkImage: '/images/portfolio/clearline/site-preview-tall-dark.png',
    heroImage: '/images/portfolio/clearline/site-preview-clean-light.png',
    darkHeroImage: '/images/portfolio/clearline/site-preview-clean-dark.png',
    imageAlt: 'Clearline professional cleaning experience',
    skills: ['Information hierarchy', 'Responsive design', 'Conversion UX'],
    dark: false,
    status: 'Hybrid Figma-to-code website',
    challenge:
      'Turn a compact visual direction into a credible service experience for residential and commercial customers.',
    approach:
      'The original restrained collage system now anchors a guided service journey with clear choices, company context, and a safe quote interaction.',
    outcome:
      'A responsive working website that preserves the Figma concept while adding practical navigation, service selection, accessibility, and conversion structure.',
    gallery: [
      '/images/portfolio/cleaning-a.png',
      '/images/portfolio/cleaning-b.png',
      '/images/portfolio/cleaning-c.png',
      '/images/portfolio/cleaning-d.png',
    ],
    liveHref: '/concepts/professional-cleaning',
    liveLabel: 'Open website',
    conceptHref: '/figma/professional-cleaning',
    conceptLabel: 'View original Figma design',
  },
  {
    number: '04',
    slug: 'lumen-festival',
    title: 'Lumen Stage',
    type: 'Brand system · Digital experience',
    summary:
      'A responsive editorial festival experience that builds from quiet anticipation through Neon Current to the Lumen Finale.',
    image: '/images/portfolio/lumen-card-tall.png',
    heroImage: '/images/portfolio/lumen-site-preview-clean.png',
    imageAlt: 'Lumen Stage festival experience',
    skills: ['Visual systems', 'Art direction', 'Interface design'],
    dark: true,
    status: 'Hybrid Figma-to-code website',
    challenge:
      'Create a festival identity energetic enough for promotion and structured enough to support schedules, stages, and practical event information.',
    approach:
      'The approved four-stop gradient and alternating editorial grid now support responsive navigation, accessible sequencing, and restrained interaction.',
    outcome:
      'A working responsive festival site that preserves the Figma narrative while adapting its hierarchy and controlled chaos to real browser behavior.',
    gallery: [
      '/images/portfolio/festival-hero.png',
      '/images/portfolio/festival-pulse.png',
      '/images/portfolio/festival-current.png',
      '/images/portfolio/festival-finale.png',
    ],
    liveHref: '/concepts/lumen-festival',
    liveLabel: 'Open website',
    conceptHref: '/figma/lumen-festival',
    conceptLabel: 'View original Figma design',
  },
  {
    number: '05',
    slug: 'furniture-landscapes',
    title: 'Furniture & Landscapes',
    type: 'HTML · Media landing page',
    summary:
      'An early class project combining a full-screen video introduction with an image-led collection of outdoor furniture and landscaping services.',
    image: '/images/portfolio/furniture-card-tall.png',
    heroImage: '/images/portfolio/furniture-site-preview-clean.png',
    imageAlt: 'Furniture and landscaping website',
    skills: ['Semantic HTML', 'CSS', 'Scroll interaction'],
    dark: true,
    status: 'Completed class project',
    challenge:
      'Create an immediate visual introduction for a broad furniture and landscaping concept while guiding visitors toward its featured services.',
    approach:
      'A looping video hero establishes atmosphere, while a responsive card grid and scroll reveals divide the offering into approachable service categories.',
    outcome:
      'A self-contained HTML experience with immersive media, responsive service cards, smooth anchor navigation, and a supporting account-registration screen.',
    gallery: [
      '/furniture-website/Image/Hero Background BG9.jpeg',
      '/furniture-website/Image/Outside Furniture Card.jpeg',
      '/furniture-website/Image/Outside Furniture Card2.jpeg',
      '/furniture-website/Image/Outside Landscape Card.jpeg',
    ],
    liveHref: '/furniture-website/Index.html',
    liveLabel: 'Open website',
  },
];

export const responsiveProjectOrder = [
  'beans-place',
  'vintage-barbershop',
  'furniture-landscapes',
  'professional-cleaning',
  'lumen-festival',
] as const;

export const getPortfolioProject = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);
