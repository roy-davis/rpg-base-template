import React from "react";
import { ViewInterface } from '../Types/ViewAttributes';
import { OAuthLogin as OAuthLoginControl } from '../Components/OAuthControls';

const OAuthLogin: React.FC<ViewInterface> = (props) => {
    
    props.updateUI({ 
        title: "This is an oauth login example.",
        suppressMenu: true,
        prototype: true, 
    });

    return (
        <article className="page login">
           <OAuthLoginControl />
        </article>
	)
}


export default OAuthLogin;
