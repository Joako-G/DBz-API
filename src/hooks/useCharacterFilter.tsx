import { useEffect, useState } from "react";
import type { character } from "../interfaces/character.types";
import type { pagination, links } from '../interfaces/pagination.type'
import { useSearchParams } from "react-router-dom";

export function useCharacterFilter(CHARS_PER_PAGE: number) {
    const [searchParams, setSearchParams] = useSearchParams()

    const [characters, setCharacters] = useState<character[]>([])
    const [pagination, setPagination] = useState<pagination>()
    const [links, setLinks] = useState<links>()

    const [currentPage, setCurrentPage] = useState<number>(() => {
        const page = Number(searchParams.get('page'))
        return page > 0 ? page : 1
    })

    const [inputText, setInputText] = useState<string>(() => searchParams.get('name') ?? '')
    const [loading, setLoading] = useState(true);

    /**
     * Llamada a la api con los filters correspondientes
     */
    useEffect(() => {
        async function getCharacters() {
            try {
                setLoading(true)

                const params = new URLSearchParams
                const limit = Number(searchParams.get('limit'))

                const charPerPage = limit ? limit : CHARS_PER_PAGE

                if (inputText) params.append('name', inputText)

                params.append('limit', charPerPage.toString())
                params.append('page', currentPage.toString())

                const queryParams = params.toString()


                const response = await fetch(`https://dragonball-api.com/api/characters?${queryParams}`)
                const json = await response.json()

                if (Array.isArray(json)) {
                    // La API devuelve array directo cuando filtra por nombre
                    const newPagination: pagination = {
                        totalItems: json.length,
                        itemCount: charPerPage,
                        itemPerPage: charPerPage,
                        totalPages: Math.ceil(json.length / charPerPage),
                        currentPage: 1
                    }

                    const start = (currentPage - 1) * charPerPage
                    const charactersFiltered = json.slice(start, start + charPerPage)

                    setCharacters(charactersFiltered)
                    setPagination(newPagination)
                    setLinks(undefined)

                } else {
                    setCharacters(json.items)
                    setPagination(json.meta)
                    setLinks(json.links)
                }

            } catch (error) {
                throw new Error('Ha ocurrido un problema inesperado!!!')
            } finally {
                setLoading(false)
            }

        }

        const timer = setTimeout(() => {
            getCharacters()
        }, 1500)

        return () => clearTimeout(timer)
    }, [currentPage, inputText])

    /**
     * Actualiza la url
     */
    useEffect(() => {
        setSearchParams((params) => {
            if (inputText) {
                params.set('name', inputText)
            } else {
                params.delete('name')
            }
            if (currentPage > 1) {
                params.set('page', currentPage.toString())
            } else {
                params.delete('page')
            }

            return params
        })
    }, [currentPage, inputText])

    const onSearchText = (text: string) => {
        setInputText(text)
        setCurrentPage(1)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return {
        characters,
        pagination,
        links,
        loading,
        currentPage,
        inputText,
        handlePageChange,
        onSearchText
    }
}

