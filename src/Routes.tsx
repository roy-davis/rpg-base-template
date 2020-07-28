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
  const [prototypeBanner, setPrototypeBanner] = useState(false);
  const [suppressMenu, setSuppressMenu] = useState("wrap");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleUIUpdate = (att: ViewAttributes) => {
    setPageTitle(att.title);
    setDocumentheader();
    setPrototypeBanner((att.prototype) ? true : false);
    setSuppressMenu((att.suppressMenu) ? "wrap suppress-menu" : "wrap");
  }

  const setDocumentheader = () => document.title = appName + " - " + pageTitle;


  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement | SVGSVGElement | HTMLAnchorElement>) => {
    setDrawerOpen(!drawerOpen);
  }

  const handleCloseMenu = (event: React.MouseEvent<HTMLButtonElement | SVGSVGElement | HTMLAnchorElement>) => {
    setDrawerOpen(false);
  }


  return (
    <div className={suppressMenu}>
        <main className="content"> 
          <AppBar title={pageTitle} prototype={prototypeBanner} toggleDrawer={handleMenuToggle} />
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
              updateUI={handleUIUpdate}
              component={ProtectedExample}
              exact />

          </Switch>
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
