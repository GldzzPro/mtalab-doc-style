import React from 'react';
import { Documentation as DocumentationType } from '../types/documentation';
import { Section } from './Section';

interface DocumentationProps {
  data: DocumentationType;
}

export function Documentation({ data }: DocumentationProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {data.map((section, index) => (
        <Section 
          key={index} 
          section={section} 
          sectionNumber={index + 1}
        />
      ))}
    </div>
  );
}