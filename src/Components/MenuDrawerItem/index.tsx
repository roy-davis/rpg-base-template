import React from "react";

interface MenuDrawerItemProps {
    title: string,
    path: string,
    icon: string,
};


const MenuDrawerItem: React.FC<MenuDrawerItemProps> = (props) => {
    
    return (
        <li><a href={props.path}>{props.title}</a></li>
	)
}


export default MenuDrawerItem;
