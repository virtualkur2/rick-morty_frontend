import styled from "styled-components";

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
});

export const CardGrid = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    width: '100%',
    maxWidth: '800px',
    margin: '20px 0',
});

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

export const FavoriteIconWrapper = styled('div')({
    flexShrink: 0, 
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
});
