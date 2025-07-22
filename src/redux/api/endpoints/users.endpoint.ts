import { API_TAGS, apiService } from "..";
import type { FavoriteCharacterDto } from "../dtos/favorite-character.dto";
import type { UserDto } from "../dtos/user.dto";

const extendedApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<UserDto[], void>({
            query: () => ({
                url: 'users',
                method: 'GET'
            }),
        }),
        getUserFavorites: build.query<FavoriteCharacterDto[], string>({
            query: (userId) => ({
                url: `users/${userId}/favorites`,
                method: 'GET'
            }),
            providesTags: [API_TAGS.favorite]
        }),
    })
});

export const { useGetUsersQuery, useGetUserFavoritesQuery } = extendedApi;