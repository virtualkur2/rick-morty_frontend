import styled from "styled-components";

export const FilterContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '30px',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgb(42, 42, 42)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '800px',
    boxSizing: 'border-box',
});

export const FilterGroup = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '5px',
});

export const FilterLabel = styled('label')({
    color: 'rgb(238, 238, 238)',
    fontSize: '0.9rem',
    marginBottom: '5px,'
});

export const FilterSelect = styled('select')({
    padding: '10px',
    border: '1px solid rgb(68, 68, 68)',
    borderRadius: '5px',
    backgroundColor: 'rgb(51, 51, 51)',
    color: 'rgb(238, 238, 238)',
    fontSize: '1rem',
    minWidth: '120px',
    ':focus': {
        outline: 'none',
        borderColor: 'rgb(100, 108, 255)',
    },
});

export const FilterInput = styled('input')({
    padding: '10px',
    border: '1px solid rgb(68, 68, 68)',
    borderRadius: '5px',
    backgroundColor:'rgb(51, 51, 51)',
    color: 'rgb(238, 238, 238)',
    fontSize: '1rem',
    minWidth: '150px',
    ':focus': {
        outline: 'none',
        borderColor: 'rgb(100, 108, 255)',
    },
});

export const FilterButton = styled('button')({
    backgroundColor: 'rgb(0, 123, 255)',
    color: 'rgb(255, 255, 255)',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.2s',
    ':hover': {
        backgroundColor: 'rgb(0, 86, 179)',
    },
    ':disabled': {
        backgroundColor: 'rgb(85, 85, 85)',
        cursor: 'not-allowed',
    },
});

export const ClearFilterButton = styled(FilterButton)({
    backgroundColor: 'rgb(220, 53, 69)',
    ':hover': {
        backgroundColor: 'rgb(200, 35, 51)',
    },
});
