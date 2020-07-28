import React from "react";
import { ViewInterface } from '../Types/ViewAttributes';
 

const LayoutTest: React.FC<ViewInterface> = (props) => {
    
    props.updateUI({ title: "Examples of layout." });

    return (
        <article className="page flex">
            <div className="col-4 sample-block">4 Col</div>

            <div className="col-2 sample-block">2 Col</div>
            <div className="col-2 sample-block">2 Col</div>

            <div className="col-1 sample-block">1 Col</div>
            <div className="col-1 sample-block">1 Col</div>
            <div className="col-1 sample-block">1 Col</div>
            <div className="col-1 sample-block">1 Col</div>

            <div className="col-2 sample-block">2 Col</div>

            <div className="col-1 sample-block">1 Col</div>
            <div className="col-1 sample-block">1 Col</div>

            <div className="col-1 sample-block">1 Col</div>
            <div className="col-1 sample-block">1 Col</div>

            <div className="col-2 sample-block">2 Col</div>

        </article>
	)
}


export default LayoutTest;
