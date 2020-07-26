import React from "react";
import MenuIcon from '../../Assets/Images/hamburger.svg';
import './appbar.css';

const AppBar: React.FC = () => {
    
    return (
        <aside className="appbar">

            <button 
                className="hamburger" 
                aria-label="Open menu button."
                role="button">
                    <img src={MenuIcon} className="" alt="Open menu icon." />
                    <span>Menu</span>
            </button>
            <h1>This is the page title</h1>

        </aside>
	)
}


export default AppBar;
