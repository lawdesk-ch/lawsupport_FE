/* eslint-disable @typescript-eslint/no-explicit-any */
export type FAQItem = {
  id: number;
  question: string;
  markdown_answer?: string;
};

export type StrapiMedia = {
  url: string;
};

export type CTABlock = {
  id: number;
  idBlock: string;
  nameBlock: string;
  positionBlock: string;
  phoneBlock: string;
  imageBlock?: StrapiMedia;
};

export type Category = {
  id: number;
  title_category: string;
  slug: string;
  articles: Article[];
};

export type AuthorPreview = {
  id: number;
  slugAuthor: string;
  fullNameAuthor: string;
  position?: string;
  imgAuthor?: StrapiMedia;
};

export interface ArticleMinimal {
  id: number;
  slug: string;
  title: string;
  readingTime?: number;
  description: string;
  date: string;
  imageArticle?: { url: string };
  categories: any[];
}

export type ArticleColorName =
  | 'violet'
  | 'burgundy'
  | 'blue'
  | 'forestGreen'
  | 'darkGreen'
  | 'brown'
  | 'grey'
  | 'purple';

export type Article = {
  id: number;
  slug: string;
  title: string;
  date: string;
  author?: AuthorPreview;
  description: string;
  imageArticle?: StrapiMedia;
  image: string;
  video: string;
  markdown_article: string;
  colorName: ArticleColorName;
  readingTime?: number;
  faqs: FAQItem[];
  categories: Category[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  schema: any;
  ogTitle: string;
  ogDescription: string;
  ogImage?: StrapiMedia;
  updatedAt: string;
  CTABlock: CTABlock[];
};

// page Author

export type FAQAuthor = {
  id: number;
  question: string;
  answer: string;
};

export type ExperienceItem = {
  experience: string;
};

export type ServiceItem = {
  service: string;
};

export type EducationQualification = {
  educationalInstitution: string;
  degree: string;
};

export type AreaOfSpecialization = {
  areas: string;
};

export type CredentialCertification = {
  credentialsCertifications: string;
  type: 'degree' | 'contributions' | 'membership' | 'courses';
};

export type ClientStory = {
  caseId: number;
  title: string;
  challenge: string;
  solution: string;
  result: string;
};

export type Author = {
  id: number;
  slugAuthor: string;
  fullNameAuthor: string;
  position: string;
  description: string;
  publishedArticlesQuote: string;

  imgAuthor?: StrapiMedia;

  ClientStories: ClientStory[];
  ExperienceBenefits: ExperienceItem[];
  ServiceBenefits: ServiceItem[];
  EducationQualifications: EducationQualification[];
  AreasOfSpecialization: AreaOfSpecialization[];
  CredentialsCertifications: CredentialCertification[];

  professionalAffiliations: string;
  quote: string;

  faqsAuthor: FAQAuthor[];

  email: string;
  phone: string;
  office: string;

  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: StrapiMedia;
  schema: any;

  availableForNewClients: boolean;
};
