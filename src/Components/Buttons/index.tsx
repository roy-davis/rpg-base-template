import React from "react";
import './buttons.css';

import LoginIcon from '../../Assets/Images/login-avatar.svg';


interface LoginButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const LoginButton: React.FC<LoginButtonProps> = (props) => {

    return (
        <button className="btn login" onClick={props.onClick} >
            <img src={LoginIcon} alt="Login icon" className="login icon" />
            <span>Login</span>
        </button>
    );
}

export { 
    LoginButton
};
