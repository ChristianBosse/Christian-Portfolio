import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    php,
    python,
    solutionscpo,
    atl,
    concordia,
    current,
    old_portfolio,
    apex_tracker,
    threejs,
    da_spot,
    atl_design,
    cinema_v,
    sql,
    ai_image,
    chrisgpt,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Software Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "php",
        icon: php,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "sql",
        icon: sql,
    },
];

const experiences = [
    {
        title: "University",
        company_name: "Concordia",
        icon: concordia,
        iconBg: "#383E56",
        date: "March 2021 - June 2021",
        points: [
            "Learn and use JavaScript in the context of backend programming with NodeJS. Create and deploy a web server using RESTful API principles by leveraging NodeJS with Express.",
            "Learn to extend backend projects to leverage data persistence with databases. We will learn to perform CRUD operations on MongoDB and Firebase databases.",
            "We begin with DOM manipulation to then move on to React. We put these skills to work with a number of individual web projects. These projects will introduce new concepts of the React framework like React Hooks.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "Solutions CPO",
        icon: solutionscpo,
        iconBg: "#383E56",
        date: "September 2021 - April 2023",
        points: [
            "Developing and maintaining web applications using JavaScript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Part time Web Developer / CEO",
        company_name: "ATL Design",
        icon: atl,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js, WordPress and other related technologies.",
            "Collaborating with designers and clients to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in customers services and providing constructive feedback to clients and designers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Christian has always shown great dedication to the company. He is very pleasant, always in a good mood. He is a colleague appreciated by everyone.",
        name: "Sophie Larouche",
        designation: "CEO",
        company: "Solutions CPO",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I was impressed with your enthusiasm and the site's features, like using an external API for player stats, which perfectly met my gaming site expectations. Well done!",
        name: "Bobby Connolly",
        designation: "Senior Developer",
        company: "McGill University",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Christian, I'm so proud! The way you merged your passion for gaming and development into this amazing project is fantastic!",
        name: "Stephanie Muise",
        designation: "Senior Developer",
        company: "Dalhousie University",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const projects = [
    {
        name: "ChrisGPT",
        description:
            "JavaScript application using OpenAI ChatGPT API to create, save AI answer based on the user's prompt and settings.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "API",
                color: "gold-text-gradient",
            },
        ],
        image: chrisgpt,
        source_code_link: "https://github.com/ChristianBosse/ai-image",
    },
    {
        name: "Ai Image",
        description:
            "MERN Stack application using OpenAI DALL-E API to create, save & share beautifull AI made images based on user prompt.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "MERN",
                color: "gold-text-gradient",
            },
        ],
        image: ai_image,
        source_code_link: "https://github.com/ChristianBosse/ai-image",
    },
    {
        name: "Portfolio",
        description:
            "Full-Stack web developer creating seamless and user-friendly web-based platforms. Passionate about delivering high-quality results.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: current,
        source_code_link:
            "https://github.com/ChristianBosse/Christian-Portfolio",
    },
    {
        name: "ATL Design",
        description:
            "This is my personal company website, which I use to fulfill part-time freelance jobs for local businesses seeking to acquire a website to help them grow.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: atl_design,
        source_code_link: "https://atldesign.ca/",
    },

    {
        name: "Apex Legends Tracker",
        description:
            "This is my Full-stack project for my final project for my Concordia University Web development Bootcamp. Using all of my expertise at the time this was truly incredible.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
            {
                name: "MERN",
                color: "gold-text-gradient",
            },
        ],
        image: apex_tracker,
        source_code_link: "https://github.com/ChristianBosse/Apex-Tracker",
    },
    {
        name: "Old Portfolio",
        description:
            "First Portfolio i've made after graduating from Concordia. Using React, some animation along with email.js, this was one of my first projects.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "email.js",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: old_portfolio,
        source_code_link: "https://github.com/ChristianBosse/portfolio-OLD-",
    },
    {
        name: "Da Spot Barber Shop",
        description:
            "Small Web application for a local business called Da Spot Barber Shop using html, javascript and CSS. Project was remade using another framework later on.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: da_spot,
        source_code_link:
            "https://github.com/ChristianBosse/Da-Spot-Barber-Shop",
    },
    {
        name: "Cinema V",
        description:
            "This is a small web application I developed for a local cinema. The project utilizes WordPress CMS to provide the client with a user-friendly platform and peace of mind.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: cinema_v,
        source_code_link: "https://cinemav.ca/",
    },
];

export { services, technologies, experiences, testimonials, projects };
