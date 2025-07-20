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

export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '20px',
});

export const Input = styled('input')({
    width: '70%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid rgb(68, 68, 68)',
    borderRadius: '5px',
    backgroundColor: 'rgb(51, 51, 51)',
    color: 'rgb(238, 238, 238)',
    fontSize: '1rem',
    ':focus': {
        outline: 'none',
        borderColor: 'rgb(100, 108, 255)',
    },
});

export const Button = styled('button')({
    width: '50%',
    backgroundColor: 'rgb(40, 167, 69)',
    color: 'rgb(255, 255, 255)',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
        backgroundColor: 'rgb(33, 136, 56)',
    },
    ':disabled': {
        backgroundColor: 'rgb(85, 85, 85)',
        cursor: 'not-allowed',
    },
});

export const ErrorMessage = styled('p')({
    color: 'rgb(255, 77, 77)',
    marginTop: '10px',
    fontSize: '0.9rem',
});

export const StyledLink = styled(Link)({
    marginTop: '20px',
    color: 'rgb(100, 108, 255)',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline',
    },
}) as typeof Link;
