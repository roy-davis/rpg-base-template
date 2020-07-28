import React from "react";
import { ViewInterface } from '../Types/ViewAttributes';

const ProtectedExample: React.FC<ViewInterface> = (props) => {
    
    props.updateUI({ title: "This is an example of a protected route." });

    return (
        <article className="page">
           <h1>If you can read this you are authenticated.</h1>
        </article>
	)
}


export default ProtectedExample;
