export interface pagination {
    totalItems: number,
    itemCount: number,
    itemPerPage: number,
    totalPages: number,
    currentPage: number
}

export interface links {
    first: string,
    previous: string,
    next: string,
    last: string
}