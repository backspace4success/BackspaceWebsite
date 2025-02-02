export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  courseTitle?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Web Developer',
    company: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    quote: 'Backspace transformed my career. The practical projects and mentor support helped me land my dream job.',
    rating: 5,
    courseTitle: 'Web Development Bootcamp'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'Data Analytics Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    quote: 'The data science courses are comprehensive and up-to-date. I particularly enjoyed the hands-on projects.',
    rating: 5,
    courseTitle: 'Data Science Fundamentals'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    company: 'Creative Studios',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
    quote: 'The design courses helped me understand both theory and practical applications. The community is incredibly supportive.',
    rating: 4,
    courseTitle: 'UI/UX Design Masterclass'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Software Engineer',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
    quote: 'The algorithms and data structures course was exactly what I needed to ace my technical interviews.',
    rating: 5,
    courseTitle: 'Advanced Algorithms'
  },
  {
    id: 5,
    name: 'Lisa Patel',
    role: 'Mobile Developer',
    company: 'App Solutions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    quote: 'Learning mobile development here was a game-changer. The step-by-step approach made complex concepts easy to grasp.',
    rating: 5,
    courseTitle: 'Mobile App Development'
  }
];