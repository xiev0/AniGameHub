import Topbar from '../components/Topbar.tsx';
import StatCard from '../components/StatCard.tsx';

const tracks = [
  { num: 1,  title: 'Unravel',               artist: 'TK from Ling Tosite Sigure', duration: '3:34', emoji: '🎸', color: 'linear-gradient(135deg,#1a0a2a,#2a0a1a)', playing: true },
  { num: 2,  title: 'Guren no Yumiya',       artist: 'Linked Horizon',             duration: '4:24', emoji: '⚔️', color: 'linear-gradient(135deg,#2a0a0a,#1a0a20)' },
  { num: 3,  title: 'Again',                 artist: 'YUI',                        duration: '3:57', emoji: '🎤', color: 'linear-gradient(135deg,#0a1a2a,#1a2a1a)' },
  { num: 4,  title: 'Oath Sign',             artist: 'LiSA',                       duration: '4:10', emoji: '🌟', color: 'linear-gradient(135deg,#1a1a0a,#2a1a0a)' },
  { num: 5,  title: 'Renai Circulation',     artist: 'Kana Hanazawa',              duration: '4:43', emoji: '🌸', color: 'linear-gradient(135deg,#2a0a1a,#1a0a2a)' },
  { num: 6,  title: 'Silhouette',            artist: 'KANA-BOON',                  duration: '4:10', emoji: '🎵', color: 'linear-gradient(135deg,#0a2a1a,#0a1a2a)' },
  { num: 7,  title: 'My Dearest',            artist: 'supercell',                  duration: '4:51', emoji: '💙', color: 'linear-gradient(135deg,#0a0a2a,#1a0a2a)' },
  { num: 8,  title: 'Core Pride',            artist: 'UVERworld',                  duration: '4:05', emoji: '🔥', color: 'linear-gradient(135deg,#2a1a0a,#1a0a0a)' },
];

const playlists = [
  { name: 'ОСТы из аниме',    count: 48,  emoji: '🎌', color: 'linear-gradient(135deg,#f472b6,#a78bfa)' },
  { name: 'Игровые саундтреки', count: 32, emoji: '🎮', color: 'linear-gradient(135deg,#fbbf24,#f97316)' },
  { name: 'Лоу-фай чилл',  count: 24,  emoji: '☕', color: 'linear-gradient(135deg,#34d399,#4dd9d6)' },
  { name: 'Боевой хайп',  count: 19,  emoji: '⚡', color: 'linear-gradient(135deg,#6c8ef7,#a78bfa)' },
  { name: 'Грустные часы',    count: 15,  emoji: '🌧️', color: 'linear-gradient(135deg,#4dd9d6,#6c8ef7)' },
  { name: 'Эпичные опенинги', count: 30, emoji: '✨', color: 'linear-gradient(135deg,#a78bfa,#f472b6)' },
];

/* ── Visualizer bars ─────────────────────────────────────────── */
function Visualizer() {
  const bars = [0.8, 1.2, 0.6, 1.5, 0.9, 1.1, 0.7, 1.3, 0.8, 1.0, 0.65, 1.4, 0.9, 1.2, 0.75];
  return (
    <div className="visualizer" style={{ height: 32 }}>
      {bars.map((d, i) => (
        <div
          key={i}
          className="vis-bar"
          style={{
            '--duration': `${d * 0.45}s`,
            '--delay': `${i * 0.06}s`,
            height: 4,
            width: 4,
          }}
        />
      ))}
    </div>
  );
}

