import React from "react";
import SvgSprite from '../SvgSprite';

import './buttons.css';



interface LoginButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const LoginButton: React.FC<LoginButtonProps> = (props) => {

    return (
        <button 
            onClick={props.onClick} 
            className="btn login" 
            aria-label="Login"
        >
            <SvgSprite icon="avatar" fill="#ffffff" width={20} />
            <span>Login</span>
        </button>
    );
}

export { 
    LoginButton
};
