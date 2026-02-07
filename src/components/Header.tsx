import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import JoinUsModal from './JoinUsModal';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/reviews" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/products" className="transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/all-projects" className="transition-colors hover:text-primary font-semibold text-primary">
              Comparison List
            </Link>
            <Link href="/categories" className="transition-colors hover:text-primary">
              Categories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-[150px] lg:w-[250px]"
            />
          </div>
          <LanguageSwitcher />
          <JoinUsModal />
        </div>
      </div>
    </header>
  );
}
