import React, { useState, useEffect, useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
//style
import "../style/global.scss";
import "../style/loyaut.scss";
import { BasketContext } from '../BasketContext';

export default function Layout() {
    const { basket } = useContext(BasketContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [text, setText] = useState("до головної");

    useEffect(() => {
        const currentPath = decodeURIComponent(location.pathname);
        if (currentPath.includes("/Кошик")) {
            setText("повернутись до попередньої секції");
        } else if(currentPath.includes("/Томатна-основа") || currentPath.includes("/Вершкова-основа")){
            setText("до вибору основи");
        } else {
            setText("до головної");

        }
    }, [location.pathname]);

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='loyout'>
            <div className='loyout__container'>
                <h1 onClick={handleBackClick}>
                    <div className='loyout__svg'>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17L1 9L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="loyout__navigate-container">
                        <p className='loyout__navigate'>
                            Назад
                        </p>
                        <p className='loyout__navigate-where'>
                            {text}
                        </p>
                    </div>
                </h1>
                <Link to="/Кошик" className='loyout__basket-container'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3.66667H23.9435C24.7113 3.66667 25.1927 4.49615 24.8117 5.16281L20.9092 11.9923C20.5531 12.6154 19.8904 13 19.1727 13H9.66667M9.66667 13L7.28958 16.8033C6.8733 17.4694 7.35214 18.3333 8.13758 18.3333H23M9.66667 13L4.21945 2.10557C3.88067 1.428 3.18814 1 2.4306 1H1.66667M9.66667 23.6667C9.66667 24.403 9.06971 25 8.33333 25C7.59695 25 7 24.403 7 23.6667C7 22.9303 7.59695 22.3333 8.33333 22.3333C9.06971 22.3333 9.66667 22.9303 9.66667 23.6667ZM23 23.6667C23 24.403 22.403 25 21.6667 25C20.9303 25 20.3333 24.403 20.3333 23.6667C20.3333 22.9303 20.9303 22.3333 21.6667 22.3333C22.403 22.3333 23 22.9303 23 23.6667Z" stroke="#F4C70F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    { basket.length > 0 && <div className='loyout__basketLenght'>{basket.length}</div>}
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
