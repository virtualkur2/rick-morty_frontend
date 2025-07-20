import type { ChangeEvent } from "react";
import { StyledInput } from "./Input.styles";

export interface InputProps {
    value?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    pattern?: string;
    name?: string;
    id?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    return <StyledInput {...props} />
}

export default Input;
