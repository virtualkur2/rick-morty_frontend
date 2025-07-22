import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { useGetUserFavoritesQuery } from "../../redux/api/endpoints/users.endpoint";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { APP_ROUTES } from "../../constants";
import { UserRole } from "../../types/user-role.type";
import { Container, FavoriteCard, FavoriteDetails, FavoriteImage, FavoriteName, GoBackButton, StatusMessage } from "./UserFavoritesPage.styles";
import PageTitle from "../../components/title/PageTitle";

const UserFavoritesPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();
    const { user: currentUser } = useSelector(authSelector);
    const {
        data: favorites,
        isLoading,
        isError,
        error,
      } = useGetUserFavoritesQuery(userId ?? skipToken);
 
    useEffect(() => {
        if (currentUser?.role !== UserRole.ADMIN) {
            navigate(APP_ROUTES.unauthorized);
        }
    }, [currentUser, navigate]);

    if (!userId) {
        return <StatusMessage>User ID not provided.</StatusMessage>;
    }

    if (isLoading) {
        return <StatusMessage>Loading user favorites...</StatusMessage>;
    }

    if (isError) {
        return <StatusMessage>Error loading favorites: {JSON.stringify(error)}</StatusMessage>;
    }

    return (
        <Container>
            <GoBackButton to={APP_ROUTES.admin_users}>← Back to User List</GoBackButton>
            <PageTitle>Favorites for User: {userId}</PageTitle>
            {favorites && favorites.length > 0
                ? (
                    favorites.map((fav) => (
                        <FavoriteCard key={fav.favoriteId}>
                            <FavoriteImage src={fav.characterData.image} alt={fav.characterData.name} />
                            <FavoriteName>{fav.characterData.name}</FavoriteName>
                            <FavoriteDetails>ID: {fav.characterId}</FavoriteDetails>
                            <FavoriteDetails>Status: {fav.characterData.status}</FavoriteDetails>
                            <FavoriteDetails>Species: {fav.characterData.species}</FavoriteDetails>
                            <FavoriteDetails>Added: {new Date(fav.addedAt).toLocaleDateString()}</FavoriteDetails>
                        </FavoriteCard>
                    ))
                ) : (
                    <StatusMessage>This user has no favorite characters yet.</StatusMessage>
                )
            }
        </Container>
    );
}

export default UserFavoritesPage;
