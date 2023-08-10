
export type Skill = {
    id: string;
    name: string;
}

export type Education = {
    institution: string;
    degree: string;
    from: Date;
    to: Date;
    skills: number[];
}

export type Job = {
    company: string;
    position: string;
    description?: string;
    jobDescription: string;
    from: Date,
    to?: Date,
    skills: number[];
    assets: string[];
}

export type Social = {
    name: string;
    id: string;
    url: string;
}
