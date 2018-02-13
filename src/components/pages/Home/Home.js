import React from 'react';

import TopMenu from '../Menus/TopMenu/TopMenu';

class Home extends React.Component {
    render() {
        return(
            <div className="Wrapper">
                <TopMenu/>
                <div className="Page">
                    <div className="WrapperPage">
                        <header className="PageHeader">
                            <h1>Hello John!</h1>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;