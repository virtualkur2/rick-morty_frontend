import type { PropsWithChildren } from "react";
import { StyledTitle } from './FormTitle.styles';

export interface FormTitleProps extends PropsWithChildren {};

const FormTitle = ({children, ...props}: FormTitleProps) => <StyledTitle {...props}>{children}</StyledTitle>;

export default FormTitle;