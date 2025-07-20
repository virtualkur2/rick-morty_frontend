import { Link } from 'react-router';
import styled from 'styled-components';

export const AuthContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
    padding: '20px',
    backgroundColor: 'rgb(42, 42, 42)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '40px auto',
});

export const Title = styled('h2')({
    color: 'rgb(100, 108, 255)',
    marginBottom: '20px',
});

export const StyledLink = styled(Link)({
    marginTop: '20px',
    color: 'rgb(100, 108, 255)',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline',
    },
}) as typeof Link;
