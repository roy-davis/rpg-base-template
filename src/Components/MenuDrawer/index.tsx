import React from "react";
import SvgSprite from '../SvgSprite';

const MenuDrawer: React.FC = (props) => {

    return (
        <aside className="side-bar">
            <SvgSprite icon="close" width={24} />
            <ul>
            { props.children }
            </ul>
        </aside>
	)
}


export default MenuDrawer;
