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
      setServices(data.filter((s: any) => s.isActive));
    } catch (error) {
      console.error('Failed to load services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Comprehensive Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete business solutions from setup to operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Icon on Image */}
                  <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredIndex === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full">
                    <DollarSign className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">{service.price}</span>
                  </div>
                </div>
                
                {/* Animated Glow */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 animate-pulse" />
                )}

                <div className="relative p-6 space-y-3">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {service.features.slice(0, 4).map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-white transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

        {/* Bottom CTA */}
        <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="p-8 md:p-12 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Need a Custom Solution?
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer tailored business solutions to meet your specific requirements. Let's discuss your needs.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
