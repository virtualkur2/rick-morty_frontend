import type React from "react";
import { AppTitle, NavBarContainer } from "./Navbar.styles";
import { APP_NAME } from "../constants";

const Navbar: React.FC = () => {
    return (
        <NavBarContainer>
            <AppTitle>{APP_NAME}</AppTitle>        
        </NavBarContainer>
    );
}

export default Navbar;