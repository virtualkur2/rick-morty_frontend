import { Container, PageButton, PageNumberText } from "./Pagination.styles";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange(page: number): void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const pageNumbers: (number | string)[] = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for(let i = startPage; i <= endPage; ++i) {
        pageNumbers.push(i);
    }

    if(startPage > 1) {
        pageNumbers.unshift(1);
        if (startPage > 2) {
            pageNumbers.splice(1, 0, '...');
        }
    }

    if(endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
    }

    return (
        <Container>
            <PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >Previous</PageButton>
            {pageNumbers.map((page, index) =>
                typeof page === 'number'
                    ? (
                        <PageButton
                            key={`${page}-${index}`}
                            onClick={() => onPageChange(page)}
                            $isActive={page === currentPage}
                            disabled={page === currentPage}
                        >
                            {page}
                        </PageButton>
                    ): (
                        <PageNumberText key={`${page}-${index}`}>{page}</PageNumberText>
                    )
            )}
            <PageButton 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >Next</PageButton>
        </Container>
    );
}

export default Pagination;
