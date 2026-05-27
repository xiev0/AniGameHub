import { create } from 'zustand'
import { Anime } from '@/entities/anime/model/types'

type AnimeStore = {
    animeList: Anime[]

    addAnime: (anime: Anime) => void
}

//Я ваще хз как это работает, но это доавбляет и удаляет аниме
export const useAnimeStore = create<AnimeStore>((set) => ({
    animeList: [],

    addAnime: (anime) =>
        set((state) => ({
            animeList: [...state.animeList, anime],
        })),
}))