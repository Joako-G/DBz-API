import type React from 'react'
import type { pagination, links } from '../interfaces/pagination.type'
import { useLocation } from 'react-router-dom'
import styles from './Pagination.module.css'

interface props {
    currentPage: number,
    pagination?: pagination,
    links?: links,
    handlePageChange: (page: number) => void
}

export function Pagination({ currentPage, pagination, handlePageChange }: props) {
    const location = useLocation()

    const pages = Array.from({ length: pagination?.totalPages ?? 0 }, (_, i) => 1 + i)

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const page = Number(event.currentTarget.dataset.page)

        if (page !== currentPage) {
            handlePageChange(page)
        }
    }

    const buildpageUrl = (page: number) => {
        const params = new URLSearchParams()
        params.set('page', page.toString())
        return `${location.pathname}?${params.toString()}`
    }

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.btn}>
                <button disabled={currentPage === 1} className={currentPage === 1 ? `${styles.isAble}` : `${styles.btnArrow}`} onClick={() => handlePageChange(currentPage - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8899a4" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 18l-6-6 6-6">

                        </path>
                    </svg>
                </button>
                {pages.map((page) => (
                    <a
                        key={page}
                        data-page={page}
                        onClick={handleClick}
                        href={buildpageUrl(page)}
                        className={currentPage === page ? styles.isActive : ''}
                    >
                        {page}
                    </a>
                ))}
                <button disabled={currentPage === pagination?.totalPages} onClick={() => handlePageChange(currentPage + 1)} className={currentPage === pagination?.totalPages ? `${styles.isAble}` : `${styles.btnArrow}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8899a4" strokeWidth="2" strokeLinecap="round">
                        <path d="M9 18l6-6-6-6">
                        </path>
                    </svg>
                </button>

            </div >
        </div>
    )
}