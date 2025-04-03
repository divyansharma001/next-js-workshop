import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="auth-layout">
            <header className="auth-header">
                <h1>Authentication</h1>
            </header>
            <main className="auth-content">{children}</main>
            <footer className="auth-footer">
                <p>&copy; {new Date().getFullYear()} Your Company</p>
            </footer>
        </div>
    );
};

export default AuthLayout;