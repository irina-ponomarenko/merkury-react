import React from 'react';

import TopMenu from '../Menus/TopMenu/TopMenu';

class Users extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2 className="TitleUsers">Users <span>(128)</span></h2>
                    </header>
                </div>
            </div>
        )
    }
}
export default Users;