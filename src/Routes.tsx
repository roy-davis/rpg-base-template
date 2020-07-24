import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

// Views :
import LayoutTest from "./Views/LayoutTest";
import ProtectedExample from "./Views/ProtectedExample";
import OAuthLogin from "./Views/OAuthLogin";
import Examples from "./Views/Examples";


function Routes() {
  return (
    <div className="wrap">
      
      <div className="content">
        <main className="main">          
          <Switch>
              <Route path={["/"]} component={Examples} exact />
              <Route path={["/layout"]} component={LayoutTest} exact />
              <Route path={["/login"]} component={OAuthLogin} exact />
              <PrivateRoute path="/protected-example" component={ProtectedExample} />
            </Switch>
        </main>
      </div>
    </div>
  );
}

export default Routes;
