export interface Contact {
    name: string;
    value: string;
    image: string;
    icon: boolean;
    link?: string;
}

export interface Education {
    name: string;
    startDate: number;
    endDate: number;
    major: string;
    city: string;
}

export interface Address {
    label: string;
    province: string;
    city: string;
    district: string;
    subDistrict: string;
    street: string;
}

export interface ProfileData {
    name: string;
    birthday: string;
    birthplace: string;
    gender: string;
    motto: string;
    role: string[];
    education: Education[];
    contact: Contact[];
    addresses: Address[];
}

export interface JobExperience {
    id: number;
    company: string;
    address: string;
    phone: string;
    jobDescription: string[];
    startDate: string;
    endDate: string; // or "Present"
    outsource?: string[];
}

export interface SkillDetail {
    title: string;
    description: string[];
}

export interface Skill {
    name: string;
    since: string;
    status: string;
    type: string;
    company?: { id: number; name: string }[];
    details: SkillDetail[]; // Renamed from 'skills' to avoid confusion
}

export interface SkillData {
    skills: Skill[];
}
