import Logo from './Logo';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = {
    facebook: '#',
    twitter: '#',
    instagram: 'https://www.instagram.com/aiisnotmagic__/',
    youtube: '#',
    linkedin: '#',
  };

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground max-w-xs">
              Your trusted source for affiliate project reviews. We help you find the best opportunities in the affiliate marketing world.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={socialLinks.facebook} className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href={socialLinks.twitter} className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-600 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href={socialLinks.youtube} className="text-muted-foreground hover:text-red-600 transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href={socialLinks.linkedin} className="text-muted-foreground hover:text-blue-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/reviews" className="hover:text-primary">All Reviews</Link></li>
              <li><Link href="/categories" className="hover:text-primary">Categories</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/disclosure" className="hover:text-primary">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AirCFO.world. All rights reserved.</p>
          <div className="flex gap-6">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
