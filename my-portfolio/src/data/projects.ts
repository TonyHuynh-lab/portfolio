import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'You\'re looking at it! A portfolio website built entirely with React and TypeScript.',
    technologies: ['React', 'TypeScript'],
    imageUrl: '/public/Portfolio.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Person-Following Bot',
    description: 'A fully autnomous robot that follows people around. Enhanced the downstream performance of CV models for robotic applications.',
    technologies: ['Python', 'C++', 'ROS2', 'Computer Vision'],
    imageUrl: '/public/PersonFollowing.png',
    liveUrl: 'https://drive.google.com/file/d/1dSKFWFI0SmFzeZCHRtuD_dTGtHrMgjKP/view?usp=sharing',
    githubUrl: 'https://github.com/Team7-FRI',
  },
  {
    id: '3',
    title: 'Bookie - The Talkative Library Bot',
    description: 'A RAG-powered mobile bot that answers questions about library resources and assist users in real-time.',
    technologies: ['Python', 'C++', 'ROS2', 'SQL', 'Computer Vision', 'LLMs'],
    imageUrl: '/public/Bookie.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/LonghornBookie/Bookie',
  },
  {
    id: '4',
    title: 'Austin Bike Share ML',
    description: 'Predicted bike demand in my local area. Tested on 650,000+ records containing weather, time, and bike usage data.',
    technologies: ['Python', 'Data Analysis'],
    imageUrl: '/public/XGBoostPrediction.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/TonyHuynh-lab/Austin-Bike-Share-ML',
  },
];