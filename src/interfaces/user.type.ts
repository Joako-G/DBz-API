export interface User {
    id?: string,
    name: string,
    lastname: string,
    username: string,
    password: string,
    favorites: number[]
}

export type UserInside = Omit<User, 'password'>

export type UserLogin = Pick<User, "username" | "password">