'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Shield, Zap, TrendingUp, Users, DollarSign, MapPin, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { fetchFeatures } from '@/lib/api';

// Icon mapping
const iconMap: any = {
  Globe, Shield, Zap, TrendingUp, Users, DollarSign, MapPin, Award, CheckCircle, ArrowRight, Sparkles
};

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [features, setFeatures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    try {
      const data = await fetchFeatures();
      setFeatures(data.filter((f: any) => f.isActive));
    } catch (error) {
      console.error('Failed to load features:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading features...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">World's Best Business Destination</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Setup Business in{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              UAE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the benefits of choosing UAE for your next venture
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            return (
              <Card
                key={feature._id || index}
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
                  {feature.image ? (
                    <Image
                      src={feature.image}
                      alt={feature.title}
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

                  {/* Stats Badge */}
                  <div className={`absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full`}>
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">Feature {index + 1}</span>
                  </div>
                </div>
                
                {/* Animated Glow */}
                {hoveredIndex === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 animate-pulse`} />
                )}

                <div className="relative p-6 space-y-3">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  {hoveredIndex === index && (
                    <div className="absolute bottom-4 right-4">
                      <ArrowRight className="w-6 h-6 text-primary animate-bounce-horizontal" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <Card className="overflow-hidden border-2 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  5000+
                </div>
                <p className="text-sm text-muted-foreground">Businesses Setup</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  99.8%
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  7 Days
                </div>
                <p className="text-sm text-muted-foreground">Average Setup Time</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">Expert Support</p>
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
