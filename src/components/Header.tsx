import './Header.css';

interface HeaderProps {
    isConnected: boolean;
    onConnectClick: () => void;
}

function Header({ isConnected, onConnectClick }: HeaderProps) {
    return (
        <header className="app-header">
            <div className="header-brand">
                <h1 className="header-title">CINEMA STUDIO <span className="header-title-accent">PRO</span></h1>
                <span className="header-tagline">// PROMPT LIKE A PHOTOGRAPHER</span>
            </div>

            <div className="header-actions">
                {isConnected ? (
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        SYSTEM READY
                    </div>
                ) : (
                    <button className="btn btn-outline" onClick={onConnectClick}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                        CONNECT API KEY
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
