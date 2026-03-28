import { Spinner } from '@/components/Spinner'
import { Characters } from '../components/Characters'
import { Form } from '../components/Form'
import { Pagination } from '../components/Pagination'
import { useCharacterFilter } from '../hooks/useCharacterFilter'

import styles from './ListCharacters.module.css'
import { useEffect, useState } from 'react'

const CHARS_PER_PAGE = 8

export default function ListCharacters() {
    const [showSpinner, setShowSpinner] = useState(true)

    const {
        characters,
        pagination,
        currentPage,
        inputText,
        handlePageChange,
        onSearchText
    } = useCharacterFilter(CHARS_PER_PAGE)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false)
        }, 1000)

        return () =>{
             clearTimeout(timer)
             setShowSpinner(true)
        }
    }, [currentPage, inputText])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Personajes</h1>
            <Form initialText={inputText} onSearchText={onSearchText} />

            {
                showSpinner ?
                    <Spinner />
                    :
                    characters.length > 0 ? (
                        <>
                            <Characters characters={characters} />
                            <Pagination currentPage={currentPage} pagination={pagination} handlePageChange={handlePageChange} />

                        </>
                    ) : (
                        <div className={styles.notFound}>
                            <h1 >No existen personajes con ese nombre</h1>
                        </div>
                    )
            }
        </div>
    )
}