export interface Game {
    id: string
    title: string
    status: GameStatus
    genres: string[]
    rating: number
    notes: string
}

export type GameStatus  =
    | 'playing'
    | 'planned'
    | 'stopped'
    | 'dropped'
    | 'done'