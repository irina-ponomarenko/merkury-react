import React from 'react';
import './BoxWrapper.css';

class BoxWrapper extends React.Component {
    render() {
        return(
            <div className="BoxWrapper BoxWrapper--Padding">
                {this.props.children}
            </div>
        )
    }
}
export default BoxWrapper;