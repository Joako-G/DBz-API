export interface User {
    name: string,
    lastname: string,
    username: string,
    password: string

}

export type UserInside = Omit<User, 'password'>

export type UserLogin = Pick<User, "username" | "password">