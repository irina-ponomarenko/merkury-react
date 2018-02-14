import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TopMenu from '../pages/Menus/TopMenu/TopMenu';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            const userExist = false;
            if (!userExist) {
                return <Redirect to="/Login"/>
            }
                else {
                    return (
                        <div className="Wrapper">
                            <TopMenu/>
                            <Component {...matchProps} />
                        </div>
                    );
                }
        }} />
    )
};


export default DefaultLayout;