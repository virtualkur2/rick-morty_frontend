import { API_TAGS, apiService } from "..";
import type { AddFavoriteRequestDto } from "../dtos/add-favorite-request.dto";
import type { AddFavoriteResponseDto } from "../dtos/add-favorite-response.dto";
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
        addFavorite: build.mutation<AddFavoriteResponseDto, AddFavoriteRequestDto>({
            query: (body) => ({
                url: 'favorites',
                method: 'POST',
                body
            }),
            invalidatesTags: [API_TAGS.characters, API_TAGS.favorite],
        }),
        removeFavorite: build.mutation<void, string>({
            query: (characterId) => ({
                url: `favorites/${characterId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [API_TAGS.characters, API_TAGS.favorite]
        })
    }),
});

export const { useGetCharactersQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = extendedApi