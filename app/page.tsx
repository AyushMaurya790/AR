'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import PackageComparison from '@/components/PackageComparison';
import QuoteCalculator from '@/components/QuoteCalculator';
import Timeline from '@/components/Timeline';
import DocumentChecklist from '@/components/DocumentChecklist';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Locations from '@/components/Locations';
import ContactForm from '@/components/ContactForm';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactForm(true)} />
      <Hero onContactClick={() => setShowContactForm(true)} />
      <Features />
      <Services />
      <PackageComparison />
      <QuoteCalculator />
      <Timeline />
      <DocumentChecklist />
      <Testimonials />
      <FAQ />
      <Locations />
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
      <ChatWidget isOpen={showChat} setIsOpen={setShowChat} />
      <Footer />
    </main>
  );
}
