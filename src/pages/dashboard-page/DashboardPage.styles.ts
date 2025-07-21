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
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: '20px 0',
});
