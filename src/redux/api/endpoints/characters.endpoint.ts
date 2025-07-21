import { API_TAGS, apiService } from "..";
import type { CharactersRequestDto } from "../dtos/characters-request.dto";
import type { CharactersResponseDto } from "../dtos/characters-response.dto";

const extendedApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query<CharactersResponseDto, CharactersRequestDto>({
            query: (params) => ({
                url: 'rick-and-morty/characters',
                params,
            }),
            providesTags:[API_TAGS.characters]
        }),
    }),
});

export const { useGetCharactersQuery } = extendedApi