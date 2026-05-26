import Topbar from '../components/Topbar.jsx';
import StatCard from '../components/StatCard.jsx';
import MediaCard from '../components/MediaCard.jsx';
import GameCard from '../components/GameCard.jsx';

/* ── Mock data ───────────────────────────────────────────────── */
const continueWatching = [
  { title: 'Фрирен', ep: '24-я серия', progress: 72, emoji: '🧝', color: 'linear-gradient(135deg,#2a1040,#0d1a40)' },
  { title: 'Человек-бензопила', ep: '10-я серия', progress: 45, emoji: '⛓️', color: 'linear-gradient(135deg,#3a0a0a,#1a0a20)' },
  { title: 'Синяя тюрьма', ep: '18-я серия', progress: 60, emoji: '⚽', color: 'linear-gradient(135deg,#0a1a3a,#1a0a40)' },
  { title: 'Подземелье вкусностей', ep: '13-я серия', progress: 30, emoji: '🍳', color: 'linear-gradient(135deg,#1a2a0a,#0a2a1a)' },
];

const recentAnime = [
  { title: 'Фрирен: Провожающая в последний путь', genre: 'Фэнтези', score: 9.4, episodes: 28, emoji: '🧝', idx: 0, status: 'Смотрю' },
  { title: 'Человек-бензопила', genre: 'Экшен', score: 8.7, episodes: 12, emoji: '⛓️', idx: 1, status: 'Просмотрено' },
  { title: 'Синяя тюрьма', genre: 'Спорт', score: 8.5, episodes: 24, emoji: '⚽', idx: 2, status: 'Смотрю' },
  { title: 'Семья шпиона', genre: 'Комедия', score: 8.8, episodes: 25, emoji: '🕵️', idx: 3, status: 'Просмотрено' },
  { title: 'Магическая битва', genre: 'Сверхъестественное', score: 9.0, episodes: 24, emoji: '👊', idx: 4, status: 'Смотрю' },
];

const recentGames = [
  { title: 'Elden Ring', hours: 148, genres: ['РПГ', 'Souls-like'], rating: 9.8, emoji: '⚔️', idx: 0 },
  { title: 'Hollow Knight', hours: 62, genres: ['Метроидвания'], rating: 9.4, emoji: '🦋', idx: 1 },
  { title: 'Persona 5 Royal', hours: 200, genres: ['JRPG', 'Симулятор'], rating: 9.7, emoji: '🃏', idx: 2 },
];

