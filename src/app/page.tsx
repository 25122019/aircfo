import Link from 'next/link';
import { reviews, categories } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function Home() {
  const featuredReview = reviews[0];
  const recentReviews = reviews.filter(r => r.type === 'project').slice(1);
  const recentProducts = reviews.filter(r => r.type === 'product').slice(0, 3);

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Expert Reviews for <span className="text-primary">Affiliate Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We test and review the best affiliate programs, tools, and training so you can build a profitable online business with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/reviews">Browse All Reviews</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Badge key={cat} variant="secondary" className="px-4 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Review */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Review</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={featuredReview.image} 
              alt={featuredReview.title} 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <Badge className="mb-4">{featuredReview.category}</Badge>
            <h3 className="text-2xl font-bold mb-4">{featuredReview.title}</h3>
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(featuredReview.rating) ? 'fill-current' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-foreground font-semibold">{featuredReview.rating}/5.0</span>
            </div>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {featuredReview.description}
            </p>
            <Button asChild>
              <Link href={`/reviews/${featuredReview.slug}`}>Read Full Review</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Reviews Grid */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold">Recent Reviews</h2>
          <Button variant="link" asChild>
            <Link href="/reviews">View All →</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentReviews.map((review) => (
            <Card key={review.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
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
                  <Link href={`/reviews/${review.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your affiliate journey?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest reviews and strategy guides delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow rounded-md bg-white text-black px-4 py-2 outline-none"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
