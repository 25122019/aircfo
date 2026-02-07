'use client';

import Link from 'next/link';
import { reviews, categories } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Search, Inbox } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguageStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function ReviewsPage() {
  const { locale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const t = (key: any) => {
    if (typeof key === 'object' && key !== null) {
        return key[locale] || key['en'];
    }
    return key;
  };

  const projectReviews = reviews.filter(r => {
    const isProject = r.type === 'project';
    const matchesCategory = selectedCategory ? r.category === selectedCategory : true;
    const matchesSearch = searchQuery 
        ? t(r.title).toLowerCase().includes(searchQuery.toLowerCase()) || 
          t(r.description).toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    return isProject && matchesCategory && matchesSearch;
  });

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const noProjectsText = locale === 'vi' ? 'Chưa có dự án nào được tìm thấy' : 'No projects found';

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">{locale === 'vi' ? 'Dự án Affiliate' : locale === 'de' ? 'Affiliate-Projekte' : 'Affiliate Projects'}</h1>
          <p className="text-muted-foreground">{locale === 'vi' ? 'Khám phá và so sánh các chương trình affiliate tốt nhất.' : 'Discover and compare the best affiliate programs.'}</p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder={locale === 'vi' ? 'Tìm kiếm...' : 'Search...'} 
                className="pl-10 w-full md:w-[300px]" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
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
            onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {projectReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectReviews.map((review) => (
            <Card key={review.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow border-2 hover:border-primary/20">
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
                  <Link href={`/reviews/${review.slug}`}>{locale === 'vi' ? 'Xem thêm' : 'Read More'}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 bg-muted/10 rounded-3xl border-2 border-dashed">
            <Inbox className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <p className="text-xl font-medium text-muted-foreground italic">{noProjectsText}</p>
        </div>
      )}
    </div>
  );
}
