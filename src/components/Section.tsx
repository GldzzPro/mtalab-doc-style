import React from 'react';
import { Section as SectionType } from '../types/documentation';
import { SubSection } from './SubSection';

interface SectionProps {
  section: SectionType;
  sectionNumber: number;
}

export function Section({ section, sectionNumber }: SectionProps) {
  return (
    <div className="mb-12">
      <div className="bg-[#005f9f] rounded-lg px-6 py-4 mb-6">
        <h2 className="text-white text-2xl font-bold">
          {section.sectionTitle}
        </h2>
      </div>
      <div className="space-y-8">
        {section.subsections.map((subsection, index) => (
          <SubSection 
            key={index} 
            subsection={subsection}
          />
        ))}
      </div>
    </div>
  );
}