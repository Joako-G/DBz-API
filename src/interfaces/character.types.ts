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
    originPlanet: originPlanet;
    transformations: Transformation[];

}

interface originPlanet {
    id: string;
    name: string;
    description: string;
    image: string;
    isDestroyed: string;
}

interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
}