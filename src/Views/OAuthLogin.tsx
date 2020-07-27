import React from "react";
import { OAuthLogin as OAuthLoginControl } from '../Components/OAuthControls';

const OAuthLogin: React.FC = () => {
    
    return (
        <article className="page login">
           <OAuthLoginControl />
        </article>
	)
}


export default OAuthLogin;
