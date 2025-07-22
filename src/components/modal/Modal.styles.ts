import styled from "styled-components";

export const ModalOverlay = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
});

export const ModalContent = styled('div')({
    backgroundColor: 'rgb(42, 42, 42)',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    color: 'rgb(238, 238, 238)',
    textAlign: 'left',
});

export const CloseButton = styled('div')({
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    color: 'rgb(187, 187, 187)',
    cursor: 'pointer',
    padding: '5px',
    lineHeight: 1,
    ':hover': {
        color: 'rgb(255, 255, 255)',
    }
});

export const ModalTitle = styled('h2')({
    color: 'rgb(100, 108, 255)',
    marginTop: 0,
    marginBottom: '20px',
    textAlign: 'center',
    borderBottom: '1px solid rgb(68, 68, 68)',
    paddingBottom: '10px',
});

