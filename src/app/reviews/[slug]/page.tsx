'use client';

import { notFound } from 'next/navigation';
import { reviews } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguageStore } from '@/lib/store';
import { useEffect, useState, use } from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ReviewDetailPage({ params }: Props) {
  const { slug } = use(params);
  const { locale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    notFound();
  }

  const t = (key: any) => {
    if (typeof key === 'object' && key !== null) {
      return key[locale] || key['en'];
    }
    return key;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  const backLinkText = locale === 'vi' ? '← Quay lại' : locale === 'de' ? '← Zurück' : '← Back to all reviews';
  const publishedOnText = locale === 'vi' ? 'Đăng ngày' : locale === 'de' ? 'Veröffentlicht am' : 'Published on';
  const quickVerdictText = locale === 'vi' ? 'Đánh giá nhanh' : locale === 'de' ? 'Kurzes Fazit' : 'Quick Verdict';
  const getStartedText = locale === 'vi' ? 'Bắt đầu ngay' : locale === 'de' ? 'Jetzt loslegen' : 'Get Started';
  const affiliateNoteText = locale === 'vi' 
    ? '* Đây là link affiliate. Chúng tôi có thể nhận hoa hồng nếu bạn mua hàng.' 
    : locale === 'de' 
    ? '* Dies ist ein Affiliate-Link. Wir erhalten möglicherweise eine Provision, wenn Sie etwas kaufen.' 
    : '* This is an affiliate link. We may earn a commission if you make a purchase.';
  const prosText = locale === 'vi' ? 'Ưu điểm' : locale === 'de' ? 'Vorteile' : 'Pros';
  const consText = locale === 'vi' ? 'Nhược điểm' : locale === 'de' ? 'Nachteile' : 'Cons';

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/reviews" className="text-sm text-primary hover:underline flex items-center gap-1 mb-4">
          {backLinkText}
        </Link>
        <Badge className="mb-4">{review.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t(review.title)}</h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < Math.floor(review.rating) ? 'fill-current' : 'text-gray-300'}`} />
            ))}
            <span className="ml-1 text-foreground font-bold">{review.rating}/5.0</span>
          </div>
          <span>{publishedOnText} {new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="aspect-video relative overflow-hidden rounded-2xl mb-12 shadow-xl">
        <img src={review.image} alt={t(review.title)} className="object-cover w-full h-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: t(review.content) }} />
          
          <Separator className="my-12" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30">
              <h3 className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-4">
                <CheckCircle className="h-5 w-5" /> {prosText}
              </h3>
              <ul className="space-y-2 text-sm">
                {review.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">•</span> {t(pro)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
              <h3 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400 mb-4">
                <XCircle className="h-5 w-5" /> {consText}
              </h3>
              <ul className="space-y-2 text-sm">
                {review.cons.map((con, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">•</span> {t(con)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="sticky top-24 p-6 border rounded-2xl bg-card shadow-sm">
            <h3 className="font-bold text-xl mb-4">{quickVerdictText}</h3>
            <div className="text-4xl font-bold text-primary mb-4">{review.rating}/5</div>
            <p className="text-sm text-muted-foreground mb-6">
              {t(review.description)}
            </p>
            <Button className="w-full h-12 text-lg font-bold gap-2" asChild>
              <a href={review.affiliateUrl} target="_blank" rel="noopener noreferrer">
                {getStartedText} <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
              {affiliateNoteText}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
