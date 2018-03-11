import React from 'react';

import Pagination from 'material-ui-pagination';

class PaginationPages extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 10,
            display: 5,
            number: 1,
        };
    }

    render() {
        return (
            <div style={{ width: 500, margin: '0 auto' }}>
                <h3 >
                    Now you are at
                    <em style={{ color: 'red'}}>
                        {this.state.number}
                    </em>
                    page
                </h3>

                <Pagination
                    total = { this.state.total }
                    current = { this.state.number }
                    display = { this.state.display }
                    onChange = { number => this.setState({ number }) }
                />
            </div>
        );
    }
}
export default PaginationPages;