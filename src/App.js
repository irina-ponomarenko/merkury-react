import React  from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateLayout from './components/containers/PrivateLayout';
import Home from './components/pages/Home/Home';
import Workflow from './components/pages/Workflow/Workflow';
import Statistics from './components/pages/Statistics/Statistics';
import Calendar from  './components/pages/Calendar/Calendar';
import Users from './components/pages/Users/Users';
import Settings from './components/pages/Settings/Settings';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login}/>
                    <PrivateLayout exact path="/Workflow" component={Workflow} />
                    <PrivateLayout exact path="/Statistics" component={Statistics} />
                    <PrivateLayout exact path="/Calendar" component={Calendar}/>
                    <PrivateLayout exact path="/Users" component={Users}/>
                    <PrivateLayout exact path="/Settings" component={Settings}/>

                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }

}
export default App;
