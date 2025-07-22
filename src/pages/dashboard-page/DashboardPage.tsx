import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import PageTitle from "../../components/title/PageTitle";
import { CardGrid, Container } from "./DashboardPage.styles";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";
import { useAddFavoriteMutation, useGetCharactersQuery, useRemoveFavoriteMutation } from "../../redux/api/endpoints/characters.endpoint";

import CharacterCard from "../../components/card/CharacterCard";
import { UserRole } from "../../types/user-role.type";

const DashboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    const { token, user } = useSelector(authSelector);
    const [addFavorite, { isLoading: isAddingFavorite }] = useAddFavoriteMutation();
    const [removeFavorite, { isLoading: isRemovingFavorite }] = useRemoveFavoriteMutation();

    const isAdmin = user?.role === UserRole.ADMIN;

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
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onAddFavorite={handleAddFavorite}
                        onRemoveFavorite={handleRemoveFavorite}
                        isAdmin={isAdmin}
                    /> 
                ))}
            </CardGrid>
            <Pagination currentPage={currentPage}  totalPages={totalPages} onPageChange={handlePageChange} />
        </Container>
    );
}

export default DashboardPage;
