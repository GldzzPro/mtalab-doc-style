import React from 'react';
import { SubSubSection as SubSubSectionType } from '../types/documentation';
import { CodeBlock } from './CodeBlock';
import { OptionsList } from './OptionsList';

interface SubSubSectionProps {
  subSubSection: SubSubSectionType;
}

export function SubSubSection({ subSubSection }: SubSubSectionProps) {
  return (
    <div className="mb-6">
      <h4 className="text-[#005f9f] text-lg font-semibold mb-2">
        {subSubSection.title}
      </h4>
      <p className="text-gray-900 mb-3 leading-relaxed">
        {subSubSection.description}
      </p>
      {subSubSection.optionsList && (
        <OptionsList optionsList={subSubSection.optionsList} />
      )}
      {subSubSection.code && <CodeBlock code={subSubSection.code} />}
    </div>
  );
}