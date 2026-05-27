import Topbar from '../components/Topbar.tsx';
import MediaCard from '../components/MediaCard.tsx';
import StatCard from '../components/StatCard.tsx';
import {useAnimeStore} from '@/entities/anime/model/anime.store'

const animeList = useAnimeStore(
    (state) => state.animeList
)

const listData = [
  { rank: 1,  title: 'Стальной алхимик: Братство', genre: 'Приключения',  eps: 64, score: '9.6', emoji: '⚗️', color: 'linear-gradient(135deg,#2a1a0a,#1a0a20)' },
  { rank: 2,  title: 'Врата Штейна',                      genre: 'Научная фантастика',     eps: 24, score: '9.5', emoji: '⏱',  color: 'linear-gradient(135deg,#0a1a2a,#1a0a2a)' },
  { rank: 3,  title: 'Фрирен',                          genre: 'Фэнтези',    eps: 28, score: '9.4', emoji: '🧝',  color: 'linear-gradient(135deg,#1a0a2a,#0a1a3a)' },
  { rank: 4,  title: 'Мастер муси',                         genre: 'Сверхъестественное', eps: 26, score: '9.3', emoji: '🌿', color: 'linear-gradient(135deg,#0a2a1a,#1a2a0a)' },
  { rank: 5,  title: 'Сага о Винланде',                     genre: 'Исторический', eps: 24, score: '9.2', emoji: '🪓',  color: 'linear-gradient(135deg,#2a1a0a,#1a2a1a)' },
  { rank: 6,  title: 'Магическая битва',                   genre: 'Сверхъестественное', eps: 24, score: '9.0', emoji: '👊', color: 'linear-gradient(135deg,#1a0a1a,#0a0a2a)' },
  { rank: 7,  title: 'Семья шпиона',                     genre: 'Комедия',     eps: 25, score: '8.8', emoji: '🕵️', color: 'linear-gradient(135deg,#0a1a2a,#2a1a0a)' },
  { rank: 8,  title: 'Человек-бензопила',                     genre: 'Экшен',     eps: 12, score: '8.7', emoji: '⛓️', color: 'linear-gradient(135deg,#2a0a0a,#1a0a20)' },
];

const genreTags = ['Все', 'Экшен', 'Фэнтези', 'Романтика', 'Научная фантастика', 'Спорт', 'Ужасы', 'Комедия', 'Повседневность', 'Исторический', 'Меха'];

const characters = [
  { name: 'Фрирен',      series: 'Фрирен',         emoji: '🧝', color: 'linear-gradient(135deg,#1a0a3a,#2a1a4a)' },
  { name: 'Дэндзи',        series: 'Человек-бензопила',    emoji: '⛓️', color: 'linear-gradient(135deg,#3a0a0a,#2a0a1a)' },
  { name: 'Лойд Форджер',  series: 'Семья шпиона',    emoji: '🕵️', color: 'linear-gradient(135deg,#0a1a3a,#1a2a3a)' },
  { name: 'Ёити Исаги', series: 'Синяя тюрьма',       emoji: '⚽', color: 'linear-gradient(135deg,#0a0a3a,#1a0a3a)' },
];

export default function AnimePage() {
  return (
    <>
      <Topbar title="Аниме" subtitle="Твоя персональная библиотека аниме" />

      {/* Animated banner */}
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
          <div className="hero-stat"><div className="hero-stat-value">38</div><div className="hero-stat-label">Всего</div></div>
          <div className="hero-stat"><div className="hero-stat-value">12</div><div className="hero-stat-label">Смотрю</div></div>
          <div className="hero-stat"><div className="hero-stat-value">20</div><div className="hero-stat-label">Готово</div></div>
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
        <StatCard icon="🎌" value="38"   label="Всего аниме"      accent="pink" />
        <StatCard icon="▶️" value="12"   label="Смотрю"         accent="violet" trend="up" trendVal="+3" />
        <StatCard icon="✅" value="20"   label="Просмотрено"        accent="green" />
        <StatCard icon="📋" value="6"    label="В планах"    accent="primary" />
        <StatCard icon="⭐" value="9.1"  label="Средняя оценка"        accent="amber" />
        <StatCard icon="⏱" value="247"  label="Серий просмотрено"    accent="cyan" />
      </div>

      {/* Genre filter */}
      <div className="flex gap-2 flex-wrap" style={{ marginBottom: 24 }}>
        {genreTags.map((g, i) => (
          <span key={g} className={`genre-tag${i === 0 ? ' active' : ''}`}>{g}</span>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['Все', 'Смотрю', 'Просмотрено', 'В планах', 'Отложено', 'Брошено'].map((t, i) => (
          <div key={t} className={`tab-item${i === 0 ? ' active' : ''}`}>{t}</div>
        ))}
      </div>

      {/* Two column layout */}
      <div className="flex gap-6" style={{ flexWrap: 'wrap', marginBottom: 32 }}>
        {/* Card grid */}
        <div style={{ flex: '1 1 520px' }}>
          <div className="section-header">
            <div className="section-title">Все аниме</div>
            <button className="btn btn-ghost btn-sm">+ Добавить</button>
          </div>
          <div className="grid-cards stagger">
            {animeList.map((a, i) => <MediaCard key={i} {...a} />)}
          </div>
        </div>

        {/* Sidebar: top list + characters */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Top rated */}
          <div className="glass-card" style={{ padding: '16px 0' }}>
            <div className="section-title" style={{ padding: '0 16px', marginBottom: 12 }}>Лучшие оценки</div>
            {listData.map((item) => (
              <div key={item.rank} className="anime-list-item">
                <span className="anime-list-rank">{item.rank}</span>
                <div className="anime-list-thumb" style={{ background: item.color }}>
                  {item.emoji}
                </div>
                <div className="anime-list-info">
                  <div className="anime-list-title">{item.title}</div>
                  <div className="anime-list-meta">{item.genre} · {item.eps} эп.</div>
                </div>
                <span className="anime-list-score">⭐ {item.score}</span>
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
