export interface Doctor {
    id: number;
    name: string;
    title: string;
    specialty: string;
    education: string;
    experience: string;
    image: string;
    bio: string;
    credentials: string[];
    schedule: string;
}

export interface CaseStudy {
    id: number;
    category: string;
    categoryKey: string;
    titleKey: string;
    beforeImage: string;
    afterImage: string;
}

export interface Review {
    id: number;
    image: string;
}
