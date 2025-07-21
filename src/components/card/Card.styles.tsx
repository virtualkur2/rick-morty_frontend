import styled from "styled-components";

export const CardContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(42, 42, 42)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    padding: '15px',
    gap: '20px',
    width: '100%',
    maxWidth: '600px',
    boxSizing: 'border-box',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
        transform: 'translateY(-5px)',
    }
});