import type { FilterOption } from "../../../components/filter/Filter";

export const CharacterStatus =  {
    ALIVE: 'Alive',
    DEAD: 'Dead',
    UNKNOWN: 'unknown',
} as const;

export const CharacterGender = {
    FEMALE: 'Female',
    MALE: 'Male',
    GENDERLESS: 'Genderless',
    UNKNOWN: 'unknown',
} as const;

export type CharacterOrigin = {
    name: string;
}

export interface CharacterDto {
    id: number;
    name: string;
    status: typeof CharacterStatus[keyof typeof CharacterStatus];
    species: string;
    image: string;
    favoriteId?: string;
    // extended information only for admin's
    type?: string;
    gender?: typeof CharacterGender[keyof typeof CharacterGender];
    origin?: CharacterOrigin;
    created?: string;
}

export type CharacterFilterType = 'name' | 'species' | 'status';

export const CharacterFilterOptions: FilterOption[] = [
    {label: 'Name', value: 'name'},
    {label: 'Species', value: 'species'},
    {label: 'Status', value: 'status'},
]