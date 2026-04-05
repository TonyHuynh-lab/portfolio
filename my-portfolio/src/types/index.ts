export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'SWE' | 'AI/ML';
  proficiency: 1 | 2 | 3 | 4 | 5;
  description?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  id: string;
  text: string;
  url: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startYear: string;
  endYear: string;
  description?: string;
  logoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  technologies?: string[];
  companyLogo?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}