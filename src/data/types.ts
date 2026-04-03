export interface ContentBlock {
  heading?: string;
  paragraphs: string[];
  code?: string;
  output?: string;
}

export interface TopicSection {
  id: string;
  title: string;
  description: string;
  formula?: string;
  details: string[];
  code?: string;
  contentSections?: ContentBlock[];
  tags?: string[];
  level?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  keyConcepts: { title: string; description: string }[];
  sections: TopicSection[];
}
