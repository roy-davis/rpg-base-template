import React from "react";

const MenuDrawer: React.FC = (props) => {

    return (
        <aside className="side-bar">
            <ul>
            { props.children }
            </ul>
        </aside>
	)
}


export default MenuDrawer;
