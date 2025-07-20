import type { PropsWithChildren } from "react";
import { StyledContainer } from "./FormContainer.styles";

export interface FormContainerProps extends PropsWithChildren {};

const FormContainer = ({children, ...props}: FormContainerProps) => <StyledContainer {...props}>{children}</StyledContainer>;

export default FormContainer;
