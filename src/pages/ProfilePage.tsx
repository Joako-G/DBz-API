import { useEffect, useState } from "react"
import { Profile } from "../components/Profile"
import { useAuthStore } from "../store/useAuthStore"
import { useFavoriteStore } from "../store/useFavoriteStore"
import type { character } from "../interfaces/character.types"

export default function ProfilePage() {
    const { user } = useAuthStore()
    const { favorites } = useFavoriteStore()
    const [favoriteChars, setFavoriteChars] = useState<character[]>([])

    useEffect(() => {
        async function getCharacterId(id: number) {
            try {
                const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
                const json = response.json()
                return json
            } catch (error) {
                throw new Error('Ha ocurrido un problema inesperad!!!')
            }
        }

        async function fetchFavorites() {
            const characters = await Promise.all(
                favorites.map((fav) => getCharacterId(fav))
            )
            if (characters) setFavoriteChars(characters)
        }

        if (favorites.length > 0) fetchFavorites()
    }, [favorites])



    return (
        <>
            <Profile user={user!} favorites={favoriteChars} />
        </>
    )
}