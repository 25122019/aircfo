import Link from 'next/link';
import { categories, reviews } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Browse by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const count = reviews.filter(r => r.category === category).length;
          return (
            <Link key={category} href={`/reviews?category=${category}`}>
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {category}
                    <Badge variant="secondary">{count} Reviews</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover the best {category.toLowerCase()} programs and tools.
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
