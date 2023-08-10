import { Skill, Job, Education, Social } from "./models/models";

export const work_experiences: Job[] = [
    {
        company: "Solasystem (Contract) ",
        position: "Frontend Developer",
        description: "Solasystem was a project where the users could see a lot of projects based on the cryptocurrency Solana. Basically a hub of information for anyone interested in Solana and its projects",
        jobDescription: "Frontend Developer for Solasystem. Mainly focused on the basic structure of the website's frontend and creating components' and their respective styles.",
        from: new Date("2021-06-01"),
        to: new Date("2023-06-30"),
        skills: [2, 3, 5, 6, 11],
        assets: []
    },
    {
        company: "Konrad",
        position: "Software Developer",
        description: null,
        jobDescription: "Fullstack Developer for Konrad. Here I worked and learnt a lot about Adobe Experience Manager and its applications. Backend and Frontend work was required for this position.",
        from: new Date("2021-09-14"),
        to: new Date("2023-05-15"),
        skills: [1, 2, 3, 8, 9, 11],
        assets: []
    }
];

export const education: Education[] = [
    {
        institution: "Cenfotec University",
        degree: "Web Design and Web Development Technical Degree",
        from: new Date("2018-01-01"),
        to: new Date("2020-12-30"),
        skills: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11]
    },
    {
        institution: "Brain Station",
        degree: "Web Development Immersive Program",
        from: new Date("2021-06-01"),
        to: new Date("2020-12-30"),
        skills: [2, 3, 4, 8, 11]
    }
]

export const skills: Skill[] = [
    { id: "1", name: "Typescript" },
    { id: "2", name: "React" },
    { id: "3", name: "JavaScript" },
    { id: "4", name: "AEM" },
    { id: "5", name: "NodeJS" },
    { id: "6", name: "Photoshop" },
    { id: "7", name: "MongoDB" },
    { id: "8", name: "Java" },
    { id: "9", name: "Figma" },
    { id: "10", name: "Angular" },
    { id: "11", name: " CSS" }
]

export const socials: Social[] = [
    { id: "1", name: "Github", url: "https://github.com/" },
    { id: "2", name: "LinkedIn", url: "https://www.linkedin.com" },
]
