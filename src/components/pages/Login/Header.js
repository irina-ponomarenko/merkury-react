import React from 'react';

import Logo from '../../../assets/images/logo.png';
import Tabs from './Tabs';
class HeaderLogin extends  React.Component {
    render() {
        return(
            <div className="HeaderLogin">
                <div className="WrapperTabs">
                    <div className="Logo LogoPageLogin">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <Tabs history={this.props.history}/>
                </div>
            </div>
        );
    }
}
export default HeaderLogin;