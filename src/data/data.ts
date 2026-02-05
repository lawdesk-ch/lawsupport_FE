interface ColorTheme {
  text: string;
  back: string;
}

export const colorThemes: Record<string, ColorTheme> = {
  violet: { text: '#4D1377', back: '#F5E6FD' },
  burgundy: { text: '#720F11', back: '#FF9D9E' },
  blue: { text: '#050940', back: '#BCC5FF' },
  forestGreen: { text: '#0E584C', back: '#C1E1DC' },
  darkGreen: { text: '#134005', back: '#E7FECA' },
  brown: { text: '#715014', back: '#F4E9D5' },
  grey: { text: '#4D4D4D', back: '#D7D7D7' },
  purple: { text: '#654805', back: '#D8B76A' },
};

export const menuItemsHeader = [
  {
    label: 'Services',
    children: [
      { label: 'Business in Switzerland', slug: 'business-in-switzerland' },
      { label: 'Swiss company formation', slug: 'swiss-company-formation' },
      { label: 'Migration to Switzerland', slug: 'migration-to-switzerland' },
      { label: 'Swiss bank account', slug: 'swiss-bank-account' },
      {
        label: 'Shelf company in Switzerland',
        slug: 'shelf-company-switzerland',
      },
      { label: 'Accounting in Switzerland', slug: 'accounting-switzerland' },
      {
        label: 'Resident card in Switzerland',
        slug: 'resident-card-switzerland',
      },
      {
        label: 'Company liquidation in Switzerland',
        slug: 'company-liquidation-switzerland',
      },
    ],
  },
  { label: 'About Us', slug: 'about-us' },
  { label: 'Blog', slug: 'blog' },
  { label: 'Contacts', slug: 'contacts' },
];

export const menuItemsFooter = [
  { label: 'Business In Switzerland', slug: 'business-in-switzerland' },
  { label: 'Swiss Company Formation', slug: 'swiss-company-formation' },
  { label: 'Migration To Switzerland', slug: 'migration-to-switzerland' },
  { label: 'Swiss Bank Account', slug: 'swiss-bank-account' },
  {
    label: 'Shelf Company In Switzerland',
    slug: 'shelf-company-in-switzerland',
  },
  { label: 'Accounting In Switzerland', slug: 'accounting-in-switzerland' },
  {
    label: 'Resident Card In Switzerland',
    slug: 'resident-card-in-switzerland',
  },
  {
    label: 'Company Liquidation In Switzerland',
    slug: 'company-liquidation-in-switzerland',
  },
];

export const menuItemsArticles = [
  { label: 'All', slug: 'all' },
  { label: 'Business in Switzerland', slug: 'business-in-switzerland' },
  { label: 'Taxes in Switzerland', slug: 'taxes-in-switzerland' },
  { label: 'Economic', slug: 'economic' },
  { label: 'Immigration', slug: 'immigration' },
  { label: 'Investments', slug: 'investments' },
];

export const services = [
  {
    label: 'Resident card in Switzerland',
    slug: 'resident-card-switzerland',
    bg: '[#f00]',
    color: 'white',
  },
  {
    label: 'Swiss company formation',
    slug: 'swiss-company-formation',
    bg: '[#fafafa]',
    color: 'black',
  },
  {
    label: 'Business in Switzerland',
    slug: 'business-in-switzerland',
    bg: '[#f00]',
    color: 'white',
  },
  {
    label: 'Accounting in Switzerland',
    slug: 'accounting-switzerland',
    bg: 'black',
    color: 'white',
  },
  {
    label: 'Company liquidation in Switzerland',
    slug: 'company-liquidation-switzerland',
    bg: '[#fafafa]',
    color: 'black',
  },
  {
    label: 'Shelf company in Switzerland',
    slug: 'shelf-company-switzerland',
    bg: 'black',
    color: 'white',
  },
  {
    label: 'Migration to Switzerland',
    slug: 'migration-to-switzerland',
    bg: '[#fafafa]',
    color: 'black',
  },
  {
    label: 'Swiss bank account',
    slug: 'swiss-bank-account',
    bg: '[#f00]',
    color: 'white',
  },
];

export const ourApproach = [
  {
    icon: 'people',
    title: 'Consultation',
    desc: `We start by understanding your business objectives and requirements`,
  },
  {
    icon: 'sign',
    title: 'Customized Strategy',
    desc: `Based on your needs, we develop a tailored strategy that aligns with Swiss legal and regulatory standards.`,
  },
  {
    icon: 'execution',
    title: 'Execution',
    desc: `The team handles all the paperwork, legalities, and administrative tasks, allowing you to focus on your core business activities.`,
  },
  {
    icon: 'support',
    title: 'Ongoing Support',
    desc: `Lawsupport remains by your side even after successful setup, offering ongoing support and advice as needed.`,
  },
];
