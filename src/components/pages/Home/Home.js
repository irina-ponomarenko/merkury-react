import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h1>Hello {this.props.userData.email}!</h1>
                    </header>
                </div>
            </div>
        )
    }
}
export default Home;