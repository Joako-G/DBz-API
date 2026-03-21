export interface character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
}


export interface CharacterId extends character {
    transformations: Transformation[]
}

interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
}