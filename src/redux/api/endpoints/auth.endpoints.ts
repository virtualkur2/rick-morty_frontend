import { apiService } from "..";
import type { LoginRequestDto } from "../dtos/login-request.dto";
import type { LoginResponseDto } from "../dtos/login-response.dto";
import type { SignupRequestDto } from "../dtos/signup-request.dto";
import type { SignupResponseDto } from "../dtos/signup-response.dto";

const extendedApi = apiService.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponseDto, LoginRequestDto>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: build.mutation<SignupResponseDto, SignupRequestDto>({
            query: (userData) => ({
                url: 'auth/signup',
                method: 'POST',
                body: userData
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = extendedApi;
