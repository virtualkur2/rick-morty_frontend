import type { UserDto } from "./user.dto";

export interface SignupResponseDto {
    messgae: string,
    user: UserDto,
}