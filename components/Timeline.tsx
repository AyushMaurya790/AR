'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Sparkles, Clock, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Timeline() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Choose Your Business Activity',
      description: 'Select the right business activity and free zone based on your industry. Our experts help you choose the best option.',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      features: [
        '500+ Business Activities',
        'Expert Consultation',
        'Free Zone Comparison',
      ],
      duration: '1-2 Days',
      successRate: '100%',
    },
    {
      step: 2,
      title: 'Get Your Business License',
      description: 'We handle all documentation and regulatory requirements. Your license is processed and approved quickly.',
      icon: '📜',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
      features: [
        'Document Preparation',
        'Government Approval',
        'Trade License Issued',
      ],
      duration: '3-5 Days',
      successRate: '99.8%',
    },
    {
      step: 3,
      title: 'Open Bank Account',
      description: 'Complete your setup with a corporate bank account. Access banking services and start operations immediately.',
      icon: '🏦',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
      features: [
        'Corporate Account Setup',
        'Multi-Currency Support',
        'Online Banking Access',
      ],
      duration: '2-3 Days',
      successRate: '98%',
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Simple & Fast Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            You Are Just{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              3 Easy Steps Away
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To Start Your Business in UAE
          </p>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {steps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === step.step ? 'w-12 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to step ${step.step}`}
              />
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveStep(item.step)}
              className={`relative overflow-hidden transition-all duration-500 cursor-pointer border-2 ${
                hoveredCard === index || activeStep === item.step
                  ? 'scale-105 shadow-2xl border-primary'
                  : 'scale-100 shadow-lg border-border hover:border-primary/50'
              }`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Step Number Badge on Image */}
                <div className={`absolute top-4 left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg transform transition-transform duration-300 ${
                  hoveredCard === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                }`}>
                  {item.step}
                </div>

                {/* Icon on Image */}
                <div className="absolute top-4 right-4 text-4xl transform transition-transform duration-300 hover:scale-125 drop-shadow-lg">
                  {item.icon}
                </div>
              </div>

              {/* Animated Border Glow */}
              {(hoveredCard === index || activeStep === item.step) && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 animate-pulse`} />
              )}

              <div className="relative p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-semibold text-foreground">{item.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Success</p>
                      <p className="text-sm font-semibold text-foreground">{item.successRate}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                {hoveredCard === index && (
                  <div className="absolute bottom-4 right-4">
                    <ArrowRight className="w-6 h-6 text-primary animate-bounce-horizontal" />
                  </div>
                )}
              </div>

              {/* Step Connector Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent z-20" />
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative p-8 md:p-12 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  100% Success Guarantee
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Get Started?
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join 5,000+ successful businesses that trusted us with their UAE setup. 
                Get your free consultation today and start your journey in just 7 days!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all duration-300"
                >
                  Download Process Guide
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>7-Day Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
      `}</style>
    </section>
  );
}
