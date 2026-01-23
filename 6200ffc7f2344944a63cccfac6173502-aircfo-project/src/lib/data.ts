export interface Review {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  rating: number;
  category: string;
  type: 'project' | 'product';
  image: string;
  affiliateUrl: string;
  createdAt: string;
  pros: string[];
  cons: string[];
}

export const reviews: Review[] = [
  {
    id: '1',
    title: 'Wealthy Affiliate Review 2026: Is It Still Worth It?',
    slug: 'wealthy-affiliate-review-2026',
    description: 'A comprehensive look at Wealthy Affiliate platform and its potential for beginners in 2026.',
    type: 'project',
    content: `
      <h2>Introduction</h2>
      <p>Wealthy Affiliate has been a staple in the affiliate marketing training space for over two decades. But in 2026, does it still hold up?</p>
      <h2>What is Wealthy Affiliate?</h2>
      <p>Wealthy Affiliate is an all-in-one platform for affiliate marketers, offering hosting, training, and research tools.</p>
    `,
    rating: 4.5,
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://wealthyaffiliate.com?a_aid=example',
    createdAt: '2026-01-15',
    pros: ['Great community support', 'Solid hosting included', 'Beginner friendly'],
    cons: ['Interface can be overwhelming', 'Some training is outdated'],
  },
  {
    id: '2',
    title: 'Bluehost Affiliate Program: High Commission Potential',
    slug: 'bluehost-affiliate-program-review',
    description: 'Deep dive into why Bluehost remains one of the most popular affiliate programs for bloggers.',
    type: 'project',
    content: `
      <h2>Why Bluehost?</h2>
      <p>Bluehost is one of the world's largest web hosting providers and is officially recommended by WordPress.org.</p>
    `,
    rating: 4.2,
    category: 'Hosting',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://bluehost.com/track/example',
    createdAt: '2026-01-20',
    pros: ['High payouts', 'Trusted brand', 'Excellent cookie duration'],
    cons: ['Competitive niche', 'Strict approval process'],
  },
  {
    id: '4',
    title: 'MacBook Pro M3 for Digital Nomads',
    slug: 'macbook-pro-m3-review-affiliate',
    description: 'Why the M3 MacBook Pro is the ultimate tool for affiliate marketers on the go.',
    type: 'product',
    content: `
      <h2>Performance Meets Portability</h2>
      <p>The MacBook Pro M3 offers incredible battery life and performance for video editing and multitasking.</p>
    `,
    rating: 4.9,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://amazon.com/dp/example',
    createdAt: '2026-01-21',
    pros: ['Incredible battery life', 'ProMotion display', 'Powerful M3 chip'],
    cons: ['Expensive', 'Limited ports on base model'],
  },
  {
    id: '5',
    title: 'Sony ZV-1 II Vlogging Camera',
    slug: 'sony-zv1-ii-review',
    description: 'The best compact camera for affiliate marketers creating video reviews.',
    type: 'product',
    content: `
      <h2>Compact Video Powerhouse</h2>
      <p>Sony's ZV-1 II makes it easy to create professional-looking reviews with its excellent autofocus and built-in ND filter.</p>
    `,
    rating: 4.7,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://amazon.com/dp/example2',
    createdAt: '2026-01-22',
    pros: ['Wide-angle lens', 'Excellent autofocus', 'Great microphone'],
    cons: ['Small battery', 'No in-body stabilization'],
  }
];

export const categories = ['Training', 'Hosting', 'SEO Tools', 'E-commerce', 'Ads', 'Gear'];
