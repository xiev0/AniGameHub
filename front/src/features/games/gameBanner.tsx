import StatCard from "@/components/StatCard.tsx";
import {useGameStore} from "@/entities/games/model/game.store.ts";
import {useState} from "react";

export default function GameBanner () {

    const gameList = useGameStore(
        (state) => state.gameList
    )

    const [activeStatus, setActiveStatus] = useState('all')
    const [activeGenre, setActiveGenre] = useState('allg')

    const genreTags = [
        {label: 'Все', value: 'allg'},
        {label: 'Экшен', value: 'Экшен'},
        {label: 'Шутер', value: 'Шутер'},
        {label: 'RPG', value: 'RPG'},
        {label: 'Приключение', value: 'Приключение'},
        {label: 'Стратегия', value: 'Стратегия'},
        {label: 'Соулслайк', value: 'Соулслайк'},
        {label: 'Открытый мир', value: 'Открытый мир'},
        {label: 'Хоррор', value: 'Хоррор'},
        {label: 'Выживание', value: 'Выживание'},
        {label: 'Платформер', value: 'Платформер'},
        {label: 'Рогалик', value: 'Рогалик'},
        {label: 'Симулятор', value: 'Симулятор'},
        {label: 'Визуальная новелла', value: 'Визуальная новелла'},
        {label: 'Dark Fantasy', value: 'Dark Fantasy'}
    ]

    const gameTabs = [
        { label: 'Все', value: 'all' },
        { label: 'Играю', value: 'playing' },
        { label: 'В планах', value: 'planned' },
        { label: 'Приостановлено', value: 'stopped' },
        { label: 'Брошено', value: 'dropped' },
        {label: 'Пройдено', value: 'done'}
    ]

    const lengthGame = gameList.length
    const positiveNumbers = gameList.filter(game => game.rating > 0);
    const sumRating = positiveNumbers.reduce((acc, game) => acc + game.rating, 0)
    const avgRating = sumRating / positiveNumbers.length;
    const resultAvgRating = avgRating.toFixed(1)
    const hoursFilter = gameList.reduce((sum, game) => sum + game.hours, 0);
    const playingFilter = gameList.filter(game => game.status === 'playing').length
    const plannedFilter = gameList.filter(game => game.status === 'planned').length
    const stoppedFilter = gameList.filter(game => game.status === 'stopped').length
    const droppedFilter = gameList.filter(game => game.status === 'dropped').length
    const doneFilter = gameList.filter(game => game.status === 'done').length
    const sum = (doneFilter / (playingFilter + plannedFilter + stoppedFilter + droppedFilter)) * 100
    const sumFix = sum.toFixed(1)
    return (
        <>
            {/* Hero banner */}
            <div className="hero" style={{
                background: 'linear-gradient(135deg,#0d1a2e 0%,#1a0d1a 50%,#0a1a0d 100%)',
                minHeight: 200,
                marginBottom: 28,
            }}>
                <div className="hero-orbs">
                    <div className="hero-orb hero-orb-1" style={{background: 'radial-gradient(circle,#fbbf24,transparent)'}}/>
                    <div className="hero-orb hero-orb-2" style={{background: 'radial-gradient(circle,#f97316,transparent)'}}/>
                    <div className="hero-orb hero-orb-3"
                         style={{background: 'radial-gradient(circle,#6c8ef7,transparent)', opacity: 0.15}}/>
                </div>
                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat-value">{lengthGame}</div>
                        <div className="hero-stat-label">Игр</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-value">{hoursFilter}</div>
                        <div className="hero-stat-label">Сыграно</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-value">{resultAvgRating}</div>
                        <div className="hero-stat-label">Ср. оценка</div>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="hero-eyebrow" style={{color: 'var(--accent-amber)'}}>Библиотека игр</div>
                    <h2 className="hero-title" style={{fontSize: '2rem'}}>
            <span style={{
                background: 'var(--gradient-game)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>Твоя коллекция</span>
                    </h2>
                    <p className="hero-desc" style={{marginBottom: 0}}>Всего 610 часов · Больше всего ты играла в Elden Ring</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid-stats stagger" style={{marginBottom: 32}}>
                <StatCard icon="🎮" value={lengthGame} label="Игр в коллекции" accent="amber"/>
                <StatCard icon="⏱" value={hoursFilter} label="Всего сыграно" accent="primary" trend="up"
                          trendVal="+24 ч. на этой неделе"/>
                <StatCard icon="⭐" value={resultAvgRating} label="Средняя оценка" accent="green"/>
                <StatCard icon="🏆" value="127" label="Достижения" accent="amber" trend="up" trendVal="+8"/>
                <StatCard icon="📅" value="148 ч." label="Топ: Elden Ring" accent="pink"/>
                <StatCard icon="🎯" value={sumFix} label="Процент прохождения" accent="cyan"/>
            </div>

            <div className="flex gap-2 flex-wrap" style={{marginBottom: 24}}>
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
                {gameTabs.map((tab) => (
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