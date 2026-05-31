import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage    from '@/pages/HomePage';
import AnimePage   from '@/pages/AnimePage';
import GamesPage   from '@/pages/GamesPage';
import MusicPage   from '@/pages/MusicPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/anime"    element={<AnimePage />} />
            <Route path="/games"    element={<GamesPage />} />
            <Route path="/music"    element={<MusicPage />} />
            <Route path="/profile"  element={<ProfilePage />} />
            <Route path="/discover" element={<NotFoundPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*"         element={<Navigate to="/" replace />} />
    </Routes>
  )
}