export const courses = [
  {
    title: "Introduction to Computer Science",
    description: "A foundational course covering the core concepts of computer science, from binary and computer architecture to basic programming concepts and problem-solving strategies. Perfect for beginners wanting to understand how computers work and think like a programmer.",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.8,
    students: 1023,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    topics: [
      "What is Computer Science?",
      "Computer History",
      "Computer Hardware and",
      "Logic Gates",
      "Numbering Systems (Binary and Decimal Numbers)", // Added missing comma
      "Numbering Systems (Octal and Hexadecimal Numbers)",
      "Numbering Systems (Complements of Numbers) and (Subtraction Using Complements)",
      "Introduction To Programming"
    ],
    outcomes: [
      "Understand how computers process information and represent data.",
      "Learn the basics of computer hardware and its key components.",
      "Explore the evolution of computers from early machines to modern technology.",
      "Master logic gates and numbering systems essential for digital computing.",
      "Gain a strong foundation in programming and problem-solving skills."
    ],
    prerequisites: "No prior programming experience required",
    projects: [  
      "Create a Computer Science Concept Map",  
      "Design a Computer History Timeline",  
      "Label and Identify Computer Hardware Components",  
      "Build Truth Tables for Logic Gates",  
      "Practice Binary to Decimal Conversions with Flashcards",  
      "Develop a Paper-Based Number System Converter",  
      "Solve Subtraction Problems Using Complements",  
      "Create a Poster Explaining Basic Programming Concepts"  
    ]  
  },
  {
    title: "Python Programming",
    description: "Comprehensive Python course covering everything from basic syntax to advanced features. Learn through hands-on projects and real-world applications. Perfect for beginners and those looking to enhance their programming skills with Python's versatile ecosystem.",
    level: "Beginner",
    duration: "10-12 Sessions",
    rating: 4.9,
    students: 1567,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/python.png?raw=true",
    topics: [
      "Introduction To Programming",
      "Python Syntax & Data Types",
      "Variables and Data Structures",
      "Escape Sequence Characters",
      "String Manipulation",
      "Number, List, and Tuple Manipulations",
      "Set, Dictionary Manipulations, and Type Conversion",
      "Boolean",
      "Working with User Input",
      "Conditions",
      "Loops",
      "Exception Handling",
      "Functions"
    ],
    outcomes: [
      "Write efficient Python code",
      "Understand Python's core syntax and data types",
      "Handle user input and process strings and numbers",
      "Work with complex data structures like lists, tuples, sets, and dictionaries",
      "Apply control flow, functions, and exception handling in projects",
      "Solve more than 200 practical problems to build strong problem-solving skills"
    ],
    prerequisites: "Basic computer knowledge",
    projects: [
      "Student Grading System",
      "To-Do List Application"
    ]
  },

  {
    title: "Data Structures & Complexity Analysis",
    description: "Master fundamental data structures and their implementations. Learn how to choose the right data structure for different scenarios and optimize program performance. Essential knowledge for any serious programmer or software engineer.",
    level: "Intermediate",
    duration: "4-6 Sessions",
    rating: 4.8,
    students: 1200,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/DS.png?raw=true",
    topics: [
      "Time Complexity",
      "Space Complexity",
      "Big O Notation",
      "Primitive DS",
      "Array",
      "Matrix",
      "Linked List",
      "Stack",
      "Queue",
      "Tree",
      "Heaps",
      "Graphs",
      "Sets",
      "Hash Tables"
    ],
    outcomes: [
      "Understand and analyze algorithm efficiency using time and space complexity",
      "Apply Big O notation to evaluate data structure performance",
      "Differentiate between primitive and non-primitive data structures",
      "Implement linear data structures such as arrays, linked lists, stacks, and queues",
      "Design and work with non-linear data structures including trees, heaps, and graphs",
      "Develop problem-solving skills through practical implementations and projects"
    ],
    prerequisites: "Basic programming knowledge and familiarity with a programming language (preferably Python)",
    projects: [
      "Implementing and analyzing a linked list",
      "Designing a stack and queue with complexity analysis",
      "Creating a binary search tree with traversal algorithms",
      "Developing a graph data structure with shortest path algorithms"
    ]
  },
  {
    title: "Object-Oriented Programming (OOP)",
    description: "Deep dive into object-oriented programming principles and design patterns. Learn how to write maintainable, scalable, and reusable code using OOP concepts. Essential for modern software development.",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.8,
    students: 932,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/OOP.png?raw=true",
    topics: [
      "Classes & Objects",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction",
      "Design Patterns",
      "SOLID Principles",
      "Unit Testing"
    ],
    outcomes: [
      "Design object-oriented systems",
      "Implement design patterns",
      "Write maintainable code",
      "Create reusable components"
    ],
    prerequisites: "Basic programming knowledge",
    projects: [
      "Library Management System",
      "E-commerce Platform",
      "Game Engine Framework"
    ]
  },
  {
    title: "Introduction to Information Systems",
    description: "Explore the fundamental concepts of information systems and their role in modern organizations. Learn about system architecture, databases, networking, and how technology supports business operations.",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.8,
    students: 1023,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/IS.png?raw=true",
    topics: [
      "System Architecture",
      "Database Management",
      "Network Infrastructure",
      "Information Security",
      "Business Intelligence",
      "Cloud Computing"
    ],
    outcomes: [
      "Understand IS components",
      "Analyze business requirements",
      "Design system solutions",
      "Implement security measures"
    ],
    prerequisites: "Basic computer literacy",
    projects: [
      "Business System Analysis",
      "Database Design Project",
      "Security Assessment"
    ]
  },
  {
    title: "Networks",
    description: "Comprehensive study of computer networks, protocols, and architecture. Learn how data travels across networks, understand security principles, and gain hands-on experience with network configuration.",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.8,
    students: 845,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/Networks.png?raw=true",
    topics: [
      "Network Protocols",
      "TCP/IP Stack",
      "Routing & Switching",
      "Network Security",
      "Wireless Networks",
      "Cloud Networking"
    ],
    outcomes: [
      "Configure network devices",
      "Implement security protocols",
      "Troubleshoot network issues",
      "Design network architecture"
    ],
    prerequisites: "Basic networking knowledge",
    projects: [
      "Network Monitoring Tool",
      "Secure Chat Application",
      "Network Design Project"
    ]
  },
  {
    title: "Operating Systems",
    description: "Explore the internals of operating systems, including process management, memory allocation, file systems, and scheduling algorithms. Learn how modern operating systems manage computer resources efficiently.",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.6,
    students: 765,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/OS.png?raw=true",
    topics: [
      "Process Management",
      "Memory Management",
      "File Systems",
      "I/O Systems",
      "Virtualization",
      "Distributed Systems"
    ],
    outcomes: [
      "Understand OS architecture",
      "Implement system calls",
      "Manage system resources",
      "Debug system issues"
    ],
    prerequisites: "Programming experience, Computer Architecture",
    projects: [
      "Simple Shell Implementation",
      "Memory Manager",
      "File System Simulator"
    ]
  },
  {
    title: "Algorithms",
    description: "Master essential algorithms and problem-solving techniques. Learn to analyze algorithm efficiency, implement various algorithmic strategies, and solve complex computational problems efficiently.",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.7,
    students: 892,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/Algorithms.png?raw=true",
    topics: [
      "Sorting & Searching",
      "Dynamic Programming",
      "Graph Algorithms",
      "Greedy Algorithms",
      "Divide & Conquer",
      "NP-Complete Problems"
    ],
    outcomes: [
      "Design efficient algorithms",
      "Analyze time complexity",
      "Solve optimization problems",
      "Implement advanced algorithms"
    ],
    prerequisites: "Data Structures, Programming proficiency",
    projects: [
      "Path Finding Visualizer",
      "Optimization Solver",
      "Algorithm Visualization Tool"
    ]
  },
  {
    title: "Software Engineering",
    description: "Learn professional software development practices, from requirements gathering to deployment. Master agile methodologies, version control, testing strategies, and project management techniques.",
    level: "Advanced",
    duration: "14 weeks",
    rating: 4.9,
    students: 998,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/SE.png?raw=true",
    topics: [
      "Software Development Lifecycle",
      "Agile & Scrum",
      "Version Control (Git)",
      "Testing & QA",
      "CI/CD",
      "Project Management"
    ],
    outcomes: [
      "Lead development projects",
      "Implement agile practices",
      "Ensure code quality",
      "Deploy applications"
    ],
    prerequisites: "Programming experience, Basic project management",
    projects: [
      "Team Project Management Tool",
      "Automated Testing Suite",
      "Full-Stack Application"
    ]
  },
  {
    title: "System Analysis and Design",
    description: "Learn to analyze business requirements and design effective software solutions. Master various modeling techniques, requirement gathering methods, and system design principles.",
    level: "Advanced",
    duration: "14 weeks",
    rating: 4.8,
    students: 734,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/SAAS.png?raw=true",
    topics: [
      "Requirements Engineering",
      "System Modeling",
      "UML Diagrams",
      "Architecture Design",
      "User Interface Design",
      "System Integration"
    ],
    outcomes: [
      "Gather requirements effectively",
      "Create system models",
      "Design system architecture",
      "Evaluate design alternatives"
    ],
    prerequisites: "Basic programming, Project management fundamentals",
    projects: [
      "Business System Design",
      "Requirements Documentation",
      "System Prototype"
    ]
  },
  {
    title: "Databases",
    description: "Comprehensive coverage of database design, implementation, and management. Learn SQL, database normalization, transaction management, and how to build efficient database applications.",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.9,
    students: 1156,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/DB.png?raw=true",
    topics: [
      "Database Design",
      "SQL Programming",
      "Normalization",
      "Transaction Management",
      "Database Security",
      "NoSQL Databases"
    ],
    outcomes: [
      "Design database schemas",
      "Write complex SQL queries",
      "Implement data security",
      "Optimize database performance"
    ],
    prerequisites: "Basic programming knowledge",
    projects: [
      "E-commerce Database",
      "Query Optimization Tool",
      "Database Management System"
    ]
  }
];
