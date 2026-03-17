'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { fetchTestimonials } from '@/lib/api';
import Image from 'next/image';

// Dummy testimonials data - 6 professional testimonials
const DUMMY_TESTIMONIALS = [
  {
    _id: '1',
    name: 'Ahmed Al Mansouri',
    role: 'CEO',
    company: 'Tech Solutions LLC',
    text: 'The team made our business setup process incredibly smooth. They handled all the legalities and documentation with professionalism. We were operational within just 7 days!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    isActive: true
  },
  {
    _id: '2',
    name: 'Fatima Al Noor',
    role: 'Founder',
    company: 'Digital Marketing Pro',
    text: 'Outstanding service! Their accounting compliance support has saved us thousands of dirham in potential penalties. Highly recommended for any startup.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    isActive: true
  },
  {
    _id: '3',
    name: 'Mohammed Asif',
    role: 'Business Owner',
    company: 'Import Export Co',
    text: 'From visa processing to bank account opening, every detail was handled with excellence. Their expertise in UAE regulations is unmatched. Great investment!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    isActive: true
  },
  {
    _id: '4',
    name: 'Layla Khalid',
    role: 'Managing Director',
    company: 'Fashion & Retail Ltd',
    text: 'After searching for months, this team provided the best consultation and support. They understand the complexities of business setup better than anyone.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    isActive: true
  },
  {
    _id: '5',
    name: 'Hassan Al Qadhi',
    role: 'Operations Manager',
    company: 'Trading Enterprise',
    text: 'Their legal contract review service protected us from potential disputes. The attention to detail and professionalism is commendable. Worth every penny!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    isActive: true
  },
  {
    _id: '6',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'International Consulting',
    text: 'Exceptional support for our expansion into UAE. The team went above and beyond to ensure all compliance requirements were met. Highly professional team!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    isActive: true
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const loadTestimonials = async () => {
    try {
      const data = await fetchTestimonials();
      const validTestimonials = data.filter((t: any) => t.isActive);
      setTestimonials(validTestimonials.length > 0 ? validTestimonials : DUMMY_TESTIMONIALS);
    } catch (error) {
      console.error('Failed to load testimonials:', error);
      setTestimonials(DUMMY_TESTIMONIALS);
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Join hundreds of satisfied entrepreneurs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ minWidth: '100%' }}
                  >
                    <Card className="p-6 sm:p-8 md:p-12 mx-auto max-w-3xl">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 sm:w-5 h-4 sm:h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-base sm:text-lg md:text-lg text-foreground mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex-shrink-0">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-foreground text-sm sm:text-base truncate">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground text-xs sm:text-sm truncate">
                            {testimonial.role || testimonial.company}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
