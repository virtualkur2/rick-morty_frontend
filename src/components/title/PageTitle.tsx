import type { PropsWithChildren } from "react";
import { StyledPageTitle } from "./PageTitle.styles";

export interface PageTitleProps extends PropsWithChildren {}

const PageTitle = ({children, ...props}: PageTitleProps) => <StyledPageTitle {...props}>{children}</StyledPageTitle>;

export default PageTitle;
