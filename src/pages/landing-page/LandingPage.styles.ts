import { Link } from "react-router";
import styled from "styled-components";

export const LandingPageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 4rem)',
    textAlign: 'center',
});

export const Title = styled('h1')({
    fontSize: '3.5rem',
    color: 'rgb(100, 108, 255)',
    marginBottom: '20px',
});

export const Description = styled('p')({
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '30px',
    lineHeight: 1.6,
});

export const StyledLink = styled(Link)({
    backgroundColor: 'rgb(40, 167, 69)',
    color: 'rgb(255, 255, 255)',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'background-color 03.s ease',
    ':hover': {
        backgroundColor: 'rgb(33, 136, 56)',
    }
}) as typeof Link;
