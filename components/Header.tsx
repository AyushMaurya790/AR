'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      {/* Main Header - Fixed at Top */}
      <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white dark:bg-slate-900 shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-14%20at%2010.03.19%20AM-JfA8h1yaNtHTbnQqpkKODBO76bjrL8.jpeg"
                alt="AR Consultancy Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-bold text-lg text-foreground block leading-tight">AR CONSULTANCY</span>
                <span className="text-xs text-muted-foreground">Business Setup in UAE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-[15px]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={onContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="lg:hidden pb-6 space-y-2 border-t border-border pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-accent hover:text-primary rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Get Free Consultation
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Spacer for fixed header (80px) */}
      <div className="h-20" />
    </>
  );
}
