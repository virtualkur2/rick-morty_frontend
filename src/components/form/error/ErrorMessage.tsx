import type { PropsWithChildren } from "react"
import { StyledErrorMessage } from "./ErrorMessage.styles"

export interface ErrorMessageProps extends PropsWithChildren {}

const ErrorMessage = ({children}: ErrorMessageProps) => {
    return <StyledErrorMessage>{children}</StyledErrorMessage>
}

export default ErrorMessage;
