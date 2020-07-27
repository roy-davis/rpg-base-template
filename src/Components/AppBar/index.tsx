import React from "react";
import SvgSprite from '../SvgSprite';
import './appbar.css';


interface AppBarProps {
    title: string,
};

const AppBar: React.FC<AppBarProps> = (props) => {
    
    return (
        <aside className="appbar">
            <button 
                className="hamburger" 
                aria-label="Open menu button.">
                    <SvgSprite icon="menu" width={18} />
            </button>
            <h1>{props.title}</h1>
        </aside>
	)
}


export default AppBar;
