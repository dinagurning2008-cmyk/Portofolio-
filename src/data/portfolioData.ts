export const PORTRAIT_IMAGE_URL = '/assets/aistudio/dinaaa_69378d30.jpg';

export interface ExperienceItem {
  id: string;
  period: string;
  badge?: string;
  badgeVariant?: 'pink' | 'dark';
  title: string;
  organization: string;
  description: string;
  fullWidth?: boolean;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pln-bonded',
    period: '2026 – PRESENT',
    badge: 'CURRENT',
    badgeVariant: 'pink',
    title: "PLN Group's Bonded Program Student",
    organization: 'Institut Teknologi PLN & PLN Group',
    description:
      "Selected student in the prestigious PLN Group Bonded Program, preparing for future professional contributions to Indonesia's electrical power and digital energy ecosystem through rigorous academic training, analytical problem-solving, and character development.",
  },
  {
    id: 'ig-manager',
    period: '2023 & 2025',
    title: 'Instagram Account Manager — Community & Event',
    organization: 'Social Media & Content Coordinator',
    description:
      'Managed visual feeds, curated informational content, and maintained high audience engagement across community and committee Instagram channels using Canva and strategic visual storytelling.',
  },
  {
    id: 'doc-committee',
    period: '2025',
    title: 'Documentation Committee — High School Graduation',
    organization: 'SMAN 1 GSB',
    description:
      'Captured ceremonial milestones, directed photography coverage, and curated visual archives for the cohort graduation event documentation package.',
  },
  {
    id: 'christmas-core',
    period: '2023 & 2024',
    title: 'Core Committee Member — Youth Christmas Celebration',
    organization: 'HKBP Parapat Youth',
    description:
      'Coordinated logistics, program scheduling, and cross-functional team execution for two consecutive annual youth celebrations and community gatherings.',
  },
  {
    id: 'osn-physics',
    period: '2023',
    badge: 'OLYMPIAD',
    badgeVariant: 'dark',
    title: 'OSN Physics Participant (Regency Level)',
    organization: 'Olimpiade Sains Nasional (OSN) Fisika',
    description:
      'Represented high school in the regency-level National Science Olympiad in Physics, cultivating advanced mathematical reasoning, fundamental physical mechanics, and structured analytical problem-solving.',
    fullWidth: true,
  },
];

export interface EducationItem {
  id: string;
  period: string;
  variant: 'pink' | 'dark';
  school: string;
  degree: string;
  detail: string;
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'itpln',
    period: '2026 – PRESENT',
    variant: 'pink',
    school: 'Institut Teknologi PLN (ITPLN)',
    degree: 'S1 Teknik Informatika (Informatics Engineering)',
    detail:
      "Recipient of PLN Group's Bonded Program (Program Ikatan Dinas). Focus on Data Science, Python, and Software Architecture.",
  },
  {
    id: 'sman1',
    period: '2023 – 2026',
    variant: 'dark',
    school: 'SMAN 1 GSB',
    degree: 'Senior High School — Science & Physics Olympiad Track',
    detail:
      'Active in committee leadership and visual event documentation.',
  },
];

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export const MILESTONES: MilestoneItem[] = [
  {
    year: '2026',
    title: "PLN Group's Bonded Program Awardee:",
    description:
      'Successfully accepted into the highly competitive bonded track at Institut Teknologi PLN for Informatics Engineering.',
  },
  {
    year: '2023',
    title: 'OSN Physics Regency Competitor:',
    description:
      'Selected delegate representing school in the National Science Olympiad in Physics.',
  },
  {
    year: '2023–2025',
    title: 'Multi-Year Event & Community Organizer:',
    description:
      'Trusted across youth leadership committees and school documentation media teams.',
  },
];

export const SOFT_SKILL_PILLS: Array<{ label: string; variant: 'dark' | 'pink' }> = [
  { label: 'Teamwork', variant: 'dark' },
  { label: 'Communication', variant: 'pink' },
  { label: 'Collaboration', variant: 'dark' },
  { label: 'Creativity', variant: 'pink' },
  { label: 'Initiative', variant: 'dark' },
  { label: 'Curiosity', variant: 'pink' },
];
