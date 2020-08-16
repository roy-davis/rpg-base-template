import React, { useState } from 'react';
import { Route } from 'react-router-dom';

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
import Http404 from "./Views/Http404";
import Profile from "./Views/Profile";
import ReduxTest from "./Views/ReduxTest";


declare function require(moduleName: string): any;
const AnimatedSwitch = require('react-router-transition').AnimatedSwitch;

function Routes() {

  const appName = "LIC Prototype";
  const [pageTitle, setPageTitle] = useState("");
  const [prototypeBanner, setPrototypeBanner] = useState(false);
  const [suppressMenu, setSuppressMenu] = useState("wrap");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleUIUpdate = (att: ViewAttributes) => {
    setPageTitle(att.title);
    setDocumentheader();
    setPrototypeBanner((att.prototype) ? true : false);
    setSuppressMenu((att.suppressMenu) ? "wrap suppress-menu" : "wrap");
  }

  const setDocumentheader = () => document.title = appName + " | " + pageTitle;

  const handleMenuToggle = (event: React.MouseEvent) => {
    setDrawerOpen(!drawerOpen);
  }

  const handleCloseMenu = (event: React.MouseEvent) => {
    setDrawerOpen(false);
  }

  return (
    <div className={suppressMenu}>
        <main className="content"> 
          <AppBar title={pageTitle} prototype={prototypeBanner} toggleDrawer={handleMenuToggle} />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
    
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

            <Route 
              path={["/redux"]} 
              render={(routeProps) => ( <ReduxTest {...routeProps} updateUI={handleUIUpdate} /> )} 
              exact />
           
            <PrivateRoute 
              path="/protected-example" 
              updateUI={handleUIUpdate}
              component={ProtectedExample}
              exact />

            <PrivateRoute 
              path="/profile" 
              updateUI={handleUIUpdate}
              component={Profile}
              exact />

            <Route render={(routeProps) => ( <Http404 {...routeProps} updateUI={handleUIUpdate} /> )}   />
            </AnimatedSwitch>
        </main>
        <MenuDrawer open={drawerOpen} toggleDrawer={handleMenuToggle}>
          <MenuDrawerItem path="/" title="Home" icon="home" onClick={handleCloseMenu} />
          <MenuDrawerItem path="/login" title="Oauth Login" icon="avatar" onClick={handleCloseMenu} />
          <MenuDrawerItem path="/layout" title="Layout Example" icon="tick" onClick={handleCloseMenu} />
          <MenuDrawerItem path="/protected-example" title="Protected Example" icon="close" onClick={handleCloseMenu} />
        </MenuDrawer>
    </div>
  );
}



export default Routes;
