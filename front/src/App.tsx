import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import HomePage    from './pages/HomePage.tsx';
import AnimePage   from './pages/AnimePage.tsx';
import GamesPage   from './pages/GamesPage.tsx';
import MusicPage   from './pages/MusicPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import './styles/globals.css';
import './styles/sidebar.css';
import './styles/components.css';

function NotFoundPage() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', gap: 16, textAlign: 'center',
    }}>
      <div style={{ fontSize: '4rem' }}>🔭</div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Страница не найдена</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Этот раздел находится в разработке. Загляните позже!
      </p>
      <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>← На главную панель</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/anime"    element={<AnimePage />} />
            <Route path="/games"    element={<GamesPage />} />
            <Route path="/music"    element={<MusicPage />} />
            <Route path="/profile"  element={<ProfilePage />} />
            <Route path="/discover" element={<NotFoundPage />} />
            <Route path="/settings" element={<NotFoundPage />} />
            <Route path="*"         element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
