export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Hassan Anwar',
    role: 'Founder & Head of Education',
    image: 'https://github.com/anwar211944/BackspaceWebsite/blob/main/img/anwar.png?raw=true',
    bio: 'PhD in Computer Science, 10+ years teaching experience',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/hassancodeanwar',
      github: 'https://github.com/hassancodeanwar'
    }
  },  
  {
    id: 2,
    name: 'Tarek Allam',
    role: 'Founder & CEO',
    image: 'https://github.com/anwar211944/BackspaceWebsite/blob/main/img/tarek-allam.png?raw=true',
    bio: 'Former Google engineer with 15 years of industry experience',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tarek-m-allam/',
      github: 'https://github.com/tarekmallam'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: 'Full-stack developer specializing in modern web technologies',
    socialLinks: {
      linkedin: 'https://linkedin.com'
    }
  }
  // {
  //   id: 4,
  //   name: 'David Chen',
  //   role: 'Senior Developer',
  //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //   bio: 'Cloud architecture expert with a passion for scalable systems',
  //   socialLinks: {
  //     linkedin: 'https://linkedin.com',
  //     github: 'https://github.com'
  //   }
  // },
  // {
  //   id: 5,
  //   name: 'Sarah Johnson',
  //   role: 'UX Design Lead',
  //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //   bio: 'Creating intuitive and beautiful user experiences for over 8 years',
  //   socialLinks: {
  //     linkedin: 'https://linkedin.com'
  //   }
  // },
  // {
  //   id: 6,
  //   name: 'Michael Park',
  //   role: 'Mobile Development Lead',
  //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //   bio: 'Expert in cross-platform mobile development and native applications',
  //   socialLinks: {
  //     linkedin: 'https://linkedin.com',
  //     github: 'https://github.com'
  //   }
  // }
];
