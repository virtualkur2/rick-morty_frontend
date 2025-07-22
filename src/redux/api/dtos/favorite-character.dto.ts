import type { CharacterDto } from './character.dto'

type FavoriteCharacterData = Pick<CharacterDto, 'name' | 'image' | 'species' | 'status'>;

export interface FavoriteCharacterDto {
    'favoriteId': string;
    'characterId': number;
    'characterData': FavoriteCharacterData;
    'addedAt': string;
}
