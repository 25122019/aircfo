import { Review } from "../data";

export const wealthyAffiliateReview: Review = {
  id: '1',
  slug: 'wealthy-affiliate-review-2026',
  type: 'project',
  category: 'Training',
  rating: 4.5,
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  affiliateUrl: 'https://wealthyaffiliate.com?a_aid=example',
  createdAt: '2026-01-15',
  commission: 'Up to $121 per referral',
  cookieTime: 'Lifetime',
  paymentMethods: ['PayPal', 'Check'],
  title: {
    en: 'Wealthy Affiliate Review 2026',
    vi: 'Đánh giá Wealthy Affiliate 2026',
    de: 'Wealthy Affiliate Review 2026'
  },
  description: {
    en: 'Comprehensive look at Wealthy Affiliate.',
    vi: 'Cái nhìn toàn diện về Wealthy Affiliate.',
    de: 'Umfassender Blick auf Wealthy Affiliate.'
  },
  content: {
    en: '<p>Content in English</p>',
    vi: '<p>Nội dung Tiếng Việt</p>',
    de: '<p>Inhalt auf Deutsch</p>'
  },
  pros: [{ en: 'Great community', vi: 'Cộng đồng tốt', de: 'Tolle Community' }],
  cons: [{ en: 'Old UI', vi: 'Giao diện cũ', de: 'Alte Benutzeroberfläche' }]
};
