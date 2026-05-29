import type {AnimeStatus} from "@/entities/anime/model/types.ts";
import {useState} from "react";
import {useAnimeStore} from "@/entities/anime/model/anime.store.ts";


export default function CreateAnimeForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [rating, setRating] = useState(0)
    const [status, setStatus] = useState('watching')
    const [genres, setGenres] = useState<string[]>(['Action'])
    const [episodesWatched, setEpisodesWatched] = useState(0)
    const [totalEpisodes, setTotalEpisodes] = useState(0)

    const addAnime = useAnimeStore(
        (state) => state.addAnime
    )
    return (
        <>
            <div className="section-header">
                <div className="section-title">Все аниме</div>
                <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setIsOpen(true)}
                >
                    + Добавить
                </button>

                {/*Форма добавления*/}
                {isOpen && (
                    <div>FORM<input placeholder="Введите название" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input placeholder="Введите заметку" value={note} onChange={(e) => setNote(e.target.value)}/>
                        <select name="status" value={status} onChange={(e) => setStatus(e.target.value as AnimeStatus)}>
                            <option value="watching">Смотрю</option>
                            <option value="completed">Просмотренно</option>
                            <option value="planned">В планах</option>
                            <option value="dropped">Брошено</option>
                            <option value="paused">Приостановлено</option>
                        </select>
                        <select value={genres[0]} onChange={(e) => setGenres([e.target.value])}>
                            <option value="Action">Экшен</option>
                            <option value="Fantasy">Фентези</option>
                            <option value="Romance">Романтика</option>
                            <option value="Science Fiction">Научная фантастика</option>
                            <option value="Sport">Спорт</option>
                            <option value="Horror">Ужасы</option>
                            <option value="Comedy">Комедия</option>
                            <option value="Everyday life">Повседневность</option>
                            <option value="Historical">Исторический</option>
                            <option value="Furs">Меха</option>
                        </select>
                        <input placeholder="Оценка" value={rating} onChange={(e) => setRating(Number(e.target.value))}/>
                        <input placeholder="Сколько серий посмотрели" value={episodesWatched} onChange={(e) => setEpisodesWatched(Number(e.target.value))}/>
                        <input placeholder="Всего серий" value={totalEpisodes} onChange={(e) => setTotalEpisodes(Number(e.target.value))}/>
                        <button onClick={() => {addAnime({
                            id: crypto.randomUUID(),
                            title,
                            notes: '',
                            status,
                            genres,
                            rating,
                            episodesWatched,
                            totalEpisodes,
                        })

                            setIsOpen(false)
                            setTitle('')
                        }}
                        >Добавить</button>
                        <button onClick={() => setIsOpen(false)}>Закрыть</button>
                    </div>
                )
                }
            </div>
        </>
    )
}