import { useEffect } from 'react'
import { Characters } from '../components/Characters'
import { Form } from '../components/Form'
import { Pagination } from '../components/Pagination'
import { useCharacterFilter } from '../hooks/useCharacterFilter'
import { useAuthStore } from '../store/useAuthStore'
import { useFavoriteStore } from '../store/useFavoriteStore'

import styles from './ListCharacters.module.css'

const CHARS_PER_PAGE = 8

export function ListCharacters() {
    const {
        characters,
        pagination,
        loading,
        currentPage,
        inputText,
        handlePageChange,
        onSearchText
    } = useCharacterFilter(CHARS_PER_PAGE)
    const { user } = useAuthStore()
    const { favorites } = useFavoriteStore()

    useEffect(() => {
        if (user) {
            if (favorites.length <= user.favorites.length) {
                useFavoriteStore.setState({ favorites: user.favorites })
            }
        }
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Personajes</h1>
            <Form initialText={inputText} onSearchText={onSearchText} />

            {
                loading ?
                    'Cargando personajes'
                    :
                    characters.length > 0 ? (
                        <>
                            <Characters characters={characters} />
                            <Pagination currentPage={currentPage} pagination={pagination} handlePageChange={handlePageChange} />

                        </>
                    ) : <h1 className={styles.notFound}>No hay Personajes</h1>
            }
        </div>
    )
}