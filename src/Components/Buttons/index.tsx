import React from "react";
import SvgSprite from '../SvgSprite';

import './buttons.css';



interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const LoginButton: React.FC<ButtonProps> = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            className="btn login" 
            aria-label="Login"
        >
            <SvgSprite icon="avatar" width={20} />
            <span>Login</span>
        </button>
    );
}


const CancelButton: React.FC<ButtonProps> = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            className="btn cancel" 
            aria-label="Cancel Action"
        >
            <span>Cancel</span>
        </button>
    );
}

export { 
    CancelButton,
    LoginButton
};
