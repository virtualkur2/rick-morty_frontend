import type { CharacterStatus } from "./character.dto";

export interface CharactersRequestDto {
    page?: number;
    name?: string;
    species?: string;
    status?: typeof CharacterStatus[keyof typeof CharacterStatus];
}
