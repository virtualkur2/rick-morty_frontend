import { StarSvg } from "./StarIcon.styles";

export interface StarIconProps {
    isFavorite: boolean;
    onClick(): void;
}

const StarIcon = (props: StarIconProps) => (
    <StarSvg
        $isFavorite={props.isFavorite}
        onClick={props.onClick}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 .587l3.642 7.369 8.128 1.18 -5.872 5.727 1.388 8.106L12 18.896l-7.369 3.873 1.388-8.106L.23 9.136l8.128-1.18L12 .587z"/>
    </StarSvg>
);

export default StarIcon;
