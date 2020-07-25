import React from "react";
import { Link } from 'react-router-dom';
import './menudraweritem.css';

interface MenuDrawerItemProps {
    title: string,
    path: string,
    icon: string,
};


const MenuDrawerItem: React.FC<MenuDrawerItemProps> = (props) => {
    
    return (
        <li className="menu-drawer-item">
            <img src="" />
            <Link to={props.path} >{props.title}</Link>
        </li>
	)
}


export default MenuDrawerItem;
