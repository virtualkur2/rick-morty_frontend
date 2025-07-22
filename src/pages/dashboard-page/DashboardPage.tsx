import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import PageTitle from "../../components/title/PageTitle";
import { CardGrid, CharacterDetails, CharacterName, Container, FavoriteIconWrapper } from "./DashboardPage.styles";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";
import { useAddFavoriteMutation, useGetCharactersQuery, useRemoveFavoriteMutation } from "../../redux/api/endpoints/characters.endpoint";
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardContent from "../../components/card/CardContent";
import StarIcon from "../../components/icons/StarIcon";

const DashboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    const { token } = useSelector(authSelector);
    const [addFavorite, { isLoading: isAddingFavorite }] = useAddFavoriteMutation();
    const [removeFavorite, { isLoading: isRemovingFavorite }] = useRemoveFavoriteMutation();

    useEffect(() => {
        if (!token) {
            navigate(APP_ROUTES.login);
        }
    }, [token, navigate]);

    const {
        data: charactersData,
    } = useGetCharactersQuery({ page: currentPage});

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= (charactersData?.info?.pages || 1)) {
            setCurrentPage(page);
        }
    };

    const handleAddFavorite = (characterId: number) => {
        const attemptAddFavorite = async (characterId: number) => {
            await addFavorite({ characterId });
            }
        if(!(isAddingFavorite && isRemovingFavorite)) {
            attemptAddFavorite(characterId);
        }
    }

    const handleRemoveFavorite = (favoriteId: string) => {
        const attemptRemoveFavorite = async (favoriteId: string) => {
            await removeFavorite(favoriteId);
        }
        if(!(isAddingFavorite && isRemovingFavorite)) {
            attemptRemoveFavorite(favoriteId);
        }
    }

    const totalPages = charactersData?.info?.pages || 1;
    
    return (
        <Container>
            <PageTitle>Rick & Morty Characters</PageTitle>
            <Pagination currentPage={currentPage}  totalPages={totalPages} onPageChange={handlePageChange} />
            <CardGrid>
                {charactersData?.results.map((character) => (
                    <Card key={character.id}>
                        <CardImage src={character.image} alt={character.name} />
                        <CardContent>
                            <CharacterName>{character.name}</CharacterName>
                            <CharacterDetails>Status: {character.status}</CharacterDetails>
                            <CharacterDetails>Species: {character.species}</CharacterDetails>
                        </CardContent>
                        <FavoriteIconWrapper>
                            {character.favoriteId
                                ? (
                                    <StarIcon isFavorite={true} onClick={() => handleRemoveFavorite(character.favoriteId!)}/>
                                ):(
                                    <StarIcon isFavorite={false} onClick={() => handleAddFavorite(character.id)}/>
                                )
                            }
                        </FavoriteIconWrapper>
                    </Card>
                ))}
            </CardGrid>
            <Pagination currentPage={currentPage}  totalPages={totalPages} onPageChange={handlePageChange} />
        </Container>
    );
}

export default DashboardPage;
