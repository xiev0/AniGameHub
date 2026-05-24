export default function StatCard({ icon, value, label, trend, trendVal, accent = 'primary' }) {
  const iconBg = {
    primary:  'rgba(108,142,247,0.15)',
    pink:     'rgba(244,114,182,0.15)',
    amber:    'rgba(251,191,36,0.15)',
    green:    'rgba(52,211,153,0.15)',
    cyan:     'rgba(77,217,214,0.15)',
    violet:   'rgba(167,139,250,0.15)',
  };
  const textColor = {
    primary: 'var(--accent-primary)',
    pink:    'var(--accent-pink)',
    amber:   'var(--accent-amber)',
    green:   'var(--accent-green)',
    cyan:    'var(--accent-cyan)',
    violet:  'var(--accent-secondary)',
  };

  return (
    <div className="stat-card anim-fade-up">
      <div className="stat-card-header">
        <div className="stat-card-icon" style={{ background: iconBg[accent] }}>
          <span>{icon}</span>
        </div>
        {trendVal && (
          <span className={`stat-card-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendVal}
          </span>
        )}
      </div>
      <div className="stat-card-value" style={{ color: textColor[accent] }}>{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}
