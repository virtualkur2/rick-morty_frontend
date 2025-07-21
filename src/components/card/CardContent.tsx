import type { PropsWithChildren } from "react";
import { StyledContent } from "./CardContent.styles";

export interface CardContentProps extends PropsWithChildren {}

const CardContent = ({children, ...props}: CardContentProps) => <StyledContent {...props}>{children}</StyledContent>;

export default CardContent;
