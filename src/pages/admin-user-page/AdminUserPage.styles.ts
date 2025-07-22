import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled('div')({
    padding: '20px',
    width: '100%',
    maxWidth: '1000px',
    margin: '40px auto',
    boxSizing: 'border-box',
});

export const UserTable = styled('table')({
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: 'rgb(42, 42, 42)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden', /* Ensures border-radius applies to table */
});

export const TableHeader = styled('th')({
    backgroundColor: 'rgb(51, 51, 51)',
    color: 'rgb(238, 238, 238)',
    padding: '12px 15px',
    textAlign: 'left',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgb(68, 68, 68)',
});

export const TableRow = styled('tr')({
    ':nth-child(even)': {
        backgroundColor: 'rgb(47, 47, 47)',
    },
    ':hover': {
        backgroundColor: 'rgb(56, 56, 56)',
    },
});

export const TableData = styled('td')({
    padding: '12px 15px',
    color: 'rgb(187, 187, 187)',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgb(61, 61, 61)',
});

export const FavoriteLink = styled(Link)({
    backgroundColor: 'rgb(40, 167, 69)',
    color: 'rgb(255, 255, 255)',
    padding: '6px 10px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'background-color 0.2s ease',
    ':hover': {
        backgroundColor: 'rgb(33, 136, 56)',
    }
}) as typeof Link;

export const StatusMessage = styled('p')({
    color: 'rgb(238, 238, 238)',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: '50px',
});
