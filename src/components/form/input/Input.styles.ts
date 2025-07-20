import styled from "styled-components";

export const StyledInput = styled('input')({
    width: '70%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid rgb(68, 68, 68)',
    borderRadius: '5px',
    backgroundColor: 'rgb(51, 51, 51)',
    color: 'rgb(238, 238, 238)',
    fontSize: '1rem',
    ':focus': {
        outline: 'none',
        borderColor: 'rgb(100, 108, 255)',
    },
});
