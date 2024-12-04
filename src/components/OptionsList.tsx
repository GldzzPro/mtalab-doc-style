import React from 'react';
import { OptionsList as OptionsListType } from '../types/documentation';

interface OptionsListProps {
  optionsList: OptionsListType;
}

export function OptionsList({ optionsList }: OptionsListProps) {
  const ListComponent = optionsList.type === 'ordered' ? 'ol' : 'ul';
  const listClassName = optionsList.type === 'ordered' 
    ? 'list-decimal' 
    : 'list-disc';

  return (
    <ListComponent className={`${listClassName} ml-6 mb-4 space-y-1 text-gray-900`}>
      {optionsList.options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ListComponent>
  );
}