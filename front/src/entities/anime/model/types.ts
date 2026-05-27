export interface Anime {
    id: string
    title: string
    notes: string
    status: AnimeStatus
    genres: string[]
    rating: number
    episodesWatched: number
    totalEpisodes: number
}

export type AnimeStatus =
    | 'watching'
    | 'completed'
    | 'planned'
    | 'dropped'
    | 'paused'