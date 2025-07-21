import type { PropsWithChildren } from "react";
import { CardContainer } from "./Card.styles";

export interface CardProps extends PropsWithChildren {}

const Card = ({children, ...props}: CardProps) => <CardContainer {...props}>{children}</CardContainer>

export default Card;
