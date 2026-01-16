
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SiteData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  themeColor: string;
  portfolio: PortfolioItem[];
  services: ServiceItem[];
  contactEmail: string;
  contactPhone: string;
}

export type ViewType = 'HOME' | 'ADMIN';