/* ── Continue card ───────────────────────────────────────────── */
function ContinueCard({ item }) {
  return (
    <div className="continue-card">
      <div className="continue-card-thumb">
        <div className="continue-thumb-placeholder" style={{ background: item.color }}>
          <span style={{ fontSize: '2.5rem' }}>{item.emoji}</span>
        </div>
      </div>
      <div className="continue-card-info">
        <div className="continue-card-title">{item.title}</div>
        <div className="continue-card-ep">{item.ep}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${item.progress}%` }} />
        </div>
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <div className="hero anim-fade">
      <div className="hero-orbs">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">247</div>
          <div className="hero-stat-label">Эпизодов</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">38</div>
          <div className="hero-stat-label">Аниме</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">12</div>
          <div className="hero-stat-label">Игр</div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Твоя развлекательная ОС</div>
        <h1 className="hero-title">
          С возвращением,{' '}
          <span>Ева</span> ✦
        </h1>
        <p className="hero-desc">
          Нужно досмотреть 3 аниме, в библиотеке 1 новая игра. В этом месяце ты посмотрела 247 серий — невероятно!
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">▶ Продолжить просмотр</button>
          <button className="btn btn-ghost">🔭 Найти новое</button>
        </div>
      </div>
    </div>
  );
}

/* ── Activity feed item ──────────────────────────────────────── */
function ActivityItem({ icon, text, time, accent }) {
  const colors = {
    pink:  'rgba(244,114,182,0.12)',
    blue:  'rgba(108,142,247,0.12)',
    amber: 'rgba(251,191,36,0.12)',
    green: 'rgba(52,211,153,0.12)',
  };
  return (
    <div className="flex items-center gap-3" style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 'var(--radius-md)',
        background: colors[accent] || colors.blue,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{text}</div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 2 }}>{time}</div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function HomePage() {
  const formatDate = () => {
    const raw = new Date().toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' });
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  };

  return (
    <>
      <Topbar
        title="Панель"
        subtitle={formatDate()}
      />

      <Hero />

      {/* Stats row */}
      <div className="grid-stats stagger" style={{ marginBottom: 32 }}>
        <StatCard icon="🎌" value="38"   label="Аниме просмотрено"    trend="up"   trendVal="+5 в этом месяце" accent="pink" />
        <StatCard icon="⏱" value="247"  label="Серий просмотрено"    trend="up"   trendVal="+18 на этой неделе" accent="violet" />
        <StatCard icon="🎮" value="610"  label="Часов в играх"   trend="up"   trendVal="+12 ч."          accent="amber" />
        <StatCard icon="🎵" value="1.2k" label="Треков прослушано"  trend="up"   trendVal="в этом месяце"    accent="green" />
        <StatCard icon="⭐" value="9.1"  label="Средняя оценка аниме"  accent="cyan" />
        <StatCard icon="🏆" value="42"   label="Уровень · Отаку"    accent="primary" />
      </div>

      {/* Continue Watching */}
      <div style={{ marginBottom: 32 }}>
        <div className="section-header">
          <div className="section-title">Продолжить просмотр</div>
          <a href="/anime" className="btn btn-ghost btn-sm">Смотреть все →</a>
        </div>
        <div className="grid-continue stagger">
          {continueWatching.map((item, i) => (
            <ContinueCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Two columns: Recent anime + Activity */}
      <div className="flex gap-6" style={{ marginBottom: 32, flexWrap: 'wrap' }}>
        {/* Recent anime */}
        <div style={{ flex: '1 1 500px' }}>
          <div className="section-header">
            <div className="section-title">Недавнее аниме</div>
            <a href="/anime" className="btn btn-ghost btn-sm">Открыть список →</a>
          </div>
          <div className="grid-cards stagger">
            {recentAnime.map((a, i) => (
              <MediaCard key={i} {...a} idx={i} />
            ))}
          </div>
        </div>

        {/* Activity + mini player */}
        <div style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Mini player widget */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 16, fontSize: '0.85rem' }}>Сейчас играет</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-music)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', flexShrink: 0,
                boxShadow: '0 0 20px rgba(52,211,153,0.3)',
                animation: 'float 4s ease-in-out infinite',
              }}>🎸</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 2 }}>Unravel</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>TK from Ling Tosite Sigure</div>
                <div className="progress-bar" style={{ marginTop: 8 }}>
                  <div className="progress-fill" style={{ width: '42%', background: 'var(--gradient-music)' }} />
                </div>
              </div>
            </div>
            <div className="visualizer" style={{ marginTop: 14 }}>
              {[0.8, 1.2, 0.6, 1.5, 0.9, 1.1, 0.7, 1.3, 0.8, 1.0, 0.65, 1.4].map((d, i) => (
                <div
                  key={i}
                  className="vis-bar"
                  style={{ '--duration': `${d * 0.5}s`, '--delay': `${i * 0.07}s`, height: 4 }}
                />
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="glass-card" style={{ padding: 20, flex: 1 }}>
            <div className="section-title" style={{ marginBottom: 4, fontSize: '0.85rem' }}>Последние события</div>
            <ActivityItem icon="✅" text="Досмотрела 1-й сезон Человека-бензопилы"  time="2 часа назад"   accent="green" />
            <ActivityItem icon="🎮" text="Играла в Elden Ring · 3 ч."   time="5 часов назад"   accent="amber" />
            <ActivityItem icon="⭐" text="Оценила Фрирен на 10/10"       time="Вчера"     accent="pink" />
            <ActivityItem icon="🔖" text="Добавила Сагу о Винланде в список" time="2 дня назад"   accent="blue" />
            <ActivityItem icon="🎵" text="Создала плейлист: Саундтреки"    time="3 дня назад"   accent="green" />
          </div>
        </div>
      </div>

      {/* Recent Games */}
      <div style={{ marginBottom: 32 }}>
        <div className="section-header">
          <div className="section-title">Недавно играла</div>
          <a href="/games" className="btn btn-ghost btn-sm">Библиотека →</a>
        </div>
        <div className="grid-games stagger">
          {recentGames.map((g, i) => (
            <GameCard key={i} {...g} idx={i} />
          ))}
        </div>
      </div>
    </>
  );
}
