import React from "react";
import PrototypeBanner from '../Components/PrototypeBanner';
import { OAuthLogin as OAuthLoginControl } from '../Components/OAuthControls';

const OAuthLogin: React.FC = () => {
    
    return (
        <div className="content login">
            <PrototypeBanner />
           <OAuthLoginControl />
        </div>
	)
}


export default OAuthLogin;
