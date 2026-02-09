import { n8nReview } from "./reviews/n8n";
import { elevenlabsReview } from "./reviews/elevenlabs";
import { airwallexReview } from "./reviews/airwallex";
import { wealthyAffiliateReview } from "./reviews/wealthy-affiliate";


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
  n8nReview,
  elevenlabsReview,
  airwallexReview,
  wealthyAffiliateReview,
];

export const categories = ['Training', 'Hosting', 'SEO Tools', 'E-commerce', 'Ads', 'Gear', 'AI', 'Finance'];
