import type { UserDto } from "../../api/dtos/user.dto";

export interface AuthState {
    token: string | null;
    user: UserDto | null;
    isLoading: boolean;
    error: string | null;
}
