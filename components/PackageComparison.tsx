'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, ArrowRight, Sparkles, TrendingUp, Gift, Clock } from 'lucide-react';

const dummyPackages = [
  {
    id: 1,
    name: 'Starter Package',
    description: 'Perfect for small businesses',
    price: 'AED 9,999',
    discount: '20% OFF',
    icon: 'Zap',
    image: '/hero-1.jpg',
    popular: false,
    features: [
      'Business License Registration',
      'Free Zone Setup',
      '1 Visa Allocation',
      'Office Space (Flexi Desk)',
      'Basic PRO Services',
      'Email Support'
    ]
  },
  {
    id: 2,
    name: 'Professional Package',
    description: 'Most popular choice',
    price: 'AED 19,999',
    discount: '30% OFF',
    icon: 'Star',
    image: '/hero-2.jpg',
    popular: true,
    features: [
      'Everything in Starter',
      '3 Visa Allocations',
      'Golden Visa Assistance',
      'Private Office Space',
      'Bank Account Opening',
      'Complete PRO Services',
      'Priority Support',
      'Free Business Consultation'
    ]
  },
  {
    id: 3,
    name: 'Enterprise Package',
    description: 'For established businesses',
    price: 'AED 34,999',
    discount: '25% OFF',
    icon: 'Crown',
    image: '/hero-3.jpg',
    popular: false,
    features: [
      'Everything in Professional',
      '10 Visa Allocations',
      'Multiple Golden Visas',
      'Premium Office Suite',
      'Multi-Currency Accounts',
      'Dedicated Account Manager',
      'VAT Registration & Filing',
      'Monthly Accounting Services',
      '24/7 VIP Support'
    ]
  }
];

const iconMap: any = { Check, Star, Zap, Crown, ArrowRight, Sparkles, TrendingUp, Gift, Clock };

export default function PackageComparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full mb-4 border border-amber-500/20">
            <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
            <span className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Exclusive Packages
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Limited Time Offer - Valid This Month
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Offer ends in: 15 days</span>
          </div>
        </div>

        {/* Packages Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {dummyPackages.map((pkg, index) => {
            const Icon = iconMap[pkg.icon] || Star;
            return (
              <Card
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden transition-all duration-500 flex flex-col ${
                  pkg.popular
                    ? 'md:scale-105 border-2 border-primary shadow-2xl'
                    : hoveredIndex === index
                    ? 'scale-100 md:scale-105 shadow-2xl border-2 border-primary'
                    : 'scale-100 shadow-lg border border-border hover:border-primary/50'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 z-20">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-center py-2 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                      <span className="hidden sm:inline">BEST SELLER - MOST POPULAR</span>
                      <span className="sm:hidden">MOST POPULAR</span>
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                {pkg.discount && (
                  <div className={`absolute ${pkg.popular ? 'top-12' : 'top-4'} right-4 z-20`}>
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {pkg.discount}
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className={`relative h-40 sm:h-48 overflow-hidden ${pkg.popular ? 'mt-10 sm:mt-12' : ''}`}>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredIndex === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Animated Glow */}
                {(hoveredIndex === index || pkg.popular) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 animate-pulse" />
                )}

                <div className="relative p-4 sm:p-6 flex flex-col flex-grow space-y-3 sm:space-y-4">
                  {/* Package Name */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{pkg.description}</p>
                  </div>

                  {/* Price */}
                  <div className="py-3 sm:py-4 border-y border-border/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {pkg.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-xl hover:shadow-2xl'
                        : 'bg-muted text-foreground hover:bg-primary hover:text-white'
                    } transition-all duration-300 group text-sm`}
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Hover Arrow */}
                  {hoveredIndex === index && (
                    <div className="absolute bottom-4 right-4 hidden sm:block">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Card className="overflow-hidden border-2 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="relative p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 rounded-full border border-green-500/20">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">
                All Packages Include Free Consultation
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
              Not Sure Which Package is Right for You?
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our experts will help you choose the perfect package based on your business needs and budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg transition-all duration-300"
              >
                Compare All Features
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span>Flexible Payment Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span>No Hidden Charges</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
