import React from 'react';

import { Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Workflow from './components/pages/Workflow/Workflow';
import Statistics from './components/pages/Statistics/Statistics';
import Calendar from  './components/pages/Calendar/Calendar';
import Users from './components/pages/Users/Users';
import Settings from './components/pages/Settings/Settings';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route exact path="/" component={Home}/>
                <Route path="/Workflow" component={Workflow}/>
                <Route path="/Statistics" component={Statistics}/>
                <Route path="/Calendar" component={Calendar}/>
                <Route path="/Users" component={Users}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        );
    }
}

export default Main;