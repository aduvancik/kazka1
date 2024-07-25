import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// Style
import "../style/layoutHome.scss";

export default function LayoutHome() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/');
    };

    const handleSpanClick = () => {
        navigate('/адмін');
    };

    return (
        <div className='layoutHome'>
            <h1 className='menu' >
                <div onClick={handleMenuClick}>Меню</div>
                <span className='info-span' onClick={handleSpanClick}>
                    Увага! фото додані для наглядності та немають нічого спільного з нашимими стравами
                </span>
            </h1>
            <Outlet />
            <footer style={{ fontSize: "8px", marginTop: "50px" }}>
                Для співпраці по розробці сайтів - 2103kokakola2004@gmail.com
            </footer>
        </div>
    );
}
