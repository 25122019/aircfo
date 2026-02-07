'use client';

import { reviews } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguageStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function AllProjectsPage() {
  const { locale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = reviews.filter(r => r.type === 'project');
  const t = (key: any) => {
    if (typeof key === 'object' && key !== null) {
      return key[locale] || key['en'];
    }
    return key;
  };

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const translations = {
    vi: {
      title: 'So sánh các Chương trình',
      desc: 'So sánh nhanh hoa hồng, cookie và phương thức thanh toán.',
      colProgram: 'Tên chương trình',
      colCommission: 'Hoa hồng',
      colCookie: 'Thời gian Cookie',
      colPayment: 'Thanh toán',
      colAction: 'Hành động',
      join: 'Tham gia'
    },
    de: {
      title: 'Affiliate-Programme Vergleich',
      desc: 'Schnell Provisionen, Cookie-Dauer und Zahlungsmethoden vergleichen.',
      colProgram: 'Programmname',
      colCommission: 'Provision',
      colCookie: 'Cookie-Zeit',
      colPayment: 'Zahlungsmethoden',
      colAction: 'Aktion',
      join: 'Beitreten'
    },
    en: {
      title: 'Affiliate Programs Comparison',
      desc: 'Quickly compare commission rates, cookie durations, and payment methods.',
      colProgram: 'Program Name',
      colCommission: 'Commission',
      colCookie: 'Cookie Time',
      colPayment: 'Payment Methods',
      colAction: 'Action',
      join: 'Join'
    }
  };

  const currentT = translations[locale] || translations['en'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{currentT.title}</h1>
        <p className="text-muted-foreground max-w-2xl">
          {currentT.desc}
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/50 border-b">
              <th className="p-4 font-bold text-sm">{currentT.colProgram}</th>
              <th className="p-4 font-bold text-sm">{currentT.colCommission}</th>
              <th className="p-4 font-bold text-sm">{currentT.colCookie}</th>
              <th className="p-4 font-bold text-sm">{currentT.colPayment}</th>
              <th className="p-4 font-bold text-sm text-right">{currentT.colAction}</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-primary hover:underline">
                    <Link href={`/reviews/${project.slug}`}>{t(project.title).split(':')[0]}</Link>
                  </div>
                  <Badge variant="outline" className="mt-1 text-[10px]">{project.category}</Badge>
                </td>
                <td className="p-4 text-sm font-medium">
                  {project.commission || 'N/A'}
                </td>
                <td className="p-4 text-sm">
                  {project.cookieTime || 'N/A'}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {project.paymentMethods?.map(m => (
                      <Badge key={m} variant="secondary" className="text-[10px]">{m}</Badge>
                    )) || 'N/A'}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" className="gap-1" asChild>
                      <a href={project.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {currentT.join} <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
