import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userSearch } from "../utils/userSearch";
import type { UserInside } from "../interfaces/user.type";

interface AuthState {
    token: string | null;
    user: UserInside | null
    error: string | null
    setToken: (token: string) => void;
    login: (username: string, password: string) => void;
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,

            user: null,

            error: null,

            setToken: (token) => set({ token }),

            login: (username, password) => {

                const userFound = userSearch({ username, password })

                console.log('User: ', userFound)

                if (userFound) {
                    set({ token: 'FAKE_TOKEN', user: userFound, error: null })
                } else {
                    set({ token: null, user: null, error: "Error en credenciales" })
                }

            },

            logout: () => set({ token: null, user: null })
        }),
        { name: 'auth-storage' }
    )
)