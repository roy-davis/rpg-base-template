import React from "react";
import { Link } from 'react-router-dom';
import SvgSprite from '../SvgSprite';
import AppLogo from '../../Assets/Images/logo.svg';
import './menudrawer.css';

interface MenuDrawerItemProps {
    title: string,
    path: string,
    icon: string,
};

const MenuDrawerItem: React.FC<MenuDrawerItemProps> = (props) => {
    return (
        <li className="menu-drawer-item">
            <SvgSprite icon="close" width={16} />
            <Link to={props.path} >{props.title}</Link>
            <div className="menu-item-next">
                <SvgSprite icon="next" width={16} />
            </div>
        </li>
	)
}

const MenuDrawer: React.FC = (props) => {

    return (
        <aside className="menu-drawer">
            <header>
                <img src={AppLogo} alt="Application Logo" className="auth-logo" />
                <h1>Application Name</h1>
                <SvgSprite icon="close" width={18} />
            </header>
            <ul>
                <li className="profile">User name</li>
                { props.children }
                <li><a href="#">Log out</a></li>
            </ul>
        </aside>
	)
}

export { MenuDrawer, MenuDrawerItem };
