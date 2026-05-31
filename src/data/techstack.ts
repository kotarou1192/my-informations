export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { label: 'Languages', items: ['Ruby', 'TypeScript / JavaScript', 'Go'] },
  { label: 'Frameworks', items: ['Ruby on Rails', 'Vue.js', 'React / Next.js'] },
  { label: 'Infrastructure', items: ['AWS', 'Terraform', 'Docker'] },
];
