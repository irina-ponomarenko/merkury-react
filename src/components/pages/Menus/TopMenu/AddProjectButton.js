import React from 'react';

class AddProjectButton extends React.Component {
    handleClick = () => {
        const { history } = this.props;
        localStorage.setItem('checkLogin', 'nologged');
        history.push('/Login')
        };
    render () {
        return(
            <button type="button" className="AddProject" onClick={this.handleClick}>
                <i className="fa fa-plus"></i>
                Add project
            </button>
        )
    }
}
export default AddProjectButton;