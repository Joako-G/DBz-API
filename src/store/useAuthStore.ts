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
    login: (username: string, password: string) => Promise<void>;
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,

            user: null,

            error: null,

            setToken: (token) => set({ token }),

            login: async (username, password) => {

                const userFound = await userSearch({ username, password })
                console.log('UserFound: ', userFound)


                if (userFound) {
                    set({ token: 'FAKE_TOKEN', user: userFound, error: null })
                    useFavoriteStore.setState({ favorites: userFound.favorites })
                } else {
                    set({ token: null, user: null, error: "Error en credenciales" })
                }

            },

            logout: () => {
                const { clearFavorite } = useFavoriteStore.getState()
                set({ token: null, user: null })
                clearFavorite()
            }


        }),
        {
            name: 'auth-storage',
            onRehydrateStorage: () => (state) => {
                if (state?.user?.favorites) {
                    useFavoriteStore.setState({ favorites: state.user.favorites })
                }
            }
        }
    )
)