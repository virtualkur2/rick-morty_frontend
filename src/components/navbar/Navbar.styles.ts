import styled from "styled-components";

export const NavBarContainer = styled('nav')({
    backgroundColor: 'rgb(51, 51, 51)',
    padding: '1rem 2rem',
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    position: 'sticky',
    top: 0,
    zIndex: 1000
});

export const AppTitle = styled('div')({
    font: '1.5rem',
    fontWeight: 'bold',
})