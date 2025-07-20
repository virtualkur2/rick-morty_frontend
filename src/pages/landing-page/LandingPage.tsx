import { Description, LandingPageContainer, StyledLink, Title } from "./LandingPage.styles";

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Title>Welcome to Rick & Morty Favorites!</Title>
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