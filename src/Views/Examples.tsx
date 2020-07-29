import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { OAuthLogout } from '../Components/OAuthControls';
import { ViewInterface } from '../Types/ViewAttributes';


const LandingPage: React.FC<ViewInterface> = (props) => {

    const { isAuthenticated, user } = useAuth0();

    props.updateUI({ title: "Welcome" });
    
    return (
        <article className="page">
            {isAuthenticated &&
                <>
                    <h1>You are logged in as: {user.name} </h1>
                    <p><OAuthLogout /></p>
                </>
            }
            {!isAuthenticated &&
                <h1>You are not logged in </h1>
            }

            <p><Link to="/layout" >Layout Example</Link></p>
            <p><Link to="/protected-example" >Protected Route</Link></p>
            <p><Link to="/login" >OAuth Login Form</Link></p>


        </article>
	)
}


export default LandingPage;
