import React from "react";
import SvgSprite from '../SvgSprite';
import './appbar.css';

const AppBar: React.FC = () => {
    
    return (
        <aside className="appbar">

            <button 
                className="hamburger" 
                aria-label="Open menu button."
                role="button">

                    <SvgSprite icon="menu" width={24} />

                    <span>Menu</span>
            </button>
            <h1>This is the page title</h1>

        </aside>
	)
}


export default AppBar;
