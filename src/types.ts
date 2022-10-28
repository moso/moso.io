import { ViteSSGContext } from 'vite-ssg';

export type UserModule = (ctx: ViteSSGContext) => void;

export type Education = {
    title: string,
    period: string,
};

export type Experience = {
    title: string,
    period: string,
    location: string,
};

export type Project = {
    title: string,
    githubLink?: string,
    githubShort?: string,
    url?: string,
    description: string,
    tags?: Array<string>,
};
