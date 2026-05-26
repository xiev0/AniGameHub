import { NavLink, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const navItems = [
  { to: '/',        icon: '⊞',  label: 'Панель' },
  { to: '/anime',   icon: '🎌',  label: 'Аниме',    badge: '3' },
  { to: '/games',   icon: '🎮',  label: 'Игры' },
  { to: '/music',   icon: '🎵',  label: 'Музыка' },
  { to: '/profile', icon: '👤',  label: 'Профиль' },
];

const extraItems = [
  { to: '/discover', icon: '🔭', label: 'Обзор' },
  { to: '/settings', icon: '⚙️', label: 'Настройки' },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">✦</div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-name">AniGameHub</span>
            <span className="sidebar-logo-sub">Твоя ОС для развлечений</span>
          </div>
        </div>

        {/* Main nav */}
        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Главное</div>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </NavLink>
          ))}

          <div className="sidebar-section-label" style={{ marginTop: 12 }}>Другое</div>
          {extraItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer user */}
        <div className="sidebar-footer">
          <NavLink to="/profile" className="sidebar-user" style={{ textDecoration: 'none' }}>
            <div className="user-avatar">Е</div>
            <div className="user-info">
              <div className="user-name">Ева</div>
              <div className="user-level">✦ Уровень 42 · Отаку</div>
            </div>
          </NavLink>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        <div className="mobile-nav-items">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `mobile-nav-item${isActive ? ' active' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
