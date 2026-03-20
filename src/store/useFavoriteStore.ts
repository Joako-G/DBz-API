import { create } from "zustand";

interface FavoriteState {
    favorites: number[];
    addFavorite: (charId: number) => void;
    removeFavorite: (charId: number) => void;
    isFavorite: (charId: number) => boolean;
    toggleFavorite: (charId: number) => void;
    countFavorite: () => void;
    clearFavorite: () => void
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
    favorites: [],
    addFavorite: (charId) => {
        set((state) => (
            {
                favorites: state.favorites.includes(charId) ? state.favorites : [...state.favorites, charId]
            }
        ))
    },

    removeFavorite: (charId) => {
        set((state) => (
            {
                favorites: state.favorites.filter((id) => charId !== id)
            }
        ))
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
    }
}))