import React from "react";
import { Link } from 'react-router-dom';
import SvgSprite from '../SvgSprite';
import './menudraweritem.css';

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
        </li>
	)
}


export default MenuDrawerItem;
