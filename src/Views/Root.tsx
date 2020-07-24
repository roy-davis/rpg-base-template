import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import OAuthLogin from './OAuthLogin' ;

function Root() {

  const { isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <h1>Loading</h1>;
  }


  return (
    <div className="wrap">
      


      {!isAuthenticated &&
        <OAuthLogin />
      }

      {isAuthenticated &&
      <div className="content">
        <aside className="menu">

        </aside>

        <section className="main">          
          <div className="content">
            <div className="col-4">4 Col</div>

            <div className="col-2">2 Col</div>
            <div className="col-2">2 Col</div>
    
            <div className="col-1">1 Col</div>
            <div className="col-1">1 Col</div>
            <div className="col-1">1 Col</div>
            <div className="col-1">1 Col</div>

            <div className="col-2">2 Col</div>
    
            <div className="col-1">1 Col</div>
            <div className="col-1">1 Col</div>

            <div className="col-1">1 Col</div>
            <div className="col-1">1 Col</div>

            <div className="col-2">2 Col</div>

          </div>

        </section>
      </div>
      
      }






    </div>
  );
}

export default Root;
