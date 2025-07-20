import type { PropsWithChildren } from "react";
import { StyledSuccessMessage } from "./SuccessMessage.styles"

export interface SuccessMessageProps extends PropsWithChildren {};

const SuccessMessage = ({children, ...props}: SuccessMessageProps) => <StyledSuccessMessage {...props}>{children}</StyledSuccessMessage>;

export default SuccessMessage;
