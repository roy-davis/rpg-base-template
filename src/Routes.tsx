import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import { ViewAttributes } from './Types/ViewAttributes';

// Components :
import PrivateRoute from './Components/PrivateRoute';
import AppBar from './Components/AppBar';
import { MenuDrawer, MenuDrawerItem } from './Components/MenuDrawer';


// Views :
import LayoutTest from "./Views/LayoutTest";
import ProtectedExample from "./Views/ProtectedExample";
import OAuthLogin from "./Views/OAuthLogin";
import Examples from "./Views/Examples";

function Routes() {

  const appName = "LIC Prototype";
  const [pageTitle, setPageTitle] = useState("");

  const handleUIUpdate = (att: ViewAttributes) => {
    setPageTitle(att.title);
    document.title = appName + " - " + att.title;
  }

  return (
    <div className="wrap">
        <main className="content"> 
          <AppBar title={pageTitle} />
          <Switch>
    
            <Route 
              path={["/"]} 
              render={(routeProps) => ( <Examples {...routeProps} updateUI={handleUIUpdate} /> )} 
              exact />

            <Route 
              path={["/layout"]} 
              render={(routeProps) => ( <LayoutTest {...routeProps} updateUI={handleUIUpdate} /> )} 
              exact />

            <Route 
              path={["/login"]} 
              render={(routeProps) => ( <OAuthLogin {...routeProps} updateUI={handleUIUpdate} /> )} 
              exact />
           
            <PrivateRoute 
              path="/protected-example" 
              component={ProtectedExample}  
              render={(routeProps) => ( <ProtectedExample {...routeProps} updateUI={handleUIUpdate} /> )} 
              exact />

          </Switch>
        </main>
        <MenuDrawer>
          <MenuDrawerItem path="/" title="Home" icon="" />
          <MenuDrawerItem path="/" title="Menu item 2" icon="" />
          <MenuDrawerItem path="/" title="Menu item 3" icon="" />
        </MenuDrawer>
    </div>
  );
}



export default Routes;
