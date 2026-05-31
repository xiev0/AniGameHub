export interface Game {
    id: string
    title: string
    notes: string
    status: GameStatus
    genres: string[]
    rating: number
}

export type GameStatus  =
    | 'playing'
    | 'planned'
    | 'stopped'
    | 'dropped'
    | 'done'