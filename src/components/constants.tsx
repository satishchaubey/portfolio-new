import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../../public/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "MERN Stack Intern",
        company_name: "Techpile Technology Pvt Ltd Lucknow",
       icon: "/images/images/techpile.png",
        iconBg: "#accbe1",
        date: "June 2022 - April 2023",
        points: [
            " MERN Stack Development: Contributed to web applications using MongoDB",
            "Express.js, React.js, and Node.js. UI Development: Built interactive and responsive user interfaces using React.js Redux, and Bootstrap. ",
            "Testing & Deployment: Gained experience in coding testing, and deploying scalable applications.",
            "Problem-Solving: Developed problem-solving abilities while working on real-world projects in a collaborative environment."
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Speqto Technology Pvt Ltd",
        // icon: "/images/images/speqto.png",
        icon: "/images/images/speqto.webp",
        iconBg: "#fbc3bc",
        date: "June 2023 - Jan 2024",
        points: [
            "Frontend Development: Built dynamic UIs using React.js, Vite, and Next.js.",
            "Component Optimization: Developed reusable components for improved performance.",
            "API Integration: Integrated RESTful APIs for seamless backend communication.",
            "Blockchain Integration: Enabled decentralized features with Binance Smart Chain smart contracts.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "plutos ONE",
        // icon: `/images/images/plutosone.png`,
        icon: "/images/images/plutoone.png",
        iconBg: "#b7e4c7",
        date: "Feb 2024 - Present",
        points: [
            "Payment Gateway Integration: Integrated PayU and Razorpay for secure transactions.",
            "BBPS API Integration: Enabled seamless bill payments with Bharat Bill Payment System (BBPS) APIs.",
            "AI SaaS Website Development: Built scalable UI components for an AI SaaS platform using React.js and Next.js.",
            "CBMS and VMS Dashboard Management and Campaigns UI Development in Nextjs and ReactJS. ",
            "Website Design & Maintenance: Led the development and maintenance of the company website, improving campaign structuring and organizational efficiency."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/satishchaubey',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/satish-chaubey/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/Satishhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Satishhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Satishhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Satishhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/Satishhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Satishhajdin/project_ai_summarizer',
    }
];