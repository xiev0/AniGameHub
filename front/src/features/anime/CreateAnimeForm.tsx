import type { AnimeStatus } from "@/entities/anime/model/types.ts";
import { useState } from "react";
import { useAnimeStore } from "@/entities/anime/model/anime.store.ts";
import "@/styles/createAnimeForm.css";

export default function CreateAnimeForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [rating, setRating] = useState(0);
    const [status, setStatus] = useState("watching");
    const [genres, setGenres] = useState<string[]>(["Action"]);
    const [episodesWatched, setEpisodesWatched] = useState(0);
    const [totalEpisodes, setTotalEpisodes] = useState(0);

    const addAnime = useAnimeStore((state) => state.addAnime);

    const handleSubmit = () => {
        if (!title.trim()) return;
        addAnime({
            id: crypto.randomUUID(),
            title,
            notes: note,
            status,
            genres,
            rating,
            episodesWatched,
            totalEpisodes,
        });
        setIsOpen(false);
        setTitle("");
        setNote("");
        setRating(0);
        setStatus("watching");
        setGenres(["Action"]);
        setEpisodesWatched(0);
        setTotalEpisodes(0);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setIsOpen(false);
    };

    return (
        <>
            <div className="section-header">
                <div className="section-title">Все аниме</div>
                <button
                    className="btn btn-ghost btn-sm caf-trigger-btn"
                    onClick={() => setIsOpen(true)}
                >
                    <span className="caf-plus-icon">＋</span>
                    Добавить аниме
                </button>
            </div>

            {isOpen && (
                <div className="caf-backdrop" onClick={handleBackdropClick}>
                    <div className="caf-modal anim-fade-up">
                        {/* Header */}
                        <div className="caf-header">
                            <div className="caf-header-orb caf-header-orb-1" />
                            <div className="caf-header-orb caf-header-orb-2" />
                            <div className="caf-header-icon">🌸</div>
                            <div className="caf-header-text">
                                <h2 className="caf-title">Добавить аниме</h2>
                                <p className="caf-subtitle">Пополни свою коллекцию</p>
                            </div>
                            <button className="caf-close-btn" onClick={() => setIsOpen(false)}>✕</button>
                        </div>

                        {/* Body */}
                        <div className="caf-body">
                            {/* Title */}
                            <div className="caf-field">
                                <label className="caf-label">Название</label>
                                <div className="caf-input-wrap">
                                    <span className="caf-input-icon">📺</span>
                                    <input
                                        className="caf-input"
                                        placeholder="Введите название аниме..."
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Note */}
                            <div className="caf-field">
                                <label className="caf-label">Заметка</label>
                                <div className="caf-input-wrap">
                                    <span className="caf-input-icon">📝</span>
                                    <input
                                        className="caf-input"
                                        placeholder="Добавь заметку..."
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Status & Genre row */}
                            <div className="caf-row">
                                <div className="caf-field">
                                    <label className="caf-label">Статус</label>
                                    <div className="caf-select-wrap">
                                        <select
                                            className="caf-select"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value as AnimeStatus)}
                                        >
                                            <option value="watching">👁 Смотрю</option>
                                            <option value="completed">✅ Просмотрено</option>
                                            <option value="planned">📌 В планах</option>
                                            <option value="dropped">❌ Брошено</option>
                                            <option value="paused">⏸ Приостановлено</option>
                                        </select>
                                        <span className="caf-select-arrow">▾</span>
                                    </div>
                                </div>

                                <div className="caf-field">
                                    <label className="caf-label">Жанр</label>
                                    <div className="caf-select-wrap">
                                        <select
                                            className="caf-select"
                                            value={genres[0]}
                                            onChange={(e) => setGenres([e.target.value])}
                                        >
                                            <option value="Action">⚔️ Экшен</option>
                                            <option value="Fantasy">🧙 Фэнтези</option>
                                            <option value="Romance">💕 Романтика</option>
                                            <option value="Science Fiction">🚀 Фантастика</option>
                                            <option value="Sport">🏅 Спорт</option>
                                            <option value="Horror">💀 Ужасы</option>
                                            <option value="Comedy">😂 Комедия</option>
                                            <option value="Everyday life">🌸 Повседневность</option>
                                            <option value="Historical">🏯 Исторический</option>
                                            <option value="Furs">🤖 Меха</option>
                                        </select>
                                        <span className="caf-select-arrow">▾</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="caf-field">
                                <label className="caf-label">
                                    Оценка
                                    <span className="caf-rating-value">{rating > 0 ? `${rating}/10` : "—"}</span>
                                </label>
                                <div className="caf-rating-track">
                                    <input
                                        type="range"
                                        className="caf-range"
                                        min={0}
                                        max={10}
                                        step={1}
                                        value={rating}
                                        style={{ '--range-pct': `${rating * 10}%` } as React.CSSProperties}
                                        onChange={(e) => setRating(Number(e.target.value))}
                                    />
                                    <div className="caf-rating-stars">
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <span
                                                key={i}
                                                className={`caf-star ${i < rating ? "caf-star-active" : ""}`}
                                                onClick={() => setRating(i + 1)}
                                            >★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Episodes row */}
                            <div className="caf-row">
                                <div className="caf-field">
                                    <label className="caf-label">Просмотрено серий</label>
                                    <div className="caf-input-wrap">
                                        <span className="caf-input-icon">▶</span>
                                        <input
                                            className="caf-input"
                                            type="number"
                                            min={0}
                                            placeholder="0"
                                            value={episodesWatched || ""}
                                            onChange={(e) => setEpisodesWatched(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <div className="caf-field">
                                    <label className="caf-label">Всего серий</label>
                                    <div className="caf-input-wrap">
                                        <span className="caf-input-icon">🎬</span>
                                        <input
                                            className="caf-input"
                                            type="number"
                                            min={0}
                                            placeholder="0"
                                            value={totalEpisodes || ""}
                                            onChange={(e) => setTotalEpisodes(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Progress bar preview */}
                            {totalEpisodes > 0 && (
                                <div className="caf-progress-wrap">
                                    <div className="caf-progress-bar">
                                        <div
                                            className="caf-progress-fill"
                                            style={{ width: `${Math.min((episodesWatched / totalEpisodes) * 100, 100)}%` }}
                                        />
                                    </div>
                                    <span className="caf-progress-label">
                                        {Math.round(Math.min((episodesWatched / totalEpisodes) * 100, 100))}% просмотрено
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="caf-footer">
                            <button className="caf-btn-cancel" onClick={() => setIsOpen(false)}>
                                Отмена
                            </button>
                            <button className="caf-btn-submit" onClick={handleSubmit} disabled={!title.trim()}>
                                <span>🌸</span>
                                Добавить в коллекцию
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}