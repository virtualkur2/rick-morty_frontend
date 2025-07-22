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
import { CharacterFilterOptions, CharacterStatus, type CharacterFilterType } from "../../redux/api/dtos/character.dto";
import type { FilterOption } from "../../components/filter/Filter";
import Filter from "../../components/filter/Filter";
import type { CharactersRequestDto } from "../../redux/api/dtos/characters-request.dto";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const { token, user } = useSelector(authSelector);
    const [addFavorite, { isLoading: isAddingFavorite }] = useAddFavoriteMutation();
    const [removeFavorite, { isLoading: isRemovingFavorite }] = useRemoveFavoriteMutation();
    const [filterType, setFilterType] = useState<'none' | CharacterFilterType>('none');
    const [filterValue, setFilterValue] = useState('');
    const [filterRequestValue, setFilterRequestValue] = useState<string>();

    const filterOptions: FilterOption[] = [
        {label: 'None', value: 'none'},
        ...CharacterFilterOptions,
    ];

    const isAdmin = user?.role === UserRole.ADMIN;

    useEffect(() => {
        if (!token) {
            navigate(APP_ROUTES.login);
        }
    }, [token, navigate]);

    const queryParams: CharactersRequestDto = {
        page: currentPage,
        name: filterType === 'name' && filterRequestValue ? filterRequestValue : undefined,
        species: filterType === 'species' && filterRequestValue ? filterRequestValue : undefined,
        status: filterType === 'status' && filterRequestValue
            ? CharacterStatus[filterRequestValue.toUpperCase() as keyof typeof CharacterStatus]
            : undefined,
    }

    const {
        data: charactersData,
    } = useGetCharactersQuery(queryParams);

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

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value as 'none' | CharacterFilterType);
        setFilterValue(''); // Clear value when filter type changes
        setCurrentPage(1); // Reset to first page on filter type change
      };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value);
    };

    const applyFilter = () => {
        setCurrentPage(1);
        if(filterValue) {
            setFilterRequestValue(filterValue);
        }
    };

    const clearFilter = () => {
        setFilterType('none');
        setFilterValue('');
        setFilterRequestValue(undefined);
        setCurrentPage(1);
    };

    const totalPages = charactersData?.info?.pages || 1;
    
    return (
        <Container>
            <PageTitle>Rick & Morty Characters</PageTitle>
            <Filter
                filterType={filterType}
                filterValue={filterValue}
                options={filterOptions}
                handleFilterChange={handleFilterChange}
                handleValueChange={handleValueChange}
                applyFilter={applyFilter}
                clearFilter={clearFilter}
            />
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
