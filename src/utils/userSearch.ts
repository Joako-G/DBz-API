import users from '../data/users.json'
import type { UserInside } from '../interfaces/user.type'

interface props {
    username: string
    password: string
}

export function userSearch({ username, password }: props): UserInside | undefined {
    const userFound: UserInside | undefined = users.find((u) => (username === u.username && password === u.password))

    if (userFound) {
        const userInside: UserInside = {
            name: userFound.name,
            lastname: userFound.lastname,
            username: userFound.username
        }

        return userInside
    }

    return undefined
}