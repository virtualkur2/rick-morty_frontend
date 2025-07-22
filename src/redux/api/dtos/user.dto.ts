import type { UserRole } from "../../../types/user-role.type";

export interface UserDto {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
}
