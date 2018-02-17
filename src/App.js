import React  from 'react';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';

import { Router, Route, Switch } from 'react-router-dom';
import PrivateLayout from './components/containers/PrivateLayout';
import LoginLayout from './components/containers/LoginLayout';
import Home from './components/pages/Home/Home';
import Workflow from './components/pages/Workflow/Workflow';
import Statistics from './components/pages/Statistics/Statistics';
import Calendar from  './components/pages/Calendar/Calendar';
import Users from './components/pages/Users/Users';
import Settings from './components/pages/Settings/Settings';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound';

const App = () =>{
const BrowserHistory = createBrowserHistory();
        return (
            <Router history={BrowserHistory}>
                <Switch>
                    <LoginLayout exact path="/Login" component={Login}/>
                    <PrivateLayout exact path="/" component={Home} />
                    <PrivateLayout exact path="/Workflow" component={Workflow} />
                    <PrivateLayout exact path="/Statistics" component={Statistics} />
                    <PrivateLayout exact path="/Calendar" component={Calendar}/>
                    <PrivateLayout exact path="/Users" component={Users}/>
                    <PrivateLayout exact path="/Settings" component={Settings}/>

                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
};
export default App;
