import type { User, UserInside } from "../interfaces/user.type"

const BASE_URL = 'https://65b5996d41db5efd2867ca88.mockapi.io/api/users'

export const getUserById = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)

        if (!response.ok) {
            throw new Error('Ha ocurrido un error inesperado')
        }

        const data: UserInside = await response.json()

        return data

    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')
    }
}

// endpoint para crear un usuario nuevo
export const newUsers = async (user: User) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!response.ok) {
            throw new Error('Ha ocurrido un error inesperado')
        }

        const data = await response.json()

        return data

    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')
    }
}

// endpoint para obtener todos los usuarios
export const getUserByUsername = async (username: string) => {
    try {
        const response = await fetch(`${BASE_URL}?${username}`)

        if (!response.ok) {
            throw new Error('Usuario no encontrado')
        }

        const data: User[] = await response.json()

        return data

    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')
    }
}

//endpoint para actualizar lsita de favoritos
export const updateFavorite = async (id: string, favorites: number[]) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favorites: favorites
            })
        })

        if (!response.ok) {
            throw new Error('Usuario no encontrado')
        }

        return response.json()

    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')
    }
}
