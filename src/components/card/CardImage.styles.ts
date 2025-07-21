import styled from "styled-components";

export const ImageContainer = styled('img')({
    width: '100px',
    height: '100px',
    borderRadius: '50%', /* Circular image */
    objectFit: 'cover',
    border: '2px solid rgb(100, 108, 255)',
    flexShrink: 0, /* Prevent image from shrinking */
});
