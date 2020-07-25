import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import PrivateRoute from './Components/PrivateRoute';
import AppBar from './Components/AppBar';
import MenuDrawer from './Components/MenuDrawer';
import MenuDrawerItem from './Components/MenuDrawerItem';


// Views :
import LayoutTest from "./Views/LayoutTest";
import ProtectedExample from "./Views/ProtectedExample";
import OAuthLogin from "./Views/OAuthLogin";
import Examples from "./Views/Examples";


function Routes() {
  return (
    <div className="wrap">
        <AppBar />
        <main className="content">          
          <Switch>
              <Route path={["/"]} component={Examples} exact />
              <Route path={["/layout"]} component={LayoutTest} exact />
              <Route path={["/login"]} component={OAuthLogin} exact />
              <PrivateRoute path="/protected-example" component={ProtectedExample} />
            </Switch>
        </main>
        <MenuDrawer>
          <MenuDrawerItem path="/" title="Menu item 1" icon="" />
          <MenuDrawerItem path="/" title="Menu item 2" icon="" />
          <MenuDrawerItem path="/" title="Menu item 3" icon="" />
        </MenuDrawer>
    </div>
  );
}

export default Routes;
