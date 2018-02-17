import React from 'react';

class AddProjectButton extends React.Component {
    render () {
        return(
            <button type="button" className="AddProject">
                <i className="fa fa-plus"></i>
                Add project
            </button>
        )
    }
}
export default AddProjectButton;