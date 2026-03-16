'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building2, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

const BUSINESS_LOCATIONS = [
  {
    id: 1,
    name: 'Business Bay',
    description: 'Premier business hub with modern infrastructure',
    coordinates: '25.1853,55.2708',
    features: ['Office Spaces', 'Free Zone', 'Banking'],
    color: '#0066CC',
  },
  {
    id: 2,
    name: 'Downtown Dubai',
    description: 'Financial and commercial district',
    coordinates: '25.1972,55.2744',
    features: ['Financial Hub', 'Retail', 'Hotels'],
    color: '#00A8E8',
  },
  {
    id: 3,
    name: 'DIFC',
    description: 'Dubai International Financial Centre',
    coordinates: '25.1971,55.2697',
    features: ['Financial Services', 'Offices', 'Regulations'],
    color: '#005FCC',
  },
  {
    id: 4,
    name: 'Dubai Silicon Oasis',
    description: 'Tech and innovation hub',
    coordinates: '25.1503,55.3774',
    features: ['Tech Parks', 'IT Services', 'Startups'],
    color: '#0088FF',
  },
  {
    id: 5,
    name: 'Jebel Ali Free Zone',
    description: 'Industrial and logistics hub',
    coordinates: '25.0547,55.1044',
    features: ['Industrial', 'Logistics', 'Manufacturing'],
    color: '#1E7FCC',
  },
  {
    id: 6,
    name: 'Dubai Investment Park',
    description: 'Dedicated business development zone',
    coordinates: '25.1097,55.2353',
    features: ['Light Industry', 'Warehousing', 'Trading'],
    color: '#0055BB',
  },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(BUSINESS_LOCATIONS[0]);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const handleOpenMaps = (coords: string) => {
    const [lat, lng] = coords.split(',');
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prime Business Locations in UAE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our key business hubs across Dubai and UAE with world-class infrastructure and complete business support
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Locations List */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3 max-h-[700px] overflow-y-auto pr-2">
              <h3 className="font-bold text-lg text-foreground mb-4">Our Offices</h3>
              {BUSINESS_LOCATIONS.map((location) => (
                <Card
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`p-4 cursor-pointer transition-all duration-300 transform ${
                    selectedLocation.id === location.id
                      ? 'bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary shadow-xl scale-105'
                      : hoveredLocation === location.id
                      ? 'border-2 border-primary/50 shadow-lg scale-102'
                      : 'border border-border hover:border-primary/30 hover:shadow-md'
                  }`}
                  style={{
                    borderLeftWidth: selectedLocation.id === location.id ? '4px' : '2px',
                    borderLeftColor: location.color,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 shadow-md ${
                        selectedLocation.id === location.id ? 'ring-2 ring-offset-2' : ''
                      }`}
                      style={{ 
                        backgroundColor: location.color,
                        ringColor: location.color 
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground text-sm leading-tight mb-1">
                        {location.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {location.description}
                      </p>
                      <div className="flex gap-1 flex-wrap">
                        {location.features.slice(0, 2).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedLocation.id === location.id && (
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4">
              {/* Main Map Container */}
              <Card className="overflow-hidden shadow-2xl border-2 border-primary/20 h-[600px] relative">
                <div className="relative w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.1649265395707!2d55.27182!3d25.182399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d7c3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2sBusiness%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1710429000000"
                    title="Business Bay Dubai - AR Consultancy"
                  />
                  
                  {/* Map Badge - Open in Maps Button */}
                  <div className="absolute top-4 left-4 bg-white/98 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:shadow-xl transition-shadow cursor-pointer border border-blue-200">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <a 
                      href="https://www.google.com/maps?ll=25.182399,55.27182&z=16&t=m&hl=en&gl=AE&mapclient=embed&q=Business+Bay+Dubai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Open in Maps
                    </a>
                  </div>

                  {/* Map Label */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-gray-200">
                    <span className="text-xs font-semibold text-gray-700">Business Bay Dubai</span>
                  </div>
                </div>
              </Card>

              {/* Location Details Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-5 h-5 rounded-full shadow-md ring-2 ring-white"
                        style={{ backgroundColor: selectedLocation.color }}
                      />
                      <h3 className="text-2xl font-bold text-foreground">{selectedLocation.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 font-medium">{selectedLocation.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/60 backdrop-blur-sm text-primary rounded-full text-sm font-semibold border border-primary/20"
                        >
                          <Building2 className="w-4 h-4" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleOpenMaps(selectedLocation.coordinates)}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Maps
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
