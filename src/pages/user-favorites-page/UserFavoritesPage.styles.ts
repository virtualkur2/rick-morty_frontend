import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled('div')({
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: '40px auto',
    boxSizing: 'border-box',
});

export const GoBackButton = styled(Link)({
    display: 'inline-block',
    backgroundColor: 'rgb(108, 117, 125)',
    color: 'rgb(255, 255, 255)',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '20px',
    transition: 'background-color 0.2s',
    ':hover': {
        backgroundColor: 'rgb(90, 98, 104)',
    },
}) as typeof Link;


export const FavoritesGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
});


export const FavoriteCard = styled('div')({
    backgroundColor: 'rgb(42, 42, 42)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '10px',
});

export const FavoriteImage = styled('img')({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgb(100, 108, 255)',
    marginBottom: '10px',
});

export const FavoriteName = styled('h3')({
    margin: '0 0 5px 0',
    color: 'rgb(255, 255, 255)',
    fontSize: '1.2rem',
});

export const FavoriteDetails = styled('p')({
    margin: '2px 0',
    color: 'rgb(187, 187, 187)',
    fontSize: '0.85rem',
});
  
export const StatusMessage = styled('p')({
    color: 'rgb(238, 238, 238)',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: '50px',
});
