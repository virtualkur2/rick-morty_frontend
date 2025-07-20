import type { PropsWithChildren } from "react";
import { StyledLogoutButton, StyledSubmitButton } from "./Button.styles";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends PropsWithChildren {
    type: ButtonType;
    disabled?: boolean;
    onClick?: () => void;
}

export const SubmitButton = ({children, ...props}: ButtonProps) => <StyledSubmitButton {...props}>{children}</StyledSubmitButton>;

export const LogoutButton = ({children, ...props}: ButtonProps) => <StyledLogoutButton {...props}>{children}</StyledLogoutButton>;
