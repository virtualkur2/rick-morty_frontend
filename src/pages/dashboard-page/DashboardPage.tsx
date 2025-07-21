import PageTitle from "../../components/title/PageTitle";
import { CardGrid, Container } from "./DashboardPage.styles";

const DashboardPage = () => {
    return (
        <Container>
            <PageTitle>Rick & Morty Characters</PageTitle>
            <div>Pagination goes here!</div>
            <CardGrid>
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
                <div>...</div>
                <div>Card 20</div>
            </CardGrid>
            <div>Pagination goes here!</div>
        </Container>
    );
}

export default DashboardPage;
