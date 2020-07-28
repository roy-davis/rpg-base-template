import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { ViewAttributes } from '../../Types/ViewAttributes';

interface PrivateRouteProps extends RouteProps {
  component?: any,
  updateUI?: (attributes: ViewAttributes) => void,
  // tslint:disable-next-line:no-any
  children?: any,
}

const PrivateRoute = (props: PrivateRouteProps) => {
 
    const { component: Component, children, ...rest } = props;

    const { isAuthenticated, 
    //    loginWithRedirect 
    } = useAuth0();

    return (
        <Route
        {...rest}
        render={routeProps =>
            isAuthenticated ? (
                Component ? (
                    <Component {...routeProps} updateUI={props.updateUI} />
                ) : (
                    children
                )
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: routeProps.location },
                    }}
                />
            )
        }
        />
    );
};

export default PrivateRoute;