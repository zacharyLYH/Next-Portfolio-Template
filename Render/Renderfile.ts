export const Render = [
    {
        type: "Bio",
        name: "Zachary Lee",
        title: "Software Engineer; Full stack developer 🤓",
        socialLinks: [
            "https://github.com/zacharyLYH",
            "https://www.linkedin.com/in/zacharyleeyh",
            "leeyihong03@gmail.com",
            "https://leetcode.com/zacharylyh/",
        ],
        tldr: "💻SWE @ Spawnn 📚CS @ UB'23 ✅Self-starting; Nimble; Curious",
        aboutMe:
            "🔵I am a soon-to-be fresh grad with an undergraduate degree in BS Computer Science in May 2023 and would have close to 9 months of professional Software Engineering experience. \
        🔵 I am a natural leader. I have played key roles and led many projects during my internship, and I also tend to gravitate towards leadership/managerial roles in school and personal projects. This is because people see me as a knowledgeable software engineer, a compassionate leader, a dependable team-player, and a result-driven individual. \
        🔵 I am extremely passionate about learning. I believe learning is what makes a good life a great life, and what separates the best among the big talent pool. \
        🔵 I work hard. I usually have no problem being the first person to start a day’s work, and the last person to end the day. However, that doesn’t mean I don’t work smart – I work hard, smartly – and that has been the secret to all my career success.",
        image: "/headshot.jpeg",
        hobbies: [
            "Prefer Golang! ",
            "I love playing and watching CSGO 🔫",
            "I love to cook 👨‍🍳",
            "I am an avid reader. The genres I read are mostly on science, theory, and computer science 🔖",
            "I prefer instrumental music 🎹",
        ],
        jobStatus: "Interview Ready",
        docs: {
            resume: "/resume.pdf",
            transcript: "/transcript.pdf",
        },
    },
    {
        type: "Experience",
        title: "Software Engineer",
        summary: "Full stack MVP development of a video analysis SaSS platform.",
        skills: [
            "nodejs",
            "mongodb",
            "github",
            "nextjs",
            "expressjs",
            "tailwindcss",
            "typescript"
        ],
        story: "🟡 Collaborated closely with the CEO to design more than 80% (18+ components) of the Backend architecture, focusing on \
        scalability and maintainability. \
        🟡 Led development of an automated test tool, using JS testing frameworks and Python scripting, cutting testing time by 50%. \
        🟡 Supervised integration of approved API endpoints with the frontend team and troubleshooted blockers by developers. \
        🟡 Implemented more than 50% backend code and was responsible for code reviewing for colleagues before merging to main. \
        🟡 Added new UI features that directly enhanced user experience. \
        🟡 Played a key role in bringing the company to Beta testing stages and highly recognized for that impact and effort.",
        current: true,
        orgName: "Spawnn",
        dateStartEnd: "09/2022 - Ongoing",
    },
    {
        type: "Experience",
        title: "Algorithms and Complexity teaching assistant",
        summary: "Teaching assistant for a junior year algorithms course.",
        skills: ["tutor", "algorithms", "python"],
        current: true,
        story: "🟡 Conducted office hours and graded for a Junior level Algorithms and Complexity analysis course. UB’s CSE331.\
        🟡 Assisted students in understanding abstract algorithmic concepts through technical communication and worked examples.\
        🟡 Further honed technical communication skills through explaining difficult concepts.",
        orgName: "UB",
        dateStartEnd: "09/2022 - Ongoing",
    },
    {
        type: "Experience",
        title: "Open source contributor",
        summary: "Contributed to an open source game engine",
        skills: ["python"],
        story: "🟡 Contributed new features and addressed issues at UB’s open-source club’s Python based Classic-RPG style game engine.\
        🟡 Contributed core features such as Potions, and many classes such as Health and Speed.\
        🟡 Learnt what it meant to develop a game engine and practiced Python3, Object-Oriented Paradigm programming, and GitHub skills.",
        links: ["https://github.com/makeopensource/Classic-RPG"],
        orgName: "MOS",
    },
    {
        type: "Experience",
        title: "CS tutor",
        summary: "Tutored 3 entry-level CS courses.",
        skills: ["python", "tutor"],
        story: "🟡 Tutored in UB's CSE115, CSE116 and CSE220. Freshmen and Sophomore year mandatory CS courses. Intro to CS1, Intro to CS2, and Systems Programming respectively.\
        🟡 Developed technical communication skills and reinforced knowledge about systems, and object-oriented programming.",
        orgName: "UB",
    },
    {
        type: "Project",
        name: "Next-Portfolio-Template",
        summary:
            "A minimalistic NextJS based portfolio template that only requires JSON knowledge.",
        skills: [
            "nextjs",
            "reactjs",
            "vercel",
            "tailwindcss",
            "elasticsearch",
            "typescript",
        ],
        story: "🟣 A personal capstone project on learning NextJS, ReactJS, and TailwindCSS. \
        🟣 Designed to be scalable to any number of projects and experience items. \
        🟣 Designed for the shallowest learning curve to implement and adapt. \
        🟣 Followed front-end web development best practices. ",
        links: ["https://github.com/zacharyLYH/Next-Portfolio-Template"],
        current: true,
        featured: true,
    },
    {
        type: "Project",
        name: "Web password manager",
        summary:
            "A web hosted CLI app that manages passwords, inspired by SSH and asymmetric encryption protocols.",
        skills: ["golang", "encryption", "webhosting", "mongodb", "makefile"],
        story: "🟣 Designed and implementing a full stack web hosted password manager, focusing on security and ease of maintenance.\
        🟣 Leveraged industry standard protocols such as AES and RSA to safely communicate traffic.\
        🟣 Motivation behind project is due to lack of free web hosted password managers, thus implementing it as an open-source\
        project. 🟣 Wrote out an elaborate TDD for ease of other developers to get involved.",
        links: [
            "https://github.com/zacharyLYH/Password-Manager-CLI",
            "https://github.com/zacharyLYH/Password-Manager-Server",
        ],
        featured: true,
    },
    {
        type: "Project",
        name: "Wine price predictor",
        summary: "Data science project to predict wine prices.",
        skills: ["python", "scikitlearn"],
        story: "🟣 Utilized proper data cleaning and EDA steps \
        🟣 Implementing statistical and ML models, such as regression, clustering, and classifying algorithms.",
        links: [
            "https://drive.google.com/drive/folders/1RH-IwkHzTDAXpuh65E9Fc20cm6zSXhTE?usp=sharing",
        ],
        featured: true,
        current: true,
    },
    {
        type: "Project",
        name: "File System Visualizer",
        summary: "Tool to help visualize file systems in the form of a tree.",
        skills: ["python", "pypi", "oop"],
        story: "🟣 Implemented an intuitive file system visualizer that presents the system’s directories as an interactive graph. \
        🟣 Utilized traversal algorithms and optimized data structures, along with modularized p5 functionality.\
        🟣 Focused on OOP practices, ease of maintenance, and scalability.",
        links: ["https://github.com/zacharyLYH/FSVisualizer"],
        featured: true,
    },
    {
        type: "Project",
        name: "Project Fines",
        summary: "Lightweight traffic infringement API.",
        skills: ["nodejs", "expressjs", "mongodb", "teamwork"],
        story: "🟣 Led a team of 2 in the development of a traffic infringement fine system involving police, users, and administrators. \
        🟣 Conceived, architected, and built the Backend from scratch, prioritizing a robust database and codebase design.\
        🟣 Focused on code modularization, readability, and scalability.",
        links: ["https://github.com/zacharyLYH/ProjectFines"],
        featured: true,
    },
    {
        type: "Project",
        name: "Pintos OS",
        summary:
            "Implemented the Pintos OS acheiving full scores on all tests.",
        skills: ["clanguage", "linux", "teamwork"],
        story: "🟣 Organized a team of 3 to build the Pintos Operating System, achieving full scores on 120+ (all) test cases. \
        🟣 Facilitated frequent sync-sessions, code reviews, and pair programming sessions.",
        featured: true,
    },
    {
        type: "Project",
        name: "Obsidian notes clone",
        summary: "Developing a clone of Obsidian, a graphical note taking app.",
        skills: ["typescript", "electronjs", "reactjs", "teamwork", "zenhub"],
        story: "🟣 A group based coursework project to build the Obsidian clone in a final year Software Engineering course. \
        🟣 Practicing core software engineering best practices, such as version control.",
        featured: true,
        current: true,
    },
    {
        type: "Project",
        name: "Notify-Weather",
        summary:
            "Used a public weather API to create a desktop dress-for-the-weather app.",
        skills: ["python", "api"],
        story: "🟣 A desktop app that eliminates your need to check the weather ever again. We supply a timed notification of what to take out the house for the day, and what kind of weather to expect tomorrow.",
        links: ["https://github.com/zacharyLYH/Notify-Weather"],
    },
    {
        type: "Project",
        name: "Pool allocator",
        summary:
            "Implemented a working alternative to C's standard allocators.",
        skills: ["clanguage", "linux"],
        story: "🟣 Implemented a working clone of C’s standard allocators - malloc, palloc, and realloc.\
        🟣 Executes some UNIX commands such as ls, and single-thread applications like vim.",
    },
    {
        type: "Project",
        name: "Game of Life",
        summary: "Implemented Conway's Game of Life.",
        skills: ["clanguage"],
        story: "🟣 A CLI app that given initial conditions, simulates per the rules of Conway's GOL.",
    },
    {
        type: "Project",
        name: "Instant messenger",
        summary: "A client side messaging encoder and decoder.",
        skills: ["clanguage"],
        story: "🟣 Encoding and decoding APIs designed as per the specification of the CSE department's web server. \
        🟣 The functioning version had the ability to connect succesfully to the web server and facilitated online chatting. \
        🟣 Features include text, status, and @-ing another user. ",
    },
    {
        type: "Project",
        name: "Username generator",
        summary: "A simple username permutator that returns a unique username.",
        skills: ["cpp"],
        story: "🟣 Takes a name and generates a unique person ID.\
        🟣 Deals with duplicate person names via a permutation algorithm that permutes the name and returns that permuted ID. \
        🟣 Suitable for organizational use.",
        links: ["https://github.com/zacharyLYH/Username"],
    },
    {
        type: "Project",
        name: "Point of sale",
        summary: "A point of sale GUI with tax, bottle deposit, discounts, and more functionality.",
        skills: ["scala", "oop"],
        story: "🟣 Course project. \
        🟣 No conditionals were allowed, instead control flow happened via object-orientation approaches.",
    },
    {
        type: "Project",
        name: "Enemy AI",
        summary: "Implemented the logic for enemy AI bots in a game.",
        skills: ["scala", "oop"],
        story: "🟣 Course project. \
        🟣 The gaming field is a 2D matrix, and our job is to give the bots logic to smartly traverse the 2D matrix. \
        🟣 Required the use of BFS",
    },
    {
        type: "Footer",
        author: "Zachary Lee",
        links: ["https://github.com/zacharyLYH"],
    },
];
