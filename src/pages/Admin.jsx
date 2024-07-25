import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password === 'k100') {
            // Password is correct, show admin content
            setShowAdminContent(true);
        } else {
            // Password is incorrect, redirect to home page
            navigate('/');
        }
    };

    const [showAdminContent, setShowAdminContent] = useState(false);

    if (showAdminContent) {
        return <div>катя лох</div>;
    }

    return (
        <div>
            <h2>Введіть пароль</h2>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Надіслати</button>
        </div>
    );
}
