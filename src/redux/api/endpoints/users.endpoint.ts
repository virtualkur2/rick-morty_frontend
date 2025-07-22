import { apiService } from "..";
import type { UserDto } from "../dtos/user.dto";

const extendedApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<UserDto[], void>({
            query: () => ({
                url: 'users',
                method: 'GET'
            }),
        }),
    })
});

export const { useGetUsersQuery } = extendedApi;