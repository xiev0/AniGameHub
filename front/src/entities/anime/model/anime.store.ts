import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'

import type { Anime } from './types'

type AnimeStore = {
    animeList: Anime[]

    addAnime: (anime: Anime) => void
    removeAnime: (id: string) => void
}

const initialAnime: Anime[] = [
    {
        id: '1',
        title: 'Фрирен',
        notes: '',
        status: 'planned',
        genres: ['Фэнтези'],
        rating: 10,
        episodesWatched: 0,
        totalEpisodes: 12,
    },
]

export const useAnimeStore = create<AnimeStore>()(
    persist(
        (set) => ({
            animeList: initialAnime,

            addAnime: (anime) =>
                set((state) => ({
                    animeList: [...state.animeList, anime],
                })),

            removeAnime: (id) =>
                set((state) => ({
                    animeList: state.animeList.filter(
                        (anime) => anime.id !== id
                    ),
                })),
        }),

        {
            name: 'anime-storage',
        }
    )
)