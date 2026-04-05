import { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: '1',
    position: 'Forward Deployed Engineer',
    company: 'FieldAI',
    startDate: 'Jan 2026',
    endDate: 'Present',
    location: 'Austin, TX',
    description: 'Deploying robo dogs for Fortune Global 500 companies! 🐕',
    technologies: ['Python', 'ROS/ROS2', '3D Computer Vision', 'AI/ML'],
    companyLogo: '/public/fieldAI.png'
  },
  {
    id: '2',
    position: 'Undergraduate Researcher',
    company: 'Living with Robots Lab @ UT Austin',
    startDate: 'Jan 2025',
    endDate: 'Dec 2025',
    location: 'Austin, TX',
    description: 'Conducted research on human-robot interaction (HRI) and robotic perception. 👀',
    technologies: ['Python', 'PyTorch', 'C++', 'SQLite','ROS2', '3D Computer Vision', 'NLP'],
    companyLogo: '/public/UT_Austin.png'
  },
  {
    id: '3',
    position: 'AI & Robotics Intern',
    company: 'Bechtel Corporation',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    location: 'Sugar Land, TX',
    description: 'Built and deployed autonomous solutions for infrastructure projects. 🚧',
    technologies: ['Python', 'ESP32/IoT', '3D Computer Vision', 'AI/ML', 'Power Automate', 'SharePoint'],
    companyLogo: '/public/Bechtel.png'
  }, 
  {
    id: '4',
    position: 'Research Assistant',
    company: 'The Cambronne Lab @ UT Austin',
    startDate: 'Sep 2024',
    endDate: 'Apr 2025',
    location: 'Austin, TX',
    description: 'Fine-tuned large language models (LLMs) for biomolecular applications. 🧬',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'Transformers', 'AI/ML', 'Data Analysis'],
    companyLogo: '/public/UT_Austin.png'
  } 
];