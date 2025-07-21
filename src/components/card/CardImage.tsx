import { ImageContainer } from "./CardImage.styles";

export interface CardImageProps{
    src?: string;
    alt?: string;
}

const CardImage = (props: CardImageProps) => <ImageContainer {...props}/>;

export default CardImage;
