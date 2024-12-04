export interface OptionsList {
  type: 'ordered' | 'unordered';
  options: string[];
}

export interface BaseSection {
  title: string;
  description: string;
  code?: string;
  optionsList?: OptionsList;
}

export interface SubSubSection extends BaseSection {}

export interface SubSection extends BaseSection {
  subsections?: SubSubSection[];
}

export interface Section {
  sectionTitle: string;
  subsections: SubSection[];
}

export type Documentation = Section[];