import type { User, UserInside } from '../interfaces/user.type'
import { getUserByUsername } from '../services/serviceChar'

interface props {
    username: string
    password: string
}

export async function userSearch({ username, password }: props): Promise<UserInside | undefined> {

    const users: User[] = await getUserByUsername(username)

    const userFound: UserInside | undefined = users.find((u) => (username === u.username && password === u.password))

    if (userFound) {
        const userInside: UserInside = {
            id: userFound.id,
            name: userFound.name,
            lastname: userFound.lastname,
            username: userFound.username,
            favorites: userFound.favorites
        }

        return userInside
    }

    return undefined
}