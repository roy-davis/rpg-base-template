import React from "react";
import SvgSprite from '../SvgSprite';
import './prototypebanner.css';

const PrototypeBanner: React.FC = () => {
    return (
        <aside className="appbar prototype">
            <h1><SvgSprite icon="warning" width={18} fill="var(--black)" />This application is a prototype</h1>
        </aside>
	)
}


export default PrototypeBanner;
