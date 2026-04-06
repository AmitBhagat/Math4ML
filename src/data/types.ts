export interface ContentBlock {
  heading?: string;
  paragraphs?: string[];
  content?: string;
  html?: string;
  code?: string;
  output?: string;
  visualizer?: 'matrix';
}

export interface TopicSection {
  id: string;
  title: string;
  description: string;
  formula?: string;
  details?: string[];
  content?: string;
  html?: string;
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
