import { n8nReview } from "./reviews/n8n";
import { wealthyAffiliateReview } from "./reviews/wealthy-affiliate";
import { elevenlabsReview } from "./reviews/elevenlabs";
import { airwallexReview } from "./reviews/airwallex";


export type Locale = 'en' | 'vi' | 'de';

export interface LocalizedString {
  en: string;
  vi: string;
  de: string;
}

export interface Review {
  id: string;
  slug: string;
  rating: number;
  category: string;
  type: 'project' | 'product';
  image: string;
  affiliateUrl: string;
  createdAt: string;
  title: LocalizedString;
  description: LocalizedString;
  content: LocalizedString;
  pros: LocalizedString[];
  cons: LocalizedString[];
  commission?: string;
  cookieTime?: string;
  paymentMethods?: string[];
}

export const reviews: Review[] = [
  elevenlabsReview,
  n8nReview,
  wealthyAffiliateReview,
];

export const categories = ['Training', 'Hosting', 'SEO Tools', 'E-commerce', 'Ads', 'Gear', 'AI'];
