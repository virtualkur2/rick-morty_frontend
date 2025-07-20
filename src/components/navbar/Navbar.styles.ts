import { Link, NavLink } from "react-router";
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

export const AppTitle = styled(Link)({
    font: '1.5rem',
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    ':hover': {
        color: 'rgb(238, 238, 238)',
    }
}) as typeof Link;

export const NavLinks = styled('div')({
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
});


export const StyledNavLink = styled(NavLink)({
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    ':hover': {
        backgroundColor: 'rgb(85, 85, 85)',
    }
}) as typeof NavLink;

export const UserInfo = styled('span')({
    color: 'rgb(187, 187, 187)',
    marginRight: '15px',
    fontSize: '0.9rem',
});

export const LogoutButton = styled('button')({
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