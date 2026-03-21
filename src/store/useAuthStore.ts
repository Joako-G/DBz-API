import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userSearch } from "../utils/userSearch";
import type { UserInside } from "../interfaces/user.type";
import { useFavoriteStore } from "./useFavoriteStore";

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
    
                if (userFound) {
                    let newUser: UserInside = {
                        ...userFound,
                        favorites: [1, 2, 3]
                    }
                    set({ token: 'FAKE_TOKEN', user: newUser, error: null })
                    useFavoriteStore.setState({ favorites: newUser.favorites })
                } else {
                    set({ token: null, user: null, error: "Error en credenciales" })
                }

            },

            logout: () => set({ token: null, user: null })
        }),
        { name: 'auth-storage' }
    )
)