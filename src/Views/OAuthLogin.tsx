import React from "react";
import PrototypeBanner from '../Components/PrototypeBanner';
import { OAuthLogin as OAuthLoginControl } from '../Components/OAuthControls';

const OAuthLogin: React.FC = () => {
    
    return (
        <article className="page login">
            <PrototypeBanner />
           <OAuthLoginControl />
        </article>
	)
}


export default OAuthLogin;
