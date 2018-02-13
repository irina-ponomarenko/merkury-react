import React from 'react';

import TopMenu from '../Menus/TopMenu/TopMenu';

class Workflow extends React.Component {
    render() {
        return(
            <div className="Wrapper">
                <TopMenu/>
                <div className="Page">
                    <div className="WrapperPage">
                        <header className="PageHeader">
                            <h2>Workflow</h2>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}
export default Workflow;