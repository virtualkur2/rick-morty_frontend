import styled from "styled-components";

export const StyledSubmitButton = styled('button')({
    minWidth: '50%',
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

export const StyledLogoutButton = styled('button')({
    backgroundColor: 'rgb(220, 53, 69)',
    color: 'rgb(255, 255, 255)',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
        backgroundColor: 'rgb(200, 35, 51)',
    },
});