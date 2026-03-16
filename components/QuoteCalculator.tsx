'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function QuoteCalculator() {
  const [selectedPackage, setSelectedPackage] = useState('ecommerce');
  const [visaCount, setVisaCount] = useState(1);
  const [bankAccount, setBankAccount] = useState(true);
  const [taxConsultation, setTaxConsultation] = useState(false);

  const packages = {
    ecommerce: { name: 'E-Commerce', price: 118900 },
    trading: { name: 'General Trading + E-Commerce', price: 268000 },
    premium: { name: 'Premium Business Setup', price: 350000 },
  };

  const basePrice = packages[selectedPackage as keyof typeof packages].price;
  const visaCost = (visaCount - 1) * 15000;
  const bankAccountCost = bankAccount ? 0 : 5000;
  const taxConsultationCost = taxConsultation ? 25000 : 0;

  const totalPrice = basePrice + visaCost + bankAccountCost + taxConsultationCost;

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your Quote
          </h2>
          <p className="text-xl text-muted-foreground">
            Customize your package and see the exact price
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Options */}
          <Card className="p-8">
            <div className="space-y-8">
              {/* Package Selection */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Select Package</h3>
                <div className="space-y-3">
                  {Object.entries(packages).map(([key, value]) => (
                    <label key={key} className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                      <input
                        type="radio"
                        name="package"
                        value={key}
                        checked={selectedPackage === key}
                        onChange={() => setSelectedPackage(key)}
                        className="mr-3 w-4 h-4 cursor-pointer"
                      />
                      <span className="flex-1 font-medium text-foreground">{value.name}</span>
                      <span className="text-primary font-bold">{value.price.toLocaleString()} INR</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Visa Count */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Additional Visas</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setVisaCount(Math.max(1, visaCount - 1))}
                    className="px-3 py-2 border border-border rounded hover:bg-accent"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-primary w-12 text-center">{visaCount}</span>
                  <button
                    onClick={() => setVisaCount(Math.min(10, visaCount + 1))}
                    className="px-3 py-2 border border-border rounded hover:bg-accent"
                  >
                    +
                  </button>
                  <span className="text-sm text-muted-foreground ml-4">15,000 INR per visa</span>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Add-ons</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                    <input
                      type="checkbox"
                      checked={bankAccount}
                      onChange={(e) => setBankAccount(e.target.checked)}
                      className="mr-3"
                    />
                    <span className="flex-1 text-foreground">Free Bank Account Setup</span>
                  </label>
                  <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                    <input
                      type="checkbox"
                      checked={taxConsultation}
                      onChange={(e) => setTaxConsultation(e.target.checked)}
                      className="mr-3"
                    />
                    <span className="flex-1 text-foreground">Tax Consultation</span>
                    <span className="text-primary font-semibold">+25,000 INR</span>
                  </label>
                </div>
              </div>
            </div>
          </Card>

          {/* Price Summary */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Price Breakdown</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Base Package</span>
                  <span className="font-semibold">{basePrice.toLocaleString()} INR</span>
                </div>
                {visaCount > 1 && (
                  <div className="flex justify-between text-foreground">
                    <span>Additional Visas ({visaCount - 1})</span>
                    <span className="font-semibold">{visaCost.toLocaleString()} INR</span>
                  </div>
                )}
                {taxConsultation && (
                  <div className="flex justify-between text-foreground">
                    <span>Tax Consultation</span>
                    <span className="font-semibold">{taxConsultationCost.toLocaleString()} INR</span>
                  </div>
                )}
                <div className="border-t border-border pt-4 flex justify-between text-lg">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-primary text-2xl">{totalPrice.toLocaleString()} INR</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-lg">
              Request Quote
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
