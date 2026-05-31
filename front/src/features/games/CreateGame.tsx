import {useGameStore} from "@/entities/games/model/game.store.ts";
import {useState} from "react";

export default function CreateGame() {

    const addGame = useGameStore((state) => state.addGame);

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState('playing')
    const [genres, setGenres] = useState<string[]>(["RPG"]);
    const [rating, setRating] = useState();
    const [hours, setHours] = useState()
    return (
        <>
            <div className="section-header">
                <div className="section-title">Библиотека</div>
                <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm">⊞ Сетка</button>
                    <button className="btn btn-ghost btn-sm">≡ Список</button>
                    <button className="btn btn-primary btn-sm" onClick={() => setIsOpen(true)}>+ Добавить</button>

                    {
                        isOpen && (
                            <div>
                                FORM
                                <input
                                    placeholder="Введите название"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <input type="text" placeholder='Введите заметку' value={notes} onChange={(e) => setNotes(e.target.value)}/>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="playing">Играю</option>
                                    <option value="planned">В планах</option>
                                    <option value="stopped">Приостановлено</option>
                                    <option value="dropped">Брошено</option>
                                    <option value="done">Пройдено</option>
                                </select>
                                <select name="genres" value={genres[0]} onChange={(e) => setGenres([e.target.value])}>
                                    <option value="Экшен">Экшен</option>
                                    <option value="Шутер">Шутер</option>
                                    <option value="RPG">RPG</option>
                                    <option value="Приключение">Приключение</option>
                                    <option value="Стратегия">Стратегия</option>
                                    <option value="Соулслайк">Соулслайк</option>
                                    <option value="Открытый мир">Открытый мир</option>
                                    <option value="Хоррор">Хоррор</option>
                                    <option value="Выживание">Выживание</option>
                                    <option value="Платформер">Платформер</option>
                                    <option value="Рогалик">Рогалик</option>
                                    <option value="Симулятор">Симулятор</option>
                                    <option value="Визуальная новелла">Визуальная новелла</option>
                                    <option value="Dark Fantasy">Dark Fantasy</option>
                                </select>
                                <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} placeholder="Введите оценку"/>
                                <input type="number" placeholder="Сколько часов сыграли?" value={hours} onChange={(e) => setHours(Number(e.target.value))}/>
                                <button
                                    onClick={() => {
                                        rating: Number(rating); hours: Number(hours), addGame({
                                            id: crypto.randomUUID(),
                                            title,
                                            notes,
                                            status,
                                            genres,
                                            rating,
                                            hours,
                                        })

                                        setIsOpen(false)
                                        setTitle('')
                                    }}
                                >
                                    Добавить
                                </button>

                                <button onClick={() => setIsOpen(false)}>Закрыть</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}