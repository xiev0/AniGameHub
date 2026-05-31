import Topbar from '@/components/Topbar';
import GameCard from '@/components/GameCard';
import StatCard from '@/components/StatCard';
import {useState} from "react";
import {useGameStore} from "@/entities/games/model/game.store.ts";

const screenshots = [
  { game: 'Elden Ring',      emoji: '⚔️', bg: 'linear-gradient(135deg,#1a0a30,#0a0a20)' },
  { game: 'Hollow Knight',   emoji: '🦋', bg: 'linear-gradient(135deg,#0a0a1a,#1a0a2a)' },
  { game: 'Persona 5 Royal', emoji: '🃏', bg: 'linear-gradient(135deg,#2a0a0a,#1a0a1a)' },
  { game: 'Celeste',         emoji: '🏔️', bg: 'linear-gradient(135deg,#0a1a2a,#1a0a2a)' },
];

const genres = [
  { name: 'РПГ',          count: 4,  color: 'var(--accent-primary)', pct: 80 },
  { name: 'Экшен',       count: 5,  color: 'var(--accent-amber)',   pct: 100 },
  { name: 'Souls-like',   count: 3,  color: 'var(--accent-pink)',    pct: 60 },
  { name: 'Инди',        count: 4,  color: 'var(--accent-green)',   pct: 80 },
  { name: 'Метроидвания', count: 2,  color: 'var(--accent-cyan)',    pct: 40 },
  { name: 'JRPG',         count: 2,  color: 'var(--accent-secondary)', pct: 40 },
];

export function GamesPage() {

  const gameList = useGameStore(
      (state) => state.gameList
  )

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

  const [activeStatus, setActiveStatus] = useState('all')
  const [activeGenre, setActiveGenre] = useState('allg')

  const addGame = useGameStore((state) => state.addGame);

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState('playing')
  const [genres, setGenres] = useState<string[]>(["Визуальная новелла"])
  const [rating, setRating] = useState();
  const [hours, setHours] = useState()

  const filteredGame = gameList.filter((Game) => {
    const matchesStatus = activeStatus === 'all' || Game.status === activeStatus
    const matchesGenre = activeGenre === 'allg' || Game.genres.includes(activeGenre)
    return matchesStatus && matchesGenre
  })

  const removeGame = useGameStore(
      (state) => state.removeGame
  )


  return (
      <>
        <Topbar title="Игры" subtitle="Твоя игровая библиотека и статистика"/>

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
              <div className="hero-stat-value">9</div>
              <div className="hero-stat-label">Игр</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">610 ч.</div>
              <div className="hero-stat-label">Сыграно</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">9.4</div>
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
          <StatCard icon="🎮" value="9" label="Игр в коллекции" accent="amber"/>
          <StatCard icon="⏱" value="610 ч." label="Всего сыграно" accent="primary" trend="up"
                    trendVal="+24 ч. на этой неделе"/>
          <StatCard icon="⭐" value="9.4" label="Средняя оценка" accent="green"/>
          <StatCard icon="🏆" value="127" label="Достижения" accent="amber" trend="up" trendVal="+8"/>
          <StatCard icon="📅" value="148 ч." label="Топ: Elden Ring" accent="pink"/>
          <StatCard icon="🎯" value="67%" label="Процент прохождения" accent="cyan"/>
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

        {/* Main grid + sidebar */}
        <div className="flex gap-6" style={{flexWrap: 'wrap', marginBottom: 32}}>
          {/* Game grid */}
          <div style={{flex: '1 1 520px'}}>
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
                          <select name="genres" value={genres} onChange={(e) => setGenres(e.target.value)}>
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
                          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Введите оценку"/>
                          <input type="text" placeholder="Сколько часов сыграли?" value={hours} onChange={(e) => setHours(e.target.value)}/>
                          <button
                              onClick={() => {
                                addGame({
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
            <div className="grid-games stagger">
              {filteredGame.map((Game) => (
                  <GameCard
                      key={Game.id}
                      {...Game}
                      onRemove={() => removeGame(Game.id)}
                  />))}
              </div>
          </div>

              {/* Sidebar */}
              <div style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: 20}}>
                {/* Favourite genres */}
                <div className="glass-card" style={{padding: 20}}>
                  <div className="section-title" style={{marginBottom: 16}}>Любимые жанры</div>
                  <div className="flex flex-col gap-3">
                    {genres.map(g => (
                        <div key={g.name}>
                          <div className="flex justify-between" style={{marginBottom: 4}}>
                            <span style={{fontSize: '0.8rem', fontWeight: 500}}>{g.name}</span>
                            <span style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)'
                            }}>{g.count} {g.count === 5 ? 'игр' : 'игры'}</span>
                          </div>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${g.pct}%`, background: g.color}}/>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                <div className="glass-card" style={{padding: 20}}>
                  <div className="section-title" style={{marginBottom: 14}}>Скриншоты</div>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
                    {screenshots.map((s, i) => (
                        <div key={i} style={{
                          borderRadius: 'var(--radius-lg)',
                          background: s.bg,
                          aspectRatio: '16/10',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.8rem',
                          border: '1px solid var(--glass-border)',
                          cursor: 'pointer',
                          transition: 'all var(--t-base)',
                          overflow: 'hidden',
                          position: 'relative',
                        }}>
                          {s.emoji}
                          <div style={{
                            position: 'absolute', bottom: 4, left: 4, right: 4,
                            fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)',
                            fontWeight: 500, textAlign: 'center',
                          }}>{s.game}</div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Play time chart */}
                <div className="glass-card" style={{padding: 20}}>
                  <div className="section-title" style={{marginBottom: 14}}>В этом месяце</div>
                  <div className="flex items-end gap-1" style={{height: 80}}>
                    {[20, 45, 30, 70, 55, 40, 80, 60, 35, 50, 75, 90, 65, 48, 55, 70, 85, 60, 40, 30, 55, 70, 45, 35, 60, 80, 50, 40, 65, 75].map((h, i) => (
                        <div key={i} style={{
                          flex: 1,
                          height: `${h}%`,
                          borderRadius: '3px 3px 0 0',
                          background: i >= 27
                              ? 'linear-gradient(to top,var(--accent-amber),var(--accent-amber)aa)'
                              : 'var(--bg-elevated)',
                          transition: 'all var(--t-base)',
                        }}/>
                    ))}
                  </div>
                  <div style={{marginTop: 10, fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center'}}>
                    Лучший день: <span style={{color: 'var(--accent-amber)', fontWeight: 600}}>8.5 ч. (23 мая)</span>
                  </div>
                </div>
              </div>
            </div>
          </>
          );
          }
