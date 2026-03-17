'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Shield, Zap, TrendingUp, Users, DollarSign, MapPin, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const dummyFeatures = [
  {
    id: 1,
    title: '0% Corporate Tax',
    description: 'Enjoy complete tax exemption on corporate income in UAE free zones. No personal income tax, capital gains tax, or withholding tax.',
    icon: 'DollarSign',
    image: '/hero-1.jpg'
  },
  {
    id: 2,
    title: '100% Foreign Ownership',
    description: 'Full business ownership without local sponsor requirements. Complete control over your company and profits.',
    icon: 'Award',
    image: '/hero-2.jpg'
  },
  {
    id: 3,
    title: 'Strategic Location',
    description: 'Gateway to Middle East, Africa, and Asia markets. Access to 2.5 billion consumers within 4-hour flight radius.',
    icon: 'Globe',
    image: '/hero-3.jpg'
  },
  {
    id: 4,
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art facilities, modern transportation, and advanced telecommunications infrastructure.',
    icon: 'Zap',
    image: '/hero-4.jpg'
  },
  {
    id: 5,
    title: 'Business-Friendly Environment',
    description: 'Streamlined processes, minimal bureaucracy, and supportive government policies for business growth.',
    icon: 'TrendingUp',
    image: '/hero-5.jpg'
  },
  {
    id: 6,
    title: 'Secure & Stable',
    description: 'Political stability, strong legal framework, and robust security measures ensure safe business operations.',
    icon: 'Shield',
    image: '/hero-1.jpg'
  }
];

const iconMap: any = {
  Globe, Shield, Zap, TrendingUp, Users, DollarSign, MapPin, Award, CheckCircle, ArrowRight, Sparkles
};

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">World's Best Business Destination</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            Why Setup Business in{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              UAE
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Discover the benefits of choosing UAE for your next venture
          </p>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {dummyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            return (
              <Card
                key={feature.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer group ${
                  hoveredIndex === index
                    ? 'scale-100 sm:scale-105 shadow-2xl border-2 border-primary'
                    : 'scale-100 shadow-lg border border-border hover:border-primary/50'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Icon on Image */}
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredIndex === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">Feature {index + 1}</span>
                  </div>
                </div>
                
                {/* Animated Glow */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 animate-pulse" />
                )}

                <div className="relative p-4 sm:p-6 space-y-2 sm:space-y-3">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  {hoveredIndex === index && (
                    <div className="absolute bottom-4 right-4 hidden sm:block">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-bounce-horizontal" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats Section - Responsive */}
        <Card className="overflow-hidden border-2 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="relative p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  5000+
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Businesses Setup</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  99.8%
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  7 Days
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Average Setup Time</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
      `}</style>
    </section>
  );
}
