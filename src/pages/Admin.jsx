import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservAdmin from '../components/ReservAdmin';

export default function Admin() {
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [viewMode, setViewMode] = useState(''); // 'admin' or 'view'
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password === '/100') {
            setIsAdmin(true);
            setViewMode('admin');
        } else {
            navigate('/');
        }
    };

    const handleViewReservations = () => {
        setViewMode('view');
    };

    return (
        <div>
            {viewMode === '' && (
                <div>
                    <div>
                        {/* <button onClick={handleViewReservations}>Переглянути бронювання</button> */}
                    </div>
                    <h2>Введіть пароль</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button onClick={handleLogin}>Надіслати</button>

                </div>
            )}
            {(viewMode === 'admin' || viewMode === 'view') && (
                <ReservAdmin isAdmin={isAdmin} />
            )}
        </div>
    );
}
