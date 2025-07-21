import styled from "styled-components";

export interface StarSvgProps {
    $isFavorite?: boolean
}

export const StarSvg = styled.svg<StarSvgProps>(({ $isFavorite }) => ({
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    fill: $isFavorite ? 'rgb(255, 215, 0)' : 'none',
    stroke: 'rgb(255, 215, 0)',
    strokeWidth: 2,
    transition: 'fill 0.3s, stroke 0.3s',
    ':hover': {
        fill: $isFavorite ? '#rgb(255, 165, 0)' : 'rgb(255, 215, 0)',
        stroke: $isFavorite ? 'rgb(255, 165, 0)' : 'rgb(255, 215, 0)',
    }
}));
