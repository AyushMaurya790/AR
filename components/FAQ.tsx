'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react';

const dummyFAQs = [
  {
    id: 1,
    question: 'How long does it take to setup a business in UAE?',
    answer: 'The business setup process typically takes 3-7 working days for free zones and 7-14 days for mainland companies, depending on the business activity and documentation completeness.',
    isActive: true
  },
  {
    id: 2,
    question: 'What is the minimum capital requirement?',
    answer: 'For free zone companies, there is no minimum capital requirement. For mainland companies, the minimum capital varies by emirate and business activity, typically starting from AED 50,000.',
    isActive: true
  },
  {
    id: 3,
    question: 'Do I need a local sponsor for my business?',
    answer: 'No local sponsor is required for free zone companies. For mainland companies, 100% foreign ownership is now allowed in most business activities under the new UAE commercial companies law.',
    isActive: true
  },
  {
    id: 4,
    question: 'What are the tax benefits in UAE?',
    answer: 'UAE offers 0% corporate tax for most free zone companies, no personal income tax, no capital gains tax, and no withholding tax. Mainland companies may be subject to 9% corporate tax on profits exceeding AED 375,000.',
    isActive: true
  },
  {
    id: 5,
    question: 'Can I get a residence visa with my business?',
    answer: 'Yes, business owners can obtain residence visas for themselves and their families. The number of visas depends on your office space and business activity. Golden visas (5-10 years) are also available for investors.',
    isActive: true
  },
  {
    id: 6,
    question: 'What documents are required for business setup?',
    answer: 'Basic documents include passport copies, visa copies, business plan, NOC from current sponsor (if applicable), and proof of address. Additional documents may be required based on your business activity.',
    isActive: true
  },
  {
    id: 7,
    question: 'Can I operate my business from home?',
    answer: 'Some free zones offer flexi-desk and virtual office options that allow you to operate without a physical office. However, certain business activities require a dedicated office space.',
    isActive: true
  },
  {
    id: 8,
    question: 'What is the difference between free zone and mainland?',
    answer: 'Free zone companies offer 100% foreign ownership, tax exemptions, and easy setup but can only trade within UAE with restrictions. Mainland companies can trade anywhere in UAE and internationally without restrictions.',
    isActive: true
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return dummyFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Find answers to common questions about business setup in UAE
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 relative">
          <Search className="absolute left-3 sm:left-4 top-3 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 sm:pl-12 py-5 sm:py-6 text-base sm:text-lg"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Card
                key={faq.id}
                className="overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-4 sm:p-6 flex justify-between items-start hover:bg-accent/5 transition-colors text-left"
                >
                  <span className="font-semibold text-foreground pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-base sm:text-lg">
                No FAQs match your search. Please try different keywords.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Didn't find your answer?
          </p>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors text-sm sm:text-base">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
