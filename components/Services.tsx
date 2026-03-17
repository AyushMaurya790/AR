'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, CreditCard, FileText, DollarSign, BarChart3, Award, CheckCircle, ArrowRight, Sparkles, Clock, TrendingUp, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import { fetchServices } from '@/lib/api';

const iconMap: any = {
  Building2, CreditCard, FileText, DollarSign, BarChart3, Award, CheckCircle, ArrowRight, Sparkles, Clock, TrendingUp, Shield, Star
};

// Dummy data for services
const DUMMY_SERVICES = [
  {
    _id: '1',
    title: 'Company Formation & Registration',
    description: 'Complete business setup assistance including PRO services, legal documentation, and government registrations for seamless company formation.',
    icon: 'Building2',
    price: 'AED 1,999',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    features: ['Trade License Registration', 'PRO Services', 'Legal Documentation', 'Bank Account Setup'],
    isActive: true
  },
  {
    _id: '2',
    title: 'Business Accounting & Compliance',
    description: 'Professional accounting services with tax compliance, VAT filing, and financial reporting to keep your business audit-ready.',
    icon: 'BarChart3',
    price: 'AED 2,499',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15c9?w=500&h=400&fit=crop',
    features: ['Monthly Accounting', 'VAT Compliance', 'Tax Filing', 'Financial Reports'],
    isActive: true
  },
  {
    _id: '3',
    title: 'Bank Account Opening',
    description: 'Hassle-free corporate bank account opening with all major UAE banks, including account maintenance and documentation support.',
    icon: 'CreditCard',
    price: 'AED 899',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15c9?w=500&h=400&fit=crop',
    features: ['Account Opening Support', 'Document Guidance', 'Bank Relations', 'Ongoing Support'],
    isActive: true
  },
  {
    _id: '4',
    title: 'Legal & Contract Review',
    description: 'Expert legal consultation for contract drafting, review, and compliance ensuring all agreements protect your business interests.',
    icon: 'FileText',
    price: 'AED 1,599',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    features: ['Contract Drafting', 'Legal Review', 'Compliance Check', 'Legal Advice'],
    isActive: true
  },
  {
    _id: '5',
    title: 'Visa & Employment Setup',
    description: 'Complete visa processing, employment contracts, and labor compliance to bring your team to UAE with full government approval.',
    icon: 'TrendingUp',
    price: 'AED 1,299',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    features: ['Visa Processing', 'Employment Contracts', 'Labor Compliance', 'Staff Records'],
    isActive: true
  },
  {
    _id: '6',
    title: 'Business Consultation & Strategy',
    description: 'Strategic business guidance, market analysis, and growth planning with industry experts to maximize your UAE business success.',
    icon: 'Award',
    price: 'AED 3,499',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    features: ['Market Analysis', 'Business Strategy', 'Growth Planning', 'Expert Guidance'],
    isActive: true
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await fetchServices();
      const validServices = data.filter((s: any) => s.isActive);
      setServices(validServices.length > 0 ? validServices : DUMMY_SERVICES);
    } catch (error) {
      console.error('Failed to load services:', error);
      setServices(DUMMY_SERVICES);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Complete business solutions from setup to operations
          </p>
        </div>

        {/* Services Grid - Responsive 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <Card
                key={service._id || index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer group ${
                  hoveredIndex === index
                    ? 'scale-105 shadow-2xl border-2 border-primary'
                    : 'scale-100 shadow-lg border border-border hover:border-primary/50'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to gradient if image fails
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredIndex === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full">
                    <DollarSign className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">{service.price}</span>
                  </div>
                </div>
                
                {/* Animated Glow */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 animate-pulse" />
                )}

                <div className="relative p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-1 sm:space-y-2 pt-2">
                      {service.features.slice(0, 4).map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className="w-full mt-3 sm:mt-4 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm transition-all duration-300 group py-2"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Hover Arrow */}
                  {hoveredIndex === index && (
                    <div className="absolute bottom-4 right-4">
                      <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA - Responsive */}
        <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Need a Custom Solution?
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              We offer tailored business solutions to meet your specific requirements. Let's discuss your needs.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
