import Link from 'next/link';
import { reviews, categories } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function ProductsPage() {
  const productReviews = reviews.filter(r => r.type === 'product');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Affiliate Product Reviews</h1>
          <p className="text-muted-foreground">The best gear and products for affiliate marketers and digital entrepreneurs.</p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <Input placeholder="Search products..." className="w-full md:w-[300px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productReviews.map((review) => (
          <Card key={review.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow border-2 hover:border-primary/20">
            <div className="aspect-video relative overflow-hidden">
              <img src={review.image} alt={review.title} className="object-cover w-full h-full" />
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
                <Link href={`/reviews/${review.slug}`}>{review.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {review.description}
              </p>
            </CardContent>
            <CardFooter className="pt-0 border-t mt-auto py-4">
              <Button variant="ghost" className="w-full text-primary" asChild>
                <Link href={`/reviews/${review.slug}`}>Read Full Review</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
