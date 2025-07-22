import { ClearFilterButton, FilterButton, FilterContainer, FilterGroup, FilterInput, FilterLabel, FilterSelect } from "./Filter.styles";

export interface FilterOption  {
    label: string;
    value: string;
}

export interface FilterProps {
    options: FilterOption[];
    filterType: string;
    filterValue: string;
    handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    handleValueChange(e: React.ChangeEvent<HTMLInputElement>): void;
    applyFilter(): void;
    clearFilter(): void;
}

const Filter = ({
    options,
    filterType,
    filterValue,
    handleFilterChange,
    handleValueChange,
    applyFilter,
    clearFilter,
}: FilterProps) => {
    return (
        <FilterContainer>
            <FilterGroup>
                <FilterLabel htmlFor="filterType">Filter By:</FilterLabel>
                <FilterSelect id="filterType" value={filterType} onChange={handleFilterChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </FilterSelect>
            </FilterGroup>
            <FilterGroup>
                <FilterLabel htmlFor="filterValue">Value:</FilterLabel>
                <FilterInput
                    id="filterValue"
                    type="text"
                    placeholder={`Enter ${filterType !== 'none' ? filterType : 'filter'} value`}
                    value={filterValue}
                    onChange={handleValueChange}
                    disabled={filterType === 'none'}
                />
            </FilterGroup>
            <FilterButton onClick={applyFilter} disabled={filterType === 'none' || !filterValue}>
                Apply Filter
            </FilterButton>
            <ClearFilterButton onClick={clearFilter} disabled={filterType === 'none' && !filterValue}>
                Clear Filter
            </ClearFilterButton>
        </FilterContainer>
    );
}

export default Filter;
