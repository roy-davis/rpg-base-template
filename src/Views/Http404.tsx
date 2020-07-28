import React from "react";
import { Link } from 'react-router-dom';
import { ViewInterface } from '../Types/ViewAttributes';


const Http404: React.FC<ViewInterface> = (props) => {

    props.updateUI({ title: "No page found." });
    
    return (
        <article className="page">
            <h1>404 Error</h1>
            <Link to="/">Return to home page.</Link>
        </article>
	)
}


export default Http404;
