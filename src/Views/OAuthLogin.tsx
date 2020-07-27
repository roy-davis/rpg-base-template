import React from "react";
import { ViewInterface } from '../Types/ViewAttributes';
import { OAuthLogin as OAuthLoginControl } from '../Components/OAuthControls';

const OAuthLogin: React.FC<ViewInterface> = (props) => {
    
    props.updateUI({ title: "This page is the landing page." });

    return (
        <article className="page login">
           <OAuthLoginControl />
        </article>
	)
}


export default OAuthLogin;
