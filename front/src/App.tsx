import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@/widgets/sidebar/Sidebar'
import { AppRouter } from '@/app/router/AppRouter.tsx'
import '@/styles/globals.css';
import '@/styles/sidebar.css';
import '@/styles/components.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Sidebar />
        <main className="main-content">
        <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}
