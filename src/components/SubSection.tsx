import React from 'react';
import { SubSection as SubSectionType } from '../types/documentation';
import { CodeBlock } from './CodeBlock';

interface SubSectionProps {
  subsection: SubSectionType;
  sectionNumber: number;
  subsectionNumber: number;
}

export function SubSection({ subsection, sectionNumber, subsectionNumber }: SubSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-[#fe4901] text-xl font-semibold mb-3">
        {sectionNumber}.{subsectionNumber} {subsection.title}
      </h3>
      <p className="text-gray-900 mb-4 leading-relaxed">
        {subsection.description}
      </p>
      {subsection.code && <CodeBlock code={subsection.code} />}
    </div>
  );
}