// import React from 'react';
// import { Award, Users, Globe, Briefcase, CheckCircle, GraduationCap } from 'lucide-react';

// function About() {
//   const stats = [
//     { label: 'Students Worldwide', value: '10,000+' },
//     { label: 'Course Completion Rate', value: '94%' },
//     { label: 'Expert Instructors', value: '50+' },
//     { label: 'Countries Reached', value: '120+' },
//   ];

//   const team = [
//     {
//       name: 'Tarek Allam',
//       role: 'Founder & CEO',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       bio: 'Former Google engineer with 15 years of industry experience'
//     },
//     {
//       name: 'Hassan Anwar',
//       role: 'Founder & Head of Education',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       bio: 'PhD in Computer Science, 10+ years teaching experience'
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Lead Instructor',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       bio: 'Full-stack developer specializing in modern web technologies'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="bg-primary py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">About Backspace</h1>
//           <p className="text-xl text-white/80 max-w-3xl mx-auto">
//             We're on a mission to make high-quality coding education accessible to everyone, everywhere.
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold text-primary">{stat.value}</div>
//               <div className="text-black/70 mt-2">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-black">Our Mission</h2>
//             <p className="mt-4 text-xl text-black/70 max-w-3xl mx-auto">
//               To empower individuals with the skills and knowledge they need to succeed in the digital age through accessible, high-quality coding education.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <Award className="h-12 w-12 text-accent mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-black">Quality Education</h3>
//               <p className="text-black/70">Industry-aligned curriculum designed by experts for maximum impact.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <Globe className="h-12 w-12 text-accent mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-black">Global Access</h3>
//               <p className="text-black/70">Breaking down geographical barriers to reach learners worldwide.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <Briefcase className="h-12 w-12 text-accent mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-black">Career Focus</h3>
//               <p className="text-black/70">Practical skills and projects that prepare you for real-world success.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black">Meet Our Team</h2>
//           <p className="mt-4 text-xl text-black/70">
//             Led by industry experts passionate about education
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl font-semibold text-black">{member.name}</h3>
//               <p className="text-primary mb-2">{member.role}</p>
//               <p className="text-black/70">{member.bio}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;