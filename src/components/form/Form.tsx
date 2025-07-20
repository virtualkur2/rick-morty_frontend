import type { PropsWithChildren } from "react";
import type { FormProps } from "react-router";
import { StyledForm } from "./Form.styles";

export interface FromProps extends PropsWithChildren {
    onSubmit(): void;
}
const Form = ({onSubmit, children}: FormProps) => {
    return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export default Form;
