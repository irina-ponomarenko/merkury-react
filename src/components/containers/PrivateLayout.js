import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            const userExist = false;
            if (!userExist) {
                return <Redirect to="/Login"/>
            }
                else {
                    return (
                        <Component {...matchProps} />
                    );
                }
        }} />
    )
};


export default DefaultLayout;