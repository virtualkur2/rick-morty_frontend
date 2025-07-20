import type { UserDto } from "./user.dto";

export interface LoginResponseDto {
    token: string,
    user: UserDto,
}