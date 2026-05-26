import { Link } from 'react-router-dom'

export default function NotFoundPage() {
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
            <link to="/" className="btn btn-primary" style={{ marginTop: 8 }}>← На главную панель</link>
        </div>

    );
}