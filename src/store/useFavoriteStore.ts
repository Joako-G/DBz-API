import { create } from "zustand";
import { useAuthStore } from "./useAuthStore";
import { updateFavorite } from "../services/serviceChar";
import type { UserInside } from "../interfaces/user.type";

interface FavoriteState {
    favorites: number[];
    addFavorite: (charId: number) => Promise<void>;
    removeFavorite: (charId: number) => Promise<void>;
    isFavorite: (charId: number) => boolean;
    toggleFavorite: (charId: number) => void;
    countFavorite: () => void;
    clearFavorite: () => void
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
    favorites: [],
    addFavorite: async (charId) => {
        set((state) => (
            {
                favorites: state.favorites.includes(charId) ? state.favorites : [...state.favorites, charId]
            }
        ))

        const { user } = useAuthStore.getState()
        const favorites = get().favorites

        if (user?.id) {
            const data: UserInside = await updateFavorite(user.id, favorites)

            useAuthStore.setState({
                user: {
                    ...user,
                    favorites: data.favorites
                }
            })

        }

    },

    removeFavorite: async (charId) => {
        set((state) => (
            {
                favorites: state.favorites.filter((id) => charId !== id)
            }
        ))

        const { user } = useAuthStore.getState()
        const favorites = get().favorites

        if (user?.id) {
            const data: UserInside = await updateFavorite(user.id, favorites)

            useAuthStore.setState({
                user: {
                    ...user,
                    favorites: data.favorites
                }
            })

        }

    },

    isFavorite: (charId) => {
        const { favorites } = get()
        return favorites.includes(charId)
    },

    toggleFavorite: (charId) => {
        const { isFavorite, addFavorite, removeFavorite } = get()
        isFavorite(charId) ? removeFavorite(charId) : addFavorite(charId)
    },

    countFavorite: () => {
        get().favorites.length
    },

    clearFavorite: () => {
        set({ favorites: [] })
    },


}))