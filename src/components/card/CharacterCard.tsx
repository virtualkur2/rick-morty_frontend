import { useState } from "react";
import type { CharacterDto } from "../../redux/api/dtos/character.dto";
import StarIcon from "../icons/StarIcon";
import Card from "./Card";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import { CharacterName, CharacterDetails, ActionsContainer, ViewDetailsButton, DetailImage, DetailRow } from "./CharacterCard.styles";
import Modal from "../modal/Modal";

export interface CharacterCardProps {
    character: CharacterDto;
    isAdmin: boolean;
    onRemoveFavorite(favoriteId: string): void;
    onAddFavorite(characterId: number): void;
}

const CharacterCard = ({character, onRemoveFavorite, onAddFavorite, isAdmin}: CharacterCardProps) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    
    const handleOpenModal = () => {
        setShowDetailsModal(true);
    };
    
    const handleCloseModal = () => {
        setShowDetailsModal(false);
    };
    
    return (
        <Card key={character.id}>
            <CardImage src={character.image} alt={character.name} />
            <CardContent>
                <CharacterName>{character.name}</CharacterName>
                <CharacterDetails>Status: {character.status}</CharacterDetails>
                <CharacterDetails>Species: {character.species}</CharacterDetails>
            </CardContent>
            <ActionsContainer>
                {character.favoriteId
                    ? (
                        <StarIcon isFavorite={true} onClick={() => onRemoveFavorite(character.favoriteId!)}/>
                    ):(
                        <StarIcon isFavorite={false} onClick={() => onAddFavorite(character.id)}/>
                    )
                }
                {isAdmin && (
                    <ViewDetailsButton onClick={handleOpenModal}>
                        View Details
                    </ViewDetailsButton>
                )}
            </ActionsContainer>
            {showDetailsModal && (
            <Modal onClose={handleCloseModal} title={character.name}>
                <>
                    <DetailImage src={character.image} alt={character.name} />
                    <DetailRow><strong>ID:</strong> {character.id}</DetailRow>
                    <DetailRow><strong>Status:</strong> {character.status}</DetailRow>
                    <DetailRow><strong>Species:</strong> {character.species}</DetailRow>
                    {character.type && <DetailRow><strong>Type:</strong> {character.type}</DetailRow>}
                    {character.gender && <DetailRow><strong>Gender:</strong> {character.gender}</DetailRow>}
                    {character.origin && <DetailRow><strong>Origin:</strong> {character.origin.name}</DetailRow>}
                    {character.created && <DetailRow><strong>Created:</strong> {character.created}</DetailRow>}
                </>    
            </Modal>
      )}
        </Card>
    );
}

export default CharacterCard;
