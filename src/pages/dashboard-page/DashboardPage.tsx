import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import PageTitle from "../../components/title/PageTitle";
import { CardGrid, Container } from "./DashboardPage.styles";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";
import { useGetCharactersQuery } from "../../redux/api/endpoints/characters.endpoint";

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
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
                <div>...</div>
                <div>Card 20</div>
            </CardGrid>
            <Pagination currentPage={currentPage}  totalPages={totalPages} onPageChange={handlePageChange} />
        </Container>
    );
}

export default DashboardPage;
