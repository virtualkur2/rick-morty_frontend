import PageTitle from "../../components/title/PageTitle";
import { Description, LandingPageContainer, StyledLink } from "./LandingPage.styles";

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <PageTitle>Welcome to Rick & Morty Favorites!</PageTitle>
            <Description>
                Discover characters, manage your favorites, and explore the universe of Rick and Morty.
                This application demonstrates a full-stack project built with Hexagonal Architecture (backend)
                and React, Vite, TypeScript, Redux Toolkit, and Styled Components (frontend).
            </Description>
            <StyledLink to="/login">Get Started</StyledLink>
        </LandingPageContainer>
    );
}

export default LandingPage;