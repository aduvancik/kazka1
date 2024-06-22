import React from 'react'
import { Link, Outlet } from 'react-router-dom'
//style
import "../style/layoutHome.scss";

export default function LayoutHome() {
    return (
        <div className='layoutHome'>
            <Link to="/">
                <h1 className='menu'>
                    Меню
                    <span>Увага! фото додані для наглядності та немають нічого спільного з нашимими стравами</span>
                    </h1>
            </Link>
            <Outlet>

            </Outlet>
        </div>
    )
}
