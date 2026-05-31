import Topbar from '@/components/Topbar';
import GameCard from '@/components/GameCard';
import {useState} from "react";
import {useGameStore} from "@/entities/games/model/game.store";
import CreateGame from "@/features/games/CreateGame";
import GameBanner from "@/features/games/gameBanner";

export function GamesPage() {

  const [activeStatus, setActiveStatus] = useState('all')
  const [activeGenre, setActiveGenre] = useState('allg')

  const gameList = useGameStore(
      (state) => state.gameList
  )

  const filteredGame = gameList.filter((Game) => {
    const matchesStatus = activeStatus === 'all' || Game.status === activeStatus
    const matchesGenre = activeGenre === 'allg' || Game.genres.includes(activeGenre)
    return matchesStatus && matchesGenre
  })

  const [genres, setGenres] = useState<string[]>(["RPG"]);

  const removeGame = useGameStore(
      (state) => state.removeGame
  )

  return (
      <>
        <Topbar title="Игры" subtitle="Твоя игровая библиотека и статистика"/>
        <GameBanner />

        {/* Main grid + sidebar */}
        <div className="flex gap-6" style={{flexWrap: 'wrap', marginBottom: 32}}>
          {/* Game grid */}
          <div style={{flex: '1 1 520px'}}>
            <CreateGame />
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
