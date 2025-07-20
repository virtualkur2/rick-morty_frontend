import type { PropsWithChildren } from "react";
import { StyledLink } from "./CustomLink.styles";

export interface CustomLinkProps extends PropsWithChildren {
    to: string;
};

export const CustomLink = ({children, ...props}: CustomLinkProps) => <StyledLink {...props}>{children}</StyledLink>;
