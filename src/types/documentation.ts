export interface SubSection {
  title: string;
  description: string;
  code?: string;
}

export interface Section {
  sectionTitle: string;
  subsections: SubSection[];
}

export type Documentation = Section[];