import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl text-primary">
            AirCFO<span className="text-foreground">.world</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/reviews" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/products" className="transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="transition-colors hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reviews..."
              className="pl-8 w-[200px] lg:w-[300px]"
            />
          </div>
          <Button variant="default">Join Us</Button>
        </div>
      </div>
    </header>
  );
}
