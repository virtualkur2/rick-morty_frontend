import styled from "styled-components";

export const CharacterName = styled('h3')({
    margin: '0 0 8px 0',
    color: 'rgb(255, 255, 255)',
    fontSize: '1.5rem',
});

export const CharacterDetails = styled('p')({
    margin: 0,
    color: 'rgb(187, 187, 187)',
    fontSize: '0.9rem',
});

export const ActionsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-end',
    flexShrink: 0,
});

export const ViewDetailsButton = styled('button')({
    backgroundColor: 'rgb(0, 123, 255)',
    color: 'rgb(255, 255, 255)',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
    transition: 'background-color 0.2s',
    ':hover': {
        backgroundColor: 'rgb(0, 86, 179)',
    }
});

export const DetailRow = styled('p')({
    margin: '8px 0',
    fontSize: '1rem',
    strong: {
        color: 'rgb(255, 255, 255)',
        marginRight: '5px',
    }
});

export const DetailImage = styled('img')({
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgb(100, 108, 255)',
    display: 'block',
    margin: '0 auto 20px',
});
