import React from 'react';
import { SubSection as SubSectionType } from '../types/documentation';
import { CodeBlock } from './CodeBlock';
import { SubSubSection } from './SubSubSection';
import { OptionsList } from './OptionsList';

interface SubSectionProps {
  subsection: SubSectionType;
}

export function SubSection({ subsection }: SubSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-[#fe4901] text-xl font-semibold mb-3">
        {subsection.title}
      </h3>
      <p className="text-gray-900 mb-4 leading-relaxed">
        {subsection.description}
      </p>
      {subsection.optionsList && (
        <OptionsList optionsList={subsection.optionsList} />
      )}
      {subsection.code && <CodeBlock code={subsection.code} />}
      
      {subsection.subsections && (
        <div className="mt-6 space-y-6">
          {subsection.subsections.map((subSubSection, index) => (
            <SubSubSection
              key={index}
              subSubSection={subSubSection}
            />
          ))}
        </div>
      )}
    </div>
  );
}