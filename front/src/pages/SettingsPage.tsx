import { useState } from 'react';
import '@/styles/settings.css';

type Category = 'profile' | 'personalization' | 'integrations' | 'security';

const categories: { id: Category; icon: string; label: string; desc: string }[] = [
    { id: 'profile',         icon: '👤', label: 'Профиль',         desc: 'Имя, аватар, биография' },
    { id: 'personalization', icon: '🎨', label: 'Персонализация',  desc: 'Тема, акценты, язык' },
    { id: 'integrations',    icon: '🔌', label: 'Интеграции',      desc: 'Сервисы и API' },
    { id: 'security',        icon: '🔒', label: 'Безопасность',    desc: 'Пароль, сессии, 2FA' },
];

/* ── Sub-components ─────────────────────────────────────────── */

function ProfileSettings() {
    const [name, setName]   = useState('Ева');
    const [email, setEmail] = useState('eva@anigamehub.dev');
    const [bio, setBio]     = useState('Отаку уровня 42 🌸 Люблю исекай и JRPG');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="st-section anim-fade-up">
            <div className="st-section-header">
                <h2 className="st-section-title">Профиль</h2>
                <p className="st-section-desc">Как тебя видят другие пользователи</p>
            </div>

            {/* Avatar */}
            <div className="st-avatar-block">
                <div className="st-avatar">Е</div>
                <div className="st-avatar-info">
                    <button className="st-upload-btn">📷 Загрузить фото</button>
                    <span className="st-avatar-hint">PNG, JPG до 2 МБ</span>
                </div>
            </div>

            <div className="st-divider" />

            <div className="st-fields">
                <div className="st-field">
                    <label className="st-label">Отображаемое имя</label>
                    <input className="st-input" value={name} onChange={e => setName(e.target.value)} placeholder="Твоё имя" />
                </div>
                <div className="st-field">
                    <label className="st-label">Email</label>
                    <input className="st-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" />
                </div>
                <div className="st-field">
                    <label className="st-label">Биография</label>
                    <textarea className="st-textarea" value={bio} onChange={e => setBio(e.target.value)} rows={3} placeholder="Расскажи о себе..." />
                </div>
            </div>

            <div className="st-divider" />

            <div className="st-row-cards stagger">
                {[
                    { icon: '🎌', label: 'Аниме просмотрено', value: '234' },
                    { icon: '🎮', label: 'Игр в коллекции',   value: '41' },
                    { icon: '⭐', label: 'Средняя оценка',    value: '8.2' },
                ].map(s => (
                    <div className="st-mini-card anim-fade-up" key={s.label}>
                        <span className="st-mini-icon">{s.icon}</span>
                        <span className="st-mini-value">{s.value}</span>
                        <span className="st-mini-label">{s.label}</span>
                    </div>
                ))}
            </div>

            <div className="st-actions">
                <button className="st-btn-primary" onClick={handleSave}>
                    {saved ? '✅ Сохранено!' : '💾 Сохранить изменения'}
                </button>
            </div>
        </div>
    );
}

