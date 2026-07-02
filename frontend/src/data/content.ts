import type { LucideIcon } from 'lucide-react'
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Headphones,
  Palette,
  Shield,
  Smartphone,
  TestTube2,
} from 'lucide-react'

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Hire Developers', href: '/hire-developers' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Technology Experts' },
  { value: '20+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Custom enterprise software built for performance, security, and long-term scalability.',
    items: [
      'Custom Software Development',
      'Enterprise Applications',
      'CRM Development',
      'ERP Solutions',
      'SaaS Platforms',
      'Internal Business Tools',
      'Legacy System Modernization',
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance web platforms that elevate your brand and streamline operations.',
    items: [
      'Corporate Websites',
      'Business Portals',
      'Custom Web Applications',
      'Admin Dashboards',
      'Customer Portals',
      'Marketplace Platforms',
      'Progressive Web Apps',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile solutions for customers and internal teams.',
    items: [
      'Android',
      'iOS',
      'Flutter',
      'React Native',
      'Enterprise Mobile Applications',
      'Customer Apps',
      'Employee Productivity Apps',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Human-centered design that drives engagement, clarity, and conversion.',
    items: [
      'User Research',
      'Wireframing',
      'UI Design',
      'UX Design',
      'Interactive Prototypes',
      'Design Systems',
      'Product Branding',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Cloud-native infrastructure with automated pipelines and resilient deployments.',
    items: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'Infrastructure Automation',
      'Cloud Migration',
    ],
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence & Automation',
    description:
      'Intelligent automation and AI solutions that unlock efficiency and insight.',
    items: [
      'AI Chatbots',
      'Business Automation',
      'Machine Learning',
      'Generative AI',
      'Computer Vision',
      'NLP',
      'Predictive Analytics',
    ],
  },
  {
    icon: Database,
    title: 'Data Engineering & Analytics',
    description:
      'Turn raw data into actionable intelligence with modern data pipelines.',
    items: [
      'Business Intelligence',
      'Data Warehousing',
      'Dashboards',
      'Data Visualization',
      'ETL Pipelines',
      'Big Data Solutions',
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description:
      'Protect your digital assets with proactive security and compliance support.',
    items: [
      'Security Audits',
      'Penetration Testing',
      'Network Security',
      'Endpoint Security',
      'Compliance Support',
      'Security Monitoring',
    ],
  },
  {
    icon: TestTube2,
    title: 'Quality Assurance & Testing',
    description:
      'Rigorous testing strategies that ensure reliability at every release.',
    items: [
      'Manual Testing',
      'Automation Testing',
      'Performance Testing',
      'Security Testing',
      'API Testing',
      'Mobile Testing',
    ],
  },

]

export const developers = [
  'Full Stack Developers',
  'Frontend Developers',
  'Backend Developers',
  'Mobile App Developers',
  'Flutter Developers',
  'React Developers',
  'MERN Stack Developers',
  'Python Developers',
  'Java Developers',
  '.NET Developers',
  'DevOps Engineers',
  'Cloud Architects',
  'UI/UX Designers',
  'Graphic Designers',
  'QA Engineers',
  'Data Engineers',
  'AI Engineers',
  'Blockchain Developers',
  'Project Managers',
  'Business Analysts',
  'Product Managers',
]

export const hiringModels = [
  {
    title: 'Dedicated Resource',
    description: 'Hire professionals exclusively for your project.',
    idealFor: ['Long-term Projects', 'Product Development', 'Team Extension'],
  },
  {
    title: 'Dedicated Team',
    description: 'Build a complete managed development team.',
    idealFor: ['Startups', 'Enterprises', 'Product Companies'],
  },
  {
    title: 'Project-Based Engagement',
    description: 'End-to-end software development with defined scope and milestones.',
    idealFor: ['MVP Development', 'Enterprise Software', 'Digital Transformation'],
  },
  {
    title: 'Staff Augmentation',
    description: 'Expand your existing technology team quickly.',
    idealFor: ['Skill Gaps', 'Faster Delivery', 'Temporary Scaling'],
  },
]

export const industries = [
  'Manufacturing',
  'Healthcare',
  'Education',
  'Retail',
  'E-commerce',
  'Real Estate',
  'Logistics',
  'Finance',
  'Banking',
  'Insurance',
  'Hospitality',
  'Legal Services',
  'Government',
  'Construction',
  'Automotive',
  'Agriculture',
  'Travel & Tourism',
  'Media & Entertainment',
  'Human Resources',
  'Energy & Utilities',
]

export const whyChoose = [
  'Experienced Technology Experts',
  'Enterprise-Grade Solutions',
  'Flexible Engagement Models',
  'Agile Development Process',
  'Transparent Communication',
  'NDA & Data Security',
  'Fast Project Delivery',
  'Scalable Teams',
]

export const processSteps = [
  'Consultation',
  'Requirement Analysis',
  'Planning',
  'UI/UX Design',
  'Development',
  'Testing',
  'Deployment',
  'Ongoing Support & Maintenance',
]

export const testimonials = [
  {
    quote:
      'Diyaratech built the entire Winkget platform from the ground up — from web to mobile. Their team understood our vision perfectly and delivered a polished, scalable product that our users love. Truly a reliable technology partner.',
    name: 'Utkarsh',
    role: 'Founder',
    company: 'Winkget',
    rating: 5,
  },
  {
    quote:
      'Working with Diyaratech on Pstatistics Tutorials was a seamless experience. They developed a robust, user-friendly educational platform with excellent attention to detail. Their professionalism and timely delivery exceeded all expectations.',
    name: 'Dr. Pankaj Kumar',
    role: 'Founder',
    company: 'Pstatistics Tutorials',
    rating: 5,
  },
  {
    quote:
      'Diyaratech transformed our idea into a fully functional platform for WensWork. Their dedicated team was responsive, technically skilled, and always went the extra mile. I highly recommend them for any serious development project.',
    name: 'Wen Moreno',
    role: 'Founder',
    company: 'WensWork',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'What is your hiring process?',
    answer:
      'We begin with a consultation to understand your requirements, then shortlist candidates matching your tech stack and culture. You interview and approve professionals before onboarding. Most placements are completed within 5–10 business days.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Pricing depends on engagement model, team size, expertise level, and project duration. We offer transparent hourly, monthly, and fixed-price models with no hidden fees. Contact us for a customized quote.',
  },
  {
    question: 'What is the typical project timeline?',
    answer:
      'Timelines vary by scope. MVPs typically take 8–16 weeks, while enterprise solutions may span several months. We provide detailed milestones and regular progress updates throughout.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We sign NDAs before any project discussion and enforce strict data security protocols. Your intellectual property and confidential information are fully protected.',
  },
  {
    question: 'What support do you provide after launch?',
    answer:
      'We offer ongoing maintenance, monitoring, bug fixes, performance optimization, and feature enhancements. Support plans are flexible and tailored to your operational needs.',
  },
  {
    question: 'What payment models do you accept?',
    answer:
      'We support milestone-based payments, monthly retainers, and hourly billing. Payment terms are agreed upfront and designed to align with your project cash flow.',
  },
  {
    question: 'How do you handle communication?',
    answer:
      'We use your preferred tools — Slack, Teams, Jira, or email — with daily standups, weekly reviews, and dedicated project managers ensuring transparent, real-time collaboration.',
  },
  {
    question: 'Can I scale my team up or down?',
    answer:
      'Absolutely. Our staff augmentation and dedicated team models are designed for flexibility. You can add or reduce resources with reasonable notice as your project evolves.',
  },
]

export const contactInfo = {
  phone: '+91 6204549968',
  email: 'diyaratech@gmail.com',
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM IST',
  headOffice: '806, Aggarwal Corporate Heights, NSP, Pitampura, New Delhi',
  branchOffice: '6A Swastik Trade Center, Gandhi Gali, Gorakhpur, UP 273001',
}

export const serviceOptions = [
  'Software Development',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud & DevOps',
  'AI & Automation',
  'Dedicated Developers',
  'Other',
]

export const budgetOptions = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹10,00,000',
  '₹10,00,000 – ₹25,00,000',
  '₹25,00,000+',
]

export const footerLinks = {
  quick: navLinks,
  services: services.slice(0, 6).map((s) => ({
    label: s.title,
    href: `/#service-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  })),
  hire: [
    { label: 'Dedicated Developers', href: '/hire-developers' },
    { label: 'Dedicated Teams', href: '/hire-developers' },
    { label: 'Staff Augmentation', href: '/hire-developers' },
    { label: 'Project-Based', href: '/hire-developers' },
  ],
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export const partners = [
  { name: 'Winkget', logo: 'Winkget', image: 'winkgetlogo.png' },
  { name: 'Pstatistics Tutorials', logo: 'Pstatistics' },
  { name: 'Winkget Express', logo: 'Winkget Express', image: 'winkgetlogo.png' },
  { name: 'WensWork', logo: 'WensWork', image: 'wenswork.png' },
]
