'use client';

import Link from 'next/link';
import { reviews, categories } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Inbox } from 'lucide-react';
import { useLanguageStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Home() {
  const { locale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredReview = reviews[0];
  
  // Filter reviews based on type and category
  const filteredReviews = reviews.filter(r => {
    const isProject = r.type === 'project';
    const matchesCategory = selectedCategory ? r.category === selectedCategory : true;
    return isProject && matchesCategory;
  });

  // Recent reviews excludes the featured one if no category is selected
  const recentReviews = selectedCategory 
    ? filteredReviews 
    : filteredReviews.filter(r => r.id !== featuredReview.id);

  const t = (key: any) => {
    if (typeof key === 'object' && key !== null) {
        return key[locale] || key['en'];
    }
    return key;
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const noProjectsText = locale === 'vi' ? 'Chưa có dự án nào trong mục này' : locale === 'de' ? 'Noch keine Projekte in dieser Kategorie' : 'No projects found in this category';
  const recentTitle = selectedCategory 
    ? `${selectedCategory} ${locale === 'vi' ? 'Dự án' : 'Projects'}`
    : (locale === 'vi' ? 'Đánh giá Gần đây' : locale === 'de' ? 'Kürzliche Bewertungen' : 'Recent Reviews');

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {locale === 'vi' ? 'Đánh giá Chuyên gia cho ' : locale === 'de' ? 'Expertenbewertungen für ' : 'Expert Reviews for '}
            <span className="text-primary">
              {locale === 'vi' ? 'Thành công Affiliate' : locale === 'de' ? 'Affiliate-Erfolg' : 'Affiliate Success'}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {locale === 'vi' 
              ? 'Chúng tôi kiểm tra và đánh giá các chương trình, công cụ và đào tạo affiliate tốt nhất.' 
              : locale === 'de' 
                ? 'Wir testen und bewerten die besten Affiliate-Programme, Tools und Schulungen.' 
                : 'We test and review the best affiliate programs, tools, and training.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/reviews">{locale === 'vi' ? 'Xem tất cả' : locale === 'de' ? 'Alle ansehen' : 'Browse All'}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            className="rounded-full px-6"
            onClick={() => setSelectedCategory(null)}
          >
            {locale === 'vi' ? 'Tất cả' : 'All'}
          </Button>
          {categories.map((cat) => (
            <Button 
              key={cat} 
              variant={selectedCategory === cat ? "default" : "outline"} 
              size="sm"
              className="rounded-full px-6"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Review (Only show if no category selected) */}
      {!selectedCategory && (
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{locale === 'vi' ? 'Đánh giá Nổi bật' : locale === 'de' ? 'Hervorgehobene Bewertung' : 'Featured Review'}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={featuredReview.image} 
                alt={t(featuredReview.title)} 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <Badge className="mb-4">{featuredReview.category}</Badge>
              <h3 className="text-2xl font-bold mb-4">{t(featuredReview.title)}</h3>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(featuredReview.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-foreground font-semibold">{featuredReview.rating}/5.0</span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {t(featuredReview.description)}
              </p>
              <Button asChild>
                <Link href={`/reviews/${featuredReview.slug}`}>{locale === 'vi' ? 'Đọc bài viết' : locale === 'de' ? 'Vollständige Bewertung' : 'Read Full Review'}</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Recent Reviews Grid / Filtered Results */}
      <section className="container mx-auto px-4 min-h-[400px]">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold transition-all duration-300">{recentTitle}</h2>
        </div>
        
        {recentReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {recentReviews.map((review) => (
              <Card key={review.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img src={review.image} alt={t(review.title)} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{review.category}</Badge>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-foreground font-medium">{review.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/reviews/${review.slug}`}>{t(review.title)}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {t(review.description)}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 border-t mt-auto py-4">
                  <Button variant="ghost" className="w-full text-primary" asChild>
                    <Link href={`/reviews/${review.slug}`}>{locale === 'vi' ? 'Xem thêm' : locale === 'de' ? 'Mehr lesen' : 'Read More'}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-muted/10 rounded-3xl border-2 border-dashed animate-in zoom-in duration-300">
            <Inbox className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <p className="text-xl font-medium text-muted-foreground italic">{noProjectsText}</p>
          </div>
        )}
      </section>
    </div>
  );
}