export default function MusicPage() {
  const formatTracksCount = (c) => {
    const mod10 = c % 10;
    const mod100 = c % 100;
    if (mod10 === 1 && mod100 !== 11) return `${c} трек`;
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return `${c} трека`;
    return `${c} треков`;
  };

  return (
    <>
      <Topbar title="Музыка" subtitle="Твой персональный музыкальный плеер" />

      {/* Stats */}
      <div className="grid-stats stagger" style={{ marginBottom: 32 }}>
        <StatCard icon="🎵" value="1.2k" label="Треков прослушано"  accent="green" trend="up" trendVal="+120 в этом месяце" />
        <StatCard icon="📋" value="6"    label="Плейлисты"        accent="cyan" />
        <StatCard icon="⏱" value="84 ч."  label="Время прослушивания"   accent="primary" />
        <StatCard icon="🎤" value="LiSA" label="Лучший исполнитель"       accent="pink" />
        <StatCard icon="🎸" value="ОСТ"  label="Лучший жанр"        accent="violet" />
        <StatCard icon="🔥" value="23"   label="Серия дней"       accent="amber" />
      </div>

      <div className="flex gap-6" style={{ flexWrap: 'wrap', marginBottom: 32 }}>
        {/* Left: Player + track list */}
        <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Player card */}
          <div className="player-card">
            <div className="player-album">🎸</div>
            <div className="player-track-info">
              <div className="player-track-name">Unravel</div>
              <div className="player-track-artist">TK from Ling Tosite Sigure · Tokyo Ghoul OST</div>
            </div>
            <Visualizer />
            <div className="player-timeline">
              <div className="player-progress">
                <div className="player-progress-fill" />
              </div>
              <div className="player-time-labels">
                <span>1:24</span>
                <span>3:34</span>
              </div>
            </div>
            <div className="player-controls">
              <button className="ctrl-btn" title="Перемешать">🔀</button>
              <button className="ctrl-btn" title="Предыдущий">⏮</button>
              <button className="ctrl-btn ctrl-btn-play" title="Пауза">⏸</button>
              <button className="ctrl-btn" title="Следующий">⏭</button>
              <button className="ctrl-btn" title="Повтор">🔁</button>
            </div>
            {/* Volume */}
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>🔈</span>
              <div className="progress-bar" style={{ flex: 1 }}>
                <div className="progress-fill" style={{ width: '75%', background: 'var(--gradient-music)' }} />
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>75%</span>
            </div>
          </div>

          {/* Track list */}
          <div className="glass-card" style={{ padding: '8px 0' }}>
            <div className="section-title" style={{ padding: '8px 16px 14px', marginBottom: 0 }}>Очередь · ОСТы из аниме</div>
            {tracks.map((t) => (
              <div key={t.num} className={`track-item${t.playing ? ' playing' : ''}`}>
                <span className="track-num">
                  {t.playing
                    ? <span style={{ color: 'var(--accent-green)', fontSize: '0.65rem' }}>▶</span>
                    : t.num
                  }
                </span>
                <div className="track-art" style={{ background: t.color }}>
                  {t.emoji}
                </div>
                <div className="track-info">
                  <div className="track-title" style={{ color: t.playing ? 'var(--accent-green)' : undefined }}>
                    {t.title}
                  </div>
                  <div className="track-artist">{t.artist}</div>
                </div>
                <span className="track-duration">{t.duration}</span>
                <button style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: 8 }}>♥</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Playlists + top artists */}
        <div style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Playlists */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-header" style={{ marginBottom: 14 }}>
              <div className="section-title">Плейлисты</div>
              <button className="btn btn-ghost btn-sm">+ Новый</button>
            </div>
            <div className="flex flex-col gap-2">
              {playlists.map((p) => (
                <div key={p.name} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 12px', borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass-light)', cursor: 'pointer',
                  transition: 'all var(--t-base)', border: '1px solid var(--glass-border)',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-md)',
                    background: p.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0,
                  }}>{p.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{p.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{formatTracksCount(p.count)}</div>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>▶</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top artists */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>Популярные артисты</div>
            {[
              { name: 'LiSA',                   plays: 342, emoji: '🌟', color: 'linear-gradient(135deg,#f472b6,#a78bfa)' },
              { name: 'Linked Horizon',          plays: 215, emoji: '⚔️', color: 'linear-gradient(135deg,#2a0a0a,#1a0a20)' },
              { name: 'TK from Ling Tosite',     plays: 198, emoji: '🎸', color: 'linear-gradient(135deg,#1a0a2a,#2a0a1a)' },
              { name: 'Hiroyuki Sawano',         plays: 187, emoji: '🎻', color: 'linear-gradient(135deg,#0a1a3a,#1a0a3a)' },
              { name: 'Yoko Shimomura',          plays: 156, emoji: '🎹', color: 'linear-gradient(135deg,#0a2a1a,#1a2a0a)' },
            ].map((a, i) => (
              <div key={a.name} className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-full)',
                  background: a.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1rem', flexShrink: 0,
                }}>{a.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{a.name}</div>
                  <div className="progress-bar" style={{ marginTop: 4 }}>
                    <div className="progress-fill" style={{
                      width: `${(a.plays / 342) * 100}%`,
                      background: 'var(--gradient-music)',
                    }} />
                  </div>
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', flexShrink: 0 }}>{a.plays}</span>
              </div>
            ))}
          </div>

          {/* Listening heatmap */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div className="section-title" style={{ marginBottom: 14 }}>Активность прослушивания</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
              {Array.from({ length: 35 }, (_, i) => {
                const intensity = Math.random();
                return (
                  <div key={i} style={{
                    aspectRatio: 1,
                    borderRadius: 4,
                    background: intensity > 0.7
                      ? 'var(--accent-green)'
                      : intensity > 0.4
                        ? 'rgba(52,211,153,0.4)'
                        : 'var(--bg-elevated)',
                    opacity: 0.8 + intensity * 0.2,
                  }} />
                );
              })}
            </div>
            <div className="flex justify-between" style={{ marginTop: 8 }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Меньше</span>
              <div className="flex gap-1">
                {['var(--bg-elevated)', 'rgba(52,211,153,0.3)', 'rgba(52,211,153,0.6)', 'var(--accent-green)'].map((c, i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                ))}
              </div>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Больше</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
