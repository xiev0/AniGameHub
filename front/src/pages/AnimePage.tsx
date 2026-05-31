import Topbar from '@/components/Topbar';
import MediaCard from '@/components/MediaCard';
import {useAnimeStore} from '@/entities/anime/model/anime.store'
import {useState} from "react";
import CreateAnimeForm from "@/features/anime/CreateAnimeForm.tsx";
import AnimeBanner from "@/features/anime/banner.tsx";

const characters = [
  { name: 'Фрирен',      series: 'Фрирен',         emoji: '🧝', color: 'linear-gradient(135deg,#1a0a3a,#2a1a4a)' },
  { name: 'Дэндзи',        series: 'Человек-бензопила',    emoji: '⛓️', color: 'linear-gradient(135deg,#3a0a0a,#2a0a1a)' },
  { name: 'Лойд Форджер',  series: 'Семья шпиона',    emoji: '🕵️', color: 'linear-gradient(135deg,#0a1a3a,#1a2a3a)' },
  { name: 'Ёити Исаги', series: 'Синяя тюрьма',       emoji: '⚽', color: 'linear-gradient(135deg,#0a0a3a,#1a0a3a)' },
];

const animeList = useAnimeStore(
    (state) => state.animeList
)

const copy = animeList.slice();
const sortedAnime = copy.sort((a, b) => b.rating - a.rating);

export default function AnimePage() {
  const removeAnime = useAnimeStore(
      (state) => state.removeAnime
  )

  const [activeStatus, setActiveStatus] = useState('all')
  const [activeGenre, setActiveGenre] = useState('allg')

  const filteredAnime = animeList.filter((anime) => {
    const matchesStatus = activeStatus === 'all' || anime.status === activeStatus
    const matchesGenre  = activeGenre  === 'allg' || anime.genres.includes(activeGenre)
    return matchesStatus && matchesGenre
  })

  return (
    <>
      <Topbar title="Аниме" subtitle="Твоя персональная библиотека аниме" />
      <AnimeBanner />
      <div className="flex gap-6" style={{ flexWrap: 'wrap', marginBottom: 32 }}>
        <div style={{ flex: '1 1 520px' }}>
        <CreateAnimeForm />
          <div className="grid-cards stagger">
            {filteredAnime.map((anime) => (
                <MediaCard
                    key={anime.id}
                    {...anime}
                    onRemove={() => removeAnime(anime.id)}
                />
            ))}
          </div>

        </div>

        {/* Sidebar: top list + characters */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Top rated */}
          <div className="glass-card" style={{ padding: '16px 0' }}>
            <div className="section-title" style={{ padding: '0 16px', marginBottom: 12 }}>Лучшие оценки</div>
            {sortedAnime.map((anime, index) => (
              <div key={index + 1} className="anime-list-item">
                <span className="anime-list-rank">{index + 1}</span>
                <div className="anime-list-thumb">
                </div>
                <div className="anime-list-info">
                  <div className="anime-list-title">{anime.title}</div>
                  <div className="anime-list-meta">{anime.genres} · {anime.totalEpisodes} эп.</div>
                </div>
                <span className="anime-list-score">⭐ {anime.rating}</span>
              </div>
            ))}
          </div>

          {/* Fav characters */}
          <div className="glass-card" style={{ padding: 16 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>Любимые персонажи</div>
            <div className="flex flex-col gap-2">
              {characters.map((c) => (
                <div key={c.name} className="flex items-center gap-3" style={{
                  padding: '10px 12px', borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass-light)', cursor: 'pointer', transition: 'all var(--t-base)',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-full)',
                    background: c.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
                    border: '1px solid var(--glass-border)',
                  }}>{c.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{c.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{c.series}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--accent-pink)', fontSize: '0.9rem' }}>♥</div>
                </div>
              ))}
            </div>
          </div>

          {/* Watch time chart placeholder */}
          <div className="glass-card" style={{ padding: 16 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>Время просмотра</div>
            <div className="flex items-end gap-2" style={{ height: 80 }}>
              {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: '100%', height: `${h}%`, borderRadius: '4px 4px 0 0',
                    background: `linear-gradient(to top, var(--accent-pink), var(--accent-secondary))`,
                    opacity: i === 5 ? 1 : 0.5,
                    transition: 'opacity var(--t-base)',
                  }} />
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                    {['П','В','С','Ч','П','С','В'][i]}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              В среднем: <span style={{ color: 'var(--accent-pink)', fontWeight: 600 }}>3.5 ч. / день</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
