'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguageStore } from '@/lib/store';

export default function JoinUsModal() {
  const { locale } = useLanguageStore();
  const [step, setStep] = useState(1);

  const t = {
    en: {
      title: 'Join AirCFO.world',
      desc: 'Create an account to track your favorite affiliate programs and get exclusive tips.',
      name: 'Full Name',
      email: 'Email Address',
      interest: 'What are you interested in?',
      marketing: 'Affiliate Marketing',
      tools: 'AI Tools & Automation',
      content: 'Content Creation',
      submit: 'Create Account',
      success: 'Welcome Aboard!',
      successDesc: 'Your account has been created. Check your email for next steps.'
    },
    vi: {
      title: 'Gia nhập AirCFO.world',
      desc: 'Tạo tài khoản để theo dõi các dự án yêu thích và nhận mẹo độc quyền.',
      name: 'Họ và tên',
      email: 'Địa chỉ Email',
      interest: 'Bạn quan tâm đến điều gì?',
      marketing: 'Tiếp thị liên kết',
      tools: 'Công cụ AI & Tự động hóa',
      content: 'Sáng tạo nội dung',
      submit: 'Đăng ký ngay',
      success: 'Chào mừng bạn!',
      successDesc: 'Tài khoản đã được tạo. Vui lòng kiểm tra email để bắt đầu.'
    },
    de: {
      title: 'AirCFO.world beitreten',
      desc: 'Erstellen Sie ein Konto, um Ihre Favoriten zu verfolgen und Tipps zu erhalten.',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      interest: 'Wofür interessieren Sie sich?',
      marketing: 'Affiliate-Marketing',
      tools: 'KI-Tools & Automatisierung',
      content: 'Content-Erstellung',
      submit: 'Konto erstellen',
      success: 'Willkommen an Bord!',
      successDesc: 'Ihr Konto wurde erstellt. Prüfen Sie Ihre E-Mails.'
    }
  }[locale] || {
    en: {
        title: 'Join AirCFO.world',
        desc: 'Create an account to track your favorite affiliate programs and get exclusive tips.',
        name: 'Full Name',
        email: 'Email Address',
        interest: 'What are you interested in?',
        marketing: 'Affiliate Marketing',
        tools: 'AI Tools & Automation',
        content: 'Content Creation',
        submit: 'Create Account',
        success: 'Welcome Aboard!',
        successDesc: 'Your account has been created. Check your email for next steps.'
      }
  };

  return (
    <Dialog onOpenChange={(open) => !open && setStep(1)}>
      <DialogTrigger asChild>
        <Button variant="default">{locale === 'vi' ? 'Tham gia' : locale === 'de' ? 'Beitreten' : 'Join Us'}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{t.title}</DialogTitle>
              <DialogDescription>{t.desc}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t.email}</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-3">
                <Label>{t.interest}</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <label htmlFor="marketing" className="text-sm font-medium leading-none">{t.marketing}</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tools" />
                  <label htmlFor="tools" className="text-sm font-medium leading-none">{t.tools}</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="content" />
                  <label htmlFor="content" className="text-sm font-medium leading-none">{t.content}</label>
                </div>
              </div>
            </div>
            <Button onClick={() => setStep(2)} className="w-full">{t.submit}</Button>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 flex justify-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.success}</h3>
            <p className="text-muted-foreground">{t.successDesc}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
