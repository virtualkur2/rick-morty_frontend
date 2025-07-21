import type { CharacterDto } from "./character.dto";

export interface AddFavoriteResponseDto {
    favoriteId: string;
    characterId: number;
    characterData: Pick<CharacterDto, 'name' | 'image' | 'species' | 'status'>;
    addedAt: string;
}