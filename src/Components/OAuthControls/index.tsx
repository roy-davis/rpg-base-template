import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './oauth.css';

const OAuthLogin: React.FC = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <section className="auth-panel">
                <div className="app-description">
                    <div>
                        
                    </div>
                    <h1>Application</h1>
                    <h1>Name</h1>
                    <a href="#" className="oauth_login" onClick={() => loginWithRedirect()}>
                        <span>Login</span>
                    </a>
                </div>
            </section>
            <p className="auth-note">Please contact the Rapid Prototyping Group</p>
            <p className="auth-note">for further information or support</p>
        </>
    );
}

const OAuthLogout: React.FC = () => {

    const { logout, user } = useAuth0();

    return (
        <a href="#" className="oauth_login" onClick={() => logout()}>
            <small>{user.name}</small>
            <p>Logout</p>
        </a>
    );
}

const OAuthRefresh: React.FC = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <a href="#" className="oauth_refresh" onClick={() => loginWithRedirect()}>
            <span>Your token has expired</span>
            <p>Not yet implemented</p>
        </a>
    );
}


export { 
    OAuthLogin, 
    OAuthLogout,
    OAuthRefresh
};
