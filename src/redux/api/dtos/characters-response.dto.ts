import type { CharacterDto } from "./character.dto";

export interface ResponseInfo {
    count: number;
    pages: number;
    page: number;
}

export interface CharactersResponseDto {
    info: ResponseInfo;
    results: CharacterDto[];
}
