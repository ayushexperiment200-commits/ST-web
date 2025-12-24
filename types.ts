
export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
  icon: string;
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  content: string;
  category: 'Event' | 'Holiday' | 'Academic' | 'Admin';
}

export interface FacultyMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
