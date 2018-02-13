import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin()

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    ,document.getElementById('root')
);
