import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import PageTitle from "../../components/title/PageTitle";
import { CardGrid, CharacterDetails, CharacterName, Container } from "./DashboardPage.styles";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";
import { useGetCharactersQuery } from "../../redux/api/endpoints/characters.endpoint";
import Card from "../../components/card/Card";
import CardImage from "../../components/card/CardImage";
import CardContent from "../../components/card/CardContent";

const DashboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 20; // Rick & Morty API's default limit

    const navigate = useNavigate();
    const { token } = useSelector(authSelector);

    useEffect(() => {
        if (!token) {
            navigate(APP_ROUTES.login);
        }
    }, [token, navigate]);

    const {
        data: charactersData,
        // isLoading: isLoadingCharacters,
        // isError: isErrorCharacters,
        // error: charactersError,
    } = useGetCharactersQuery({ page: currentPage});

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= (charactersData?.info?.pages || 1)) {
            setCurrentPage(page);
        }
    };

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
                    </Card>
                ))}
            </CardGrid>
            <Pagination currentPage={currentPage}  totalPages={totalPages} onPageChange={handlePageChange} />
        </Container>
    );
}

export default DashboardPage;
