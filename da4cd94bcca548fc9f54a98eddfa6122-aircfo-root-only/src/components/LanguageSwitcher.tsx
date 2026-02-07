'use client';

import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguageStore } from '@/lib/store';
import { Locale } from '@/lib/data';

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore();
  const [country, setCountry] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect IP/Country only once
    const hasDetected = localStorage.getItem('country-detected');
    if (!hasDetected) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          setCountry(data.country_name);
          localStorage.setItem('country-detected', data.country_name);
          if (data.country_code === 'VN') setLocale('vi');
          if (data.country_code === 'DE') setLocale('de');
        })
        .catch(() => console.log("IP detection failed"));
    } else {
      setCountry(hasDetected);
    }
  }, [setLocale]);

  if (!mounted) return <Button variant="ghost" size="sm" className="gap-2"><Globe className="h-4 w-4" />...</Button>;

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className="flex items-center gap-2">
      {country && (
        <span className="hidden lg:inline text-[10px] text-muted-foreground uppercase tracking-tighter">
          From: {country}
        </span>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="uppercase">{currentLang.code}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code} 
              onClick={() => setLocale(lang.code)}
              className="gap-2 cursor-pointer"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
