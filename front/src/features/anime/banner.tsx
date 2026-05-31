import StatCard from "@/components/StatCard.tsx";
import {useState} from "react";
import {useAnimeStore} from "@/entities/anime/model/anime.store.ts";

export default function AnimeBanner() {

    const animeList = useAnimeStore(
        (state) => state.animeList
    )

    const animeCount = animeList.length;
    const watchFilter = animeList.filter(anime => anime.status === 'watching').length
    const completedFilter = animeList.filter(anime => anime.status === 'completed').length
    const plannedFilter = animeList.filter(anime => anime.status === 'planned').length
    const episodesWatchedFilter = animeList.reduce((sum, anime) => sum + anime.episodesWatched, 0);
    const positiveNumbers = animeList.filter(anime => anime.rating > 0);
    const sumRating = positiveNumbers.reduce((acc, anime) => acc + anime.rating, 0)
    const avgRating = sumRating / positiveNumbers.length;
    const resultAvgRating = avgRating.toFixed(1)

    const [activeStatus, setActiveStatus] = useState('all')
    const [activeGenre, setActiveGenre] = useState('allg')

    const animeTabs = [
        { label: 'Все', value: 'all' },
        { label: 'Смотрю', value: 'watching' },
        { label: 'Просмотрено', value: 'completed' },
        { label: 'В планах', value: 'planned' },
        { label: 'Брошено', value: 'dropped' },
        { label: 'Приостановлено', value: 'paused'}
    ]

    const genreTags = [
        {label: 'Все', value: 'allg'},
        {label: 'Экшен', value: 'Action'},
        {label: 'Фэнтези', value: 'Fantasy'},
        {label: 'Романтика', value: 'Romance'},
        {label: 'Научная Фантастика', value: 'Science Fiction'},
        {label: 'Спорт', value: 'Sport'},
        {label: 'Ужасы', value: 'Horror'},
        {label: 'Комедия', value: 'Comedy'},
        {label: 'Повседневность', value: 'Everyday life'},
        {label: 'Исторический', value: 'Historical'},
        {label: 'Меха', value: 'Furs'}
    ]
    return (
        <>
            <div className="hero" style={{
                background: 'linear-gradient(135deg,#1a0a2e 0%,#0d1040 50%,#1a0a3a 100%)',
                minHeight: 200,
                marginBottom: 28,
            }}>
                <div className="hero-orbs">
                    <div className="hero-orb hero-orb-1" style={{ background: 'radial-gradient(circle,#f472b6,transparent)' }} />
                    <div className="hero-orb hero-orb-2" style={{ background: 'radial-gradient(circle,#a78bfa,transparent)' }} />
                    <div className="hero-orb hero-orb-3" style={{ background: 'radial-gradient(circle,#6c8ef7,transparent)', opacity: 0.15 }} />
                </div>
                <div className="hero-stats">
                    <div className="hero-stat"><div className="hero-stat-value">{animeCount}</div><div className="hero-stat-label">Всего</div></div>
                    <div className="hero-stat"><div className="hero-stat-value">{watchFilter}</div><div className="hero-stat-label">Смотрю</div></div>
                    <div className="hero-stat"><div className="hero-stat-value">{completedFilter}</div><div className="hero-stat-label">Готово</div></div>
                </div>
                <div className="hero-content">
                    <div className="hero-eyebrow">Библиотека аниме</div>
                    <h2 className="hero-title" style={{ fontSize: '2rem' }}>
            <span style={{ background: 'var(--gradient-anime)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Твой мир аниме
            </span>
                    </h2>
                    <p className="hero-desc" style={{ marginBottom: 0 }}>247 серий просмотрено в этом месяце · 4 онгоинга</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid-stats stagger" style={{ marginBottom: 32 }}>
                <StatCard icon="🎌" value={animeCount}   label="Всего аниме"      accent="pink" />
                <StatCard icon="▶️" value={watchFilter}   label="Смотрю"         accent="violet" trend="up" trendVal="+3" />
                <StatCard icon="✅" value={completedFilter}   label="Просмотрено"        accent="green" />
                <StatCard icon="📋" value={plannedFilter}    label="В планах"    accent="primary" />
                <StatCard icon="⭐" value={resultAvgRating}  label="Средняя оценка"        accent="amber" />
                <StatCard icon="⏱" value={episodesWatchedFilter}  label="Серий просмотрено"    accent="cyan" />
            </div>

            {/* Фильтр Жанров */}
            <div className="flex gap-2 flex-wrap" style={{ marginBottom: 24 }}>
                {genreTags.map(tabg => (
                    <div
                        key={tabg.value}
                        className={`tab-item ${activeGenre === tabg.value ? 'active' : ''}`}
                        onClick={() => setActiveGenre(tabg.value)}
                    >
                        {tabg.label}
                    </div>
                ))}
            </div>

            {/* Фильтр списков */}
            <div className="tabs">
                {animeTabs.map((tab) => (
                    <div
                        key={tab.value}
                        className={`tab-item ${
                            activeStatus === tab.value ? 'active' : ''
                        }`}
                        onClick={() => setActiveStatus(tab.value)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
        </>
    )
}