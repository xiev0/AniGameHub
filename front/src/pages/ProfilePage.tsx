import Topbar from '../components/Topbar.tsx';
import {useAnimeStore} from "@/entities/anime/model/anime.store.ts";

const achievements = [
  { icon: '🎌', name: 'Ветеран аниме',    desc: 'Посмотрено 30+ аниме-сериалов',           earned: true,  color: 'linear-gradient(135deg,rgba(244,114,182,0.15),rgba(167,139,250,0.15))',  accent: 'var(--accent-pink)' },
  { icon: '⏱', name: 'Мастер марафонов',     desc: 'Посмотрено 200+ серий за месяц',   earned: true,  color: 'linear-gradient(135deg,rgba(77,217,214,0.15),rgba(108,142,247,0.15))',   accent: 'var(--accent-cyan)' },
  { icon: '🎮', name: 'Выживший',    desc: 'Пройдено 3 игры в жанре Souls-like',        earned: true,  color: 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(249,115,22,0.15))',    accent: 'var(--accent-amber)' },
  { icon: '⭐', name: 'Критический взгляд',       desc: 'Оценено 25+ аниме и игр',          earned: true,  color: 'linear-gradient(135deg,rgba(52,211,153,0.15),rgba(77,217,214,0.15))',    accent: 'var(--accent-green)' },
  { icon: '🎵', name: 'Меломан',    desc: 'Прослушано 1000+ треков',           earned: true,  color: 'linear-gradient(135deg,rgba(52,211,153,0.15),rgba(52,211,153,0.05))',    accent: 'var(--accent-green)' },
  { icon: '🏆', name: 'Перфекционист',    desc: 'Пройдено на 100% 5 игр',              earned: false, color: 'linear-gradient(135deg,rgba(108,142,247,0.08),rgba(167,139,250,0.08))',  accent: 'var(--text-muted)' },
  { icon: '📚', name: 'Магистр библиотек',   desc: 'Добавлено 50+ тайтлов в библиотеку',     earned: false, color: 'linear-gradient(135deg,rgba(108,142,247,0.08),rgba(167,139,250,0.08))',  accent: 'var(--text-muted)' },
  { icon: '🌙', name: 'Сова',        desc: 'Просмотр аниме с 2 до 5 ночи 10 раз',    earned: false, color: 'linear-gradient(135deg,rgba(108,142,247,0.08),rgba(167,139,250,0.08))',  accent: 'var(--text-muted)' },
];

const favoriteChars = [
  { name: 'Фрирен',       series: 'Фрирен',         role: 'Главный герой',  emoji: '🧝', color: 'linear-gradient(135deg,#1a0a3a,#0a1a3a)' },
  { name: 'Макима',        series: 'Человек-бензопила',    role: 'Антагонист',   emoji: '👁️', color: 'linear-gradient(135deg,#3a0a0a,#2a0a1a)' },
  { name: 'Аня Форджер',   series: 'Семья шпиона',    role: 'Второстепенный',   emoji: '🩷', color: 'linear-gradient(135deg,#1a0a2a,#2a1a0a)' },
  { name: '2B',            series: 'NieR: Automata',  role: 'Главный герой',  emoji: '🤖', color: 'linear-gradient(135deg,#1a1a1a,#0a0a2a)' },
  { name: 'Джокер',         series: 'Persona 5',       role: 'Главный герой',  emoji: '🃏', color: 'linear-gradient(135deg,#1a0a0a,#0a0a0a)' },
  { name: 'Полый рыцарь', series: 'Hollow Knight',   role: 'Главный герой',  emoji: '🦋', color: 'linear-gradient(135deg,#0a0a1a,#1a0a2a)' },
];

const activityLog = [
  { icon: '✅', text: 'Досмотрела 1-й сезон Человека-бензопилы',      time: '2 часа назад',   accent: 'green' },
  { icon: '⭐', text: 'Оценила Фрирен на 10/10',                  time: '4 часа назад',   accent: 'amber' },
  { icon: '🎮', text: 'Играла в Elden Ring 3 часа',        time: '6 часов назад',   accent: 'amber' },
  { icon: '🏆', text: 'Получила достижение: Меломан',     time: 'Вчера',     accent: 'pink' },
  { icon: '🔖', text: 'Добавила 2-й сезон Саги о Винланде в список просмотра',   time: '2 дня назад',    accent: 'blue' },
  { icon: '🎵', text: 'Создала плейлист: Эпичные опенинги',       time: '3 дня назад',    accent: 'green' },
  { icon: '🎮', text: 'Купила NieR: Automata на распродаже',         time: '4 дня назад',    accent: 'amber' },
  { icon: '✅', text: 'Досмотрела 2-й сезон Семьи шпиона',       time: '5 дней назад',    accent: 'green' },
];

