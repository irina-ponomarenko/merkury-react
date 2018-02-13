import React from 'react';
import Logo from '../../../../assets/images/logo.png';
import Tabs from '../Tabs';

class HeaderLogin2 extends  React.Component {
    render() {
        return(
            <div className="HeaderLogin">
                <div className="WrapperTabs">
                    <div className="Logo LogoPageLogin">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <Tabs/>
                </div>
            </div>
        );
    }
}
export default HeaderLogin2;