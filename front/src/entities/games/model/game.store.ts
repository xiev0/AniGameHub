import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'

import type { Game } from './types'

type GameStore = {
    gameList: Game[]

    addGame: (game: Game) => void
    removeGame: (id: string) => void
}

const initialGame: Game[] = [
    {
        id: '1',
        title: 'Elden Ring',
        notes: '',
        status: 'planned',
        genres: ['SoulsLike'],
        rating: 10,
        hours: 0,
    },
]

export const useGameStore = create<GameStore>()(
    persist(
        (set) => ({
            gameList: initialGame,

            addGame: (Game) =>
                set((state) => ({
                    gameList: [...state.gameList, Game],
                })),

            removeGame: (id) =>
                set((state) => ({
                    gameList: state.gameList.filter(
                        (Game) => Game.id !== id
                    ),
                })),
        }),

        {
            name: 'anime-storage-v2',
        }
    )
)