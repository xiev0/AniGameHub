import { Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import AnimePage from '@/pages/AnimePage'
import GamesPage from '@/pages/GamesPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anime" element={<AnimePage />} />
      <Route path="/games" element={<GamesPage />} />
    </Routes>
  )
}