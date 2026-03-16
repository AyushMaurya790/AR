'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';

export default function DocumentChecklist() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const documents = [
    'Valid Passport (Scanned Copy)',
    'Passport Size Photographs',
    'Proof of Address (Utility Bill)',
    'Bank Statement (Last 3 Months)',
    'Business Plan Document',
    'CVs of All Partners/Directors',
    'Visa Copy (if applicable)',
    'PAN Card (for Indian Citizens)',
    'References from Previous Banks',
    'No Objection Certificate (NOC)',
  ];

  const toggleItem = (index: number) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const completionPercentage = Math.round((checkedItems.length / documents.length) * 100);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Document Preparation Checklist
          </h2>
          <p className="text-xl text-muted-foreground">
            Keep track of documents needed for your business setup
          </p>
        </div>

        <Card className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-foreground">Completion Progress</h3>
              <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Document List */}
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className={`w-full flex items-start p-4 rounded-lg border-2 transition-all ${
                  checkedItems.includes(index)
                    ? 'bg-primary/5 border-primary'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                <div className="flex-shrink-0 mr-4 mt-1">
                  {checkedItems.includes(index) ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <span
                  className={`text-left font-medium ${
                    checkedItems.includes(index)
                      ? 'text-foreground line-through'
                      : 'text-foreground'
                  }`}
                >
                  {doc}
                </span>
              </button>
            ))}
          </div>

          {/* Completion Message */}
          {completionPercentage === 100 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary text-center">
                ✅ All documents are ready! You can now proceed with your application.
              </p>
            </div>
          )}
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Need help organizing your documents? Our team can assist you.
          </p>
          <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
            Request Document Assistance
          </button>
        </div>
      </div>
    </section>
  );
}
