import React from 'react';
import HeaderLogin from './Header';
class Login extends React.Component {
    render() {
        return (
            <div className="WrapperLogin">
                <HeaderLogin history={this.props.history}/>
            </div>
        );
    }
}
export  default Login;