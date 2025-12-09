export interface Project {
  id: string;
  name: string;
  client: string;
  year: string;
  service: string;
  status: 'LIVE' | 'ARCHIVED' | 'WIP';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  CAPABILITIES = 'capabilities',
  MANIFESTO = 'manifesto',
  PROJECTS = 'projects',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact',
  AI = 'ai'
}