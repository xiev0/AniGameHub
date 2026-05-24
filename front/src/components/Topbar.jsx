export default function Topbar({ title, subtitle, children }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">{title}</h1>
        {subtitle && <p className="topbar-subtitle">{subtitle}</p>}
      </div>
      <div className="topbar-right">
        <div className="search-bar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>🔍</span>
          <input type="text" placeholder="Поиск..." />
        </div>
        <button className="icon-btn" title="Уведомления">
          <span>🔔</span>
        </button>
        <button className="icon-btn" title="Тема">
          <span>🌙</span>
        </button>
        {children}
      </div>
    </div>
  );
}
