const bannerColors = [
  'linear-gradient(135deg,#1a0d3a 0%,#2d1b69 100%)',
  'linear-gradient(135deg,#0d1a3a 0%,#1a3a5c 100%)',
  'linear-gradient(135deg,#1a1a0d 0%,#3a3a1a 100%)',
  'linear-gradient(135deg,#1a0d0d 0%,#3a1a1a 100%)',
  'linear-gradient(135deg,#0d2a1a 0%,#1a3a2d 100%)',
  'linear-gradient(135deg,#1a0a2e 0%,#2e0a1a 100%)',
];

export default function GameCard({ title, hours, genres = [], rating, emoji, idx = 0 }) {
  return (
    <div className="game-card anim-fade-up">
      <div className="game-card-banner" style={{ background: bannerColors[idx % bannerColors.length] }}>
        <div className="game-banner-placeholder">
          <span style={{ fontSize: '3.5rem' }}>{emoji}</span>
        </div>
        {hours && (
          <div className="game-hours-badge">⏱ {hours} ч.</div>
        )}
      </div>
      <div className="game-card-body">
        <div className="game-card-title">{title}</div>
        <div className="game-card-tags">
          {genres.map(g => (
            <span key={g} className="game-tag">{g}</span>
          ))}
        </div>
        {rating && (
          <div className="flex items-center gap-2">
            <div className="progress-bar" style={{ flex: 1 }}>
              <div className="progress-fill" style={{ width: `${(rating / 10) * 100}%`, background: 'var(--gradient-game)' }} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)' }}>{rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}
