import styled from "styled-components";

export const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    flexWrap: 'wrap',
    gap: '8px',
});

interface PageButtonProps {
    $isActive?: boolean;
}

export const PageButton = styled.button<PageButtonProps>(({$isActive}) => ({
    backgroundColor: $isActive ? 'rgb(100, 108, 255)' : 'rgb(51, 51, 51)',
    color: 'rgb(255, 255, 255)',
    border: `1px solid ${$isActive ? 'rgb(100, 108, 255)' : 'rgb(85, 85, 85)'}`,
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, border-color 0.2s',
    fontSize: '1rem',
    ':hover:not(:disabled)': {
        backgroundColor: $isActive ? 'rgb(83, 91, 242)' : 'rgb(68, 68, 68)',
        borderColor: $isActive ? 'rgb(83, 91, 242)' : 'rgb(100, 108, 255)'
    },
    ':disabled': {
        backgroundColor: 'rgb(85, 85, 85)',
        color: 'rgb(187, 187, 187)',
        cursor: 'not-allowed',
        borderColor: 'rgb(85, 85, 85)',
    },
}));

export const PageNumberText = styled('span')({
    color: 'rgb(238, 238, 238)',
    margin: '0 10px',
    fontSize: '1.1em',
});
