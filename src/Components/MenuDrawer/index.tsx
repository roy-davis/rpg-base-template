import React from "react";
import AppLogo from '../../Assets/Images/logo.svg';
import './menudrawer.css';


const MenuDrawer: React.FC = (props) => {

    return (
        <aside className="menu-drawer">
            <header>
                <img src={AppLogo} alt="Application Logo" className="auth-logo" />
                <h1>Application Name</h1>
                <button>X</button>
            </header>
            <ul>
                <li className="profile">User name</li>
                { props.children }
                <li><a href="#">Log out</a></li>
            </ul>
        </aside>
	)
}


export default MenuDrawer;