function ActivityRow({ icon, text, time, accent }) {

  const colors = {
    pink:  'rgba(244,114,182,0.12)',
    blue:  'rgba(108,142,247,0.12)',
    amber: 'rgba(251,191,36,0.12)',
    green: 'rgba(52,211,153,0.12)',
  };
  return (
    <div className="flex items-center gap-3" style={{
      padding: '10px 0',
      borderBottom: '1px solid var(--glass-border)',
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: 'var(--radius-md)',
        background: colors[accent] || colors.blue,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.9rem', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{text}</div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 1 }}>{time}</div>
      </div>
    </div>
  );
}

export default function ProfilePage() {

  const animeList = useAnimeStore(
      (state) => state.animeList
  )
  const animeCount = animeList.length;
  const episodesWatchedFilter = animeList.reduce((sum, anime) => sum + anime.episodesWatched, 0);


  return (
    <>
      <Topbar title="Профиль" subtitle="Твой аккаунт и достижения" />

      {/* Profile hero */}
      <div className="profile-hero" style={{ marginBottom: 28 }}>
        <div className="profile-banner">
          <div className="profile-banner-orbs">
            <div className="profile-banner-orb" style={{
              width: 200, height: 200, background: 'radial-gradient(circle,#6c8ef7,transparent)',
              top: -60, right: 80,
            }} />
            <div className="profile-banner-orb" style={{
              width: 160, height: 160, background: 'radial-gradient(circle,#f472b6,transparent)',
              bottom: 0, right: '35%',
            }} />
            <div className="profile-banner-orb" style={{
              width: 120, height: 120, background: 'radial-gradient(circle,#4dd9d6,transparent)',
              top: 20, left: '60%', opacity: 0.3,
            }} />
          </div>
        </div>
        <div className="profile-content">
          <div className="flex items-end gap-5" style={{ flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">Е</div>
              <div className="profile-online-dot" />
            </div>
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: 4 }}>
                <h1 className="profile-name">Ева</h1>
                <span className="badge badge-primary">✦ Уровень 42</span>
                <span className="badge badge-pink">Отаку</span>
                <span className="badge badge-amber">Выжившая</span>
              </div>
              <div className="profile-username">@eve · С нами с января 2024</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: 480, lineHeight: 1.6 }}>
                Любительница аниме, коллекционер игр, фанатка Linux. Собираю свою развлекательную ОС. 🐧✦
              </div>
            </div>
            {/* Level progress */}
            <div className="glass-card" style={{ padding: '16px 20px', minWidth: 200 }}>
              <div className="flex justify-between" style={{ marginBottom: 8 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Уровень 42</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>→ Уровень 43</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '68%' }} />
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 6, textAlign: 'center' }}>
                6 800 / 10 000 XP
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex gap-6 flex-wrap" style={{ marginTop: 24 }}>
            {[
              { label: 'Аниме',    value: animeCount,   icon: '🎌', accent: 'var(--accent-pink)' },
              { label: 'Серии',    value: episodesWatchedFilter,  icon: '▶️',  accent: 'var(--accent-secondary)' },
              { label: 'Игры',     value: '9',    icon: '🎮', accent: 'var(--accent-amber)' },
              { label: 'Часы',     value: '610',  icon: '⏱', accent: 'var(--accent-primary)' },
              { label: 'Треки',    value: '1.2k', icon: '🎵', accent: 'var(--accent-green)' },
              { label: 'Значки',   value: '5',    icon: '🏆', accent: 'var(--accent-cyan)' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.accent }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.icon} {s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6" style={{ flexWrap: 'wrap', marginBottom: 32 }}>
        {/* Left column */}
        <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Achievements */}
          <div>
            <div className="section-header">
              <div className="section-title">Достижения</div>
              <span className="badge badge-cyan">Получено 5 из 8</span>
            </div>
            <div className="grid-achievements">
              {achievements.map((a) => (
                <div key={a.name} className="achievement-card" style={{
                  background: a.color,
                  opacity: a.earned ? 1 : 0.5,
                }}>
                  <div className="achievement-icon" style={{
                    background: a.earned ? 'rgba(255,255,255,0.08)' : 'var(--bg-elevated)',
                  }}>
                    {a.icon}
                  </div>
                  <div className="achievement-info">
                    <div className="achievement-name" style={{ color: a.earned ? a.accent : 'var(--text-muted)' }}>
                      {a.name}
                      {a.earned && <span style={{ marginLeft: 6, fontSize: '0.7rem' }}>✓</span>}
                    </div>
                    <div className="achievement-desc">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favourite characters */}
          <div>
            <div className="section-header">
              <div className="section-title">Любимые персонажи</div>
              <button className="btn btn-ghost btn-sm">Изменить</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 12 }}>
              {favoriteChars.map((c) => (
                <div key={c.name} className="glass-card" style={{ padding: 14, textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-full)',
                    background: c.color, margin: '0 auto 10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', border: '2px solid var(--glass-border)',
                  }}>{c.emoji}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{c.series}</div>
                  <span className="badge badge-pink" style={{ marginTop: 6, display: 'inline-flex' }}>{c.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Activity log */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 8 }}>История активности</div>
            {activityLog.map((a, i) => (
              <ActivityRow key={i} {...a} />
            ))}
          </div>

          {/* Profile customisation */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>Настройка профиля</div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Цвет темы', value: 'цвет-темы' },
                { label: 'Аватар', value: 'аватар' },
                { label: 'Баннер', value: 'баннер' },
                { label: 'Отображаемое имя', value: 'отображаемое-имя' },
                { label: 'Статус', value: 'статус' }
              ].map((item) => (
                <div key={item.value} className="flex justify-between items-center" style={{
                  padding: '10px 12px', borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass-light)', cursor: 'pointer',
                  transition: 'all var(--t-base)', border: '1px solid var(--glass-border)',
                }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>Изм. →</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top stats mini */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>В этом месяце</div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Серий просмотрено', value: '47', color: 'var(--accent-pink)' },
                { label: 'Часов сыграно',       value: '24 ч.', color: 'var(--accent-amber)' },
                { label: 'Треков прослушано',   value: '186', color: 'var(--accent-green)' },
                { label: 'Получено XP',         value: '1 240', color: 'var(--accent-primary)' },
              ].map(s => (
                <div key={s.label} className="flex justify-between items-center">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.label}</span>
                  <span style={{ fontWeight: 700, color: s.color, fontSize: '0.875rem' }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