function PersonalizationSettings() {
    const [accent, setAccent]   = useState('blue');
    const [fontSize, setFontSize] = useState('md');
    const [animations, setAnimations] = useState(true);
    const [compactMode, setCompactMode] = useState(false);
    const [language, setLanguage] = useState('ru');

    const accents = [
        { id: 'blue',   color: '#6c8ef7', label: 'Синий' },
        { id: 'violet', color: '#a78bfa', label: 'Фиолет' },
        { id: 'pink',   color: '#f472b6', label: 'Розовый' },
        { id: 'cyan',   color: '#4dd9d6', label: 'Циан' },
        { id: 'amber',  color: '#fbbf24', label: 'Янтарь' },
        { id: 'green',  color: '#34d399', label: 'Мята' },
    ];

    return (
        <div className="st-section anim-fade-up">
            <div className="st-section-header">
                <h2 className="st-section-title">Персонализация</h2>
                <p className="st-section-desc">Настрой внешний вид под себя</p>
            </div>

            {/* Accent color */}
            <div className="st-group">
                <div className="st-group-label">Акцентный цвет</div>
                <div className="st-accent-grid">
                    {accents.map(a => (
                        <button
                            key={a.id}
                            className={`st-accent-swatch ${accent === a.id ? 'active' : ''}`}
                            style={{ '--swatch-color': a.color } as React.CSSProperties}
                            onClick={() => setAccent(a.id)}
                            title={a.label}
                        >
                            {accent === a.id && <span className="st-swatch-check">✓</span>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="st-divider" />

            {/* Font size */}
            <div className="st-group">
                <div className="st-group-label">Размер текста</div>
                <div className="st-segmented">
                    {[{ id: 'sm', label: 'S' }, { id: 'md', label: 'M' }, { id: 'lg', label: 'L' }].map(f => (
                        <button
                            key={f.id}
                            className={`st-seg-btn ${fontSize === f.id ? 'active' : ''}`}
                            onClick={() => setFontSize(f.id)}
                        >{f.label}</button>
                    ))}
                </div>
            </div>

            <div className="st-divider" />

            {/* Toggles */}
            <div className="st-toggle-list">
                <div className="st-toggle-row">
                    <div className="st-toggle-info">
                        <span className="st-toggle-label">Анимации</span>
                        <span className="st-toggle-desc">Плавные переходы и эффекты</span>
                    </div>
                    <button
                        className={`st-toggle ${animations ? 'active' : ''}`}
                        onClick={() => setAnimations(v => !v)}
                    >
                        <span className="st-toggle-thumb" />
                    </button>
                </div>

                <div className="st-toggle-row">
                    <div className="st-toggle-info">
                        <span className="st-toggle-label">Компактный режим</span>
                        <span className="st-toggle-desc">Меньше отступы, больше контента</span>
                    </div>
                    <button
                        className={`st-toggle ${compactMode ? 'active' : ''}`}
                        onClick={() => setCompactMode(v => !v)}
                    >
                        <span className="st-toggle-thumb" />
                    </button>
                </div>
            </div>

            <div className="st-divider" />

            {/* Language */}
            <div className="st-group">
                <div className="st-group-label">Язык интерфейса</div>
                <div className="st-select-wrap">
                    <select className="st-select" value={language} onChange={e => setLanguage(e.target.value)}>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                        <option value="ja">🇯🇵 日本語</option>
                    </select>
                    <span className="st-select-arrow">▾</span>
                </div>
            </div>
        </div>
    );
}

function IntegrationsSettings() {
    const integrations = [
        {
            id: 'anilist', icon: '🍃', name: 'AniList', desc: 'Синхронизация списка аниме',
            color: '#02a9ff', connected: true,
        },
        {
            id: 'mal', icon: '🔵', name: 'MyAnimeList', desc: 'Импорт и экспорт данных',
            color: '#2e51a2', connected: false,
        },
        {
            id: 'steam', icon: '🎮', name: 'Steam', desc: 'Время в играх и достижения',
            color: '#1b2838', connected: true,
        },
        {
            id: 'spotify', icon: '🎵', name: 'Spotify', desc: 'Любимые OST и плейлисты',
            color: '#1db954', connected: false,
        },
        {
            id: 'discord', icon: '💜', name: 'Discord', desc: 'Rich Presence и статус',
            color: '#5865f2', connected: false,
        },
        {
            id: 'kitsu', icon: '🦊', name: 'Kitsu', desc: 'Дополнительные рейтинги',
            color: '#f75239', connected: false,
        },
    ];

    const [states, setStates] = useState<Record<string, boolean>>(
        Object.fromEntries(integrations.map(i => [i.id, i.connected]))
    );

    const toggle = (id: string) => setStates(s => ({ ...s, [id]: !s[id] }));

    return (
        <div className="st-section anim-fade-up">
            <div className="st-section-header">
                <h2 className="st-section-title">Интеграции</h2>
                <p className="st-section-desc">Подключи внешние сервисы</p>
            </div>

            <div className="st-integrations-grid">
                {integrations.map(item => (
                    <div
                        key={item.id}
                        className={`st-integration-card ${states[item.id] ? 'connected' : ''}`}
                        style={{ '--int-color': item.color } as React.CSSProperties}
                    >
                        <div className="st-int-glow" />
                        <div className="st-int-icon">{item.icon}</div>
                        <div className="st-int-info">
                            <div className="st-int-name">{item.name}</div>
                            <div className="st-int-desc">{item.desc}</div>
                        </div>
                        <button
                            className={`st-int-btn ${states[item.id] ? 'connected' : ''}`}
                            onClick={() => toggle(item.id)}
                        >
                            {states[item.id] ? '✓ Подкл.' : 'Подключить'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SecuritySettings() {
    const [twofa, setTwofa] = useState(false);
    const [sessions] = useState([
        { device: '💻 MacBook Pro', location: 'Москва, RU', time: 'Сейчас', current: true },
        { device: '📱 iPhone 14',   location: 'Москва, RU', time: '2 ч. назад', current: false },
        { device: '🖥️ Windows PC', location: 'СПб, RU',    time: '3 дн. назад', current: false },
    ]);
    const [pwSaved, setPwSaved] = useState(false);

    return (
        <div className="st-section anim-fade-up">
            <div className="st-section-header">
                <h2 className="st-section-title">Безопасность</h2>
                <p className="st-section-desc">Защити свой аккаунт</p>
            </div>

            {/* 2FA */}
            <div className="st-security-block">
                <div className="st-security-row">
                    <div className="st-security-icon" style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399' }}>🛡️</div>
                    <div className="st-security-info">
                        <div className="st-security-title">Двухфакторная аутентификация</div>
                        <div className="st-security-desc">
                            {twofa ? 'Аккаунт защищён дополнительным слоем безопасности' : 'Включи для дополнительной защиты'}
                        </div>
                    </div>
                    <button
                        className={`st-toggle ${twofa ? 'active' : ''}`}
                        onClick={() => setTwofa(v => !v)}
                    >
                        <span className="st-toggle-thumb" />
                    </button>
                </div>
            </div>

            <div className="st-divider" />

            {/* Change password */}
            <div className="st-group">
                <div className="st-group-label">Смена пароля</div>
                <div className="st-fields">
                    <div className="st-field">
                        <label className="st-label">Текущий пароль</label>
                        <input className="st-input" type="password" placeholder="••••••••" />
                    </div>
                    <div className="st-field">
                        <label className="st-label">Новый пароль</label>
                        <input className="st-input" type="password" placeholder="••••••••" />
                    </div>
                    <div className="st-field">
                        <label className="st-label">Повтори новый пароль</label>
                        <input className="st-input" type="password" placeholder="••••••••" />
                    </div>
                </div>
                <button
                    className="st-btn-primary"
                    style={{ marginTop: 16 }}
                    onClick={() => { setPwSaved(true); setTimeout(() => setPwSaved(false), 2000); }}
                >
                    {pwSaved ? '✅ Пароль обновлён!' : '🔑 Обновить пароль'}
                </button>
            </div>

            <div className="st-divider" />

            {/* Sessions */}
            <div className="st-group">
                <div className="st-group-label">Активные сессии</div>
                <div className="st-sessions">
                    {sessions.map((s, i) => (
                        <div className="st-session-card" key={i}>
                            <span className="st-session-device">{s.device}</span>
                            <div className="st-session-meta">
                                <span className="st-session-loc">📍 {s.location}</span>
                                <span className="st-session-time">🕐 {s.time}</span>
                            </div>
                            {s.current
                                ? <span className="st-session-badge">Текущая</span>
                                : <button className="st-session-revoke">Завершить</button>
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className="st-divider" />

            {/* Danger zone */}
            <div className="st-danger-zone">
                <div className="st-danger-label">⚠️ Опасная зона</div>
                <button className="st-btn-danger">🗑️ Удалить аккаунт</button>
            </div>
        </div>
    );
}

/* ── Main page ──────────────────────────────────────────────── */
export default function SettingsPage() {
    const [active, setActive] = useState<Category>('profile');

    const panels: Record<Category, JSX.Element> = {
        profile:         <ProfileSettings />,
        personalization: <PersonalizationSettings />,
        integrations:    <IntegrationsSettings />,
        security:        <SecuritySettings />,
    };

    return (
        <div className="st-page">
            {/* Page header */}
            <div className="st-page-header anim-fade-up">
                <div className="st-page-header-orb st-page-header-orb-1" />
                <div className="st-page-header-orb st-page-header-orb-2" />
                <div className="st-page-title-wrap">
                    <h1 className="st-page-title">⚙️ Настройки</h1>
                    <p className="st-page-subtitle">Управляй своим аккаунтом и предпочтениями</p>
                </div>
            </div>

            <div className="st-layout">
                {/* Sidebar nav */}
                <nav className="st-nav">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`st-nav-item ${active === cat.id ? 'active' : ''}`}
                            onClick={() => setActive(cat.id)}
                        >
                            <span className="st-nav-icon">{cat.icon}</span>
                            <div className="st-nav-text">
                                <span className="st-nav-label">{cat.label}</span>
                                <span className="st-nav-desc">{cat.desc}</span>
                            </div>
                            <span className="st-nav-arrow">›</span>
                        </button>
                    ))}
                </nav>

                {/* Content panel */}
                <div className="st-content" key={active}>
                    {panels[active]}
                </div>
            </div>
        </div>
    );
}
