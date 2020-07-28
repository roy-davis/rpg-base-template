import React from "react";
import SvgSprite from '../SvgSprite';
import './appbar.css';


interface AppBarProps {
    title: string,
    prototype?: boolean,
    toggleDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void ,
};

const AppBar: React.FC<AppBarProps> = (props) => {

    if (props.prototype) {
        return (
            <aside className="appbar prototype">
                <h1><SvgSprite icon="warning" width={18} fill="var(--black)" />This application is a prototype</h1>
            </aside>
        )
    } else {
        return (
            <aside className="appbar">
                <button
                    onClick={props.toggleDrawer}
                    className="hamburger" 
                    aria-label="Open menu button.">
                        <SvgSprite icon="menu" width={18} />
                </button>
                <h1>{props.title}</h1>
            </aside>
        )
    }

}


export default AppBar;
