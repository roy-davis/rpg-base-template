import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './oauth.css';
import AppLogo from '../../Assets/Images/logo.svg';
import { LoginButton } from '../Buttons';
import SvgSprite from '../SvgSprite';

const OAuthLogin: React.FC = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <section className="auth-panel">
                <div className="app-description">
                    <div>
                        <img src={AppLogo} alt="Application Logo" className="auth-logo" />
                    </div>
                    <h1>Application</h1>
                    <h1>Name</h1>
                    <LoginButton onClick={() => loginWithRedirect()}/>
                </div>
            </section>
            <p className="auth-note">Please contact the Rapid Prototyping Group</p>
            <p className="auth-note">for further information or support</p>
        </>
    );
}

const OAuthLogout: React.FC = () => {

    const { logout } = useAuth0();

    return (
        <button onClick={() => logout()}
            className="btn logout" 
            aria-label="Logout" >
            <span>Logout</span>
        </button>

    );
}

const OAuthRefresh: React.FC = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <button className="oauth_refresh" onClick={() => loginWithRedirect()}>
            <span>Your token has expired</span>
            <span>Not yet implemented</span>
        </button>
    );
}


export { 
    OAuthLogin, 
    OAuthLogout,
    OAuthRefresh
};
