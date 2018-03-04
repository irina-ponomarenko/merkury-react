import React from 'react';

import Pagination from 'material-ui-pagination';

class PaginationPages extends React.Component {
    constructor(props) {
        super(props);
        this.setTotal = this.setTotal.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
        this.state = {
            total: 10,
            display: 5,
            number: 1,
        };
    }
    setTotal(event, total) {
        // eslint-disable-next-line no-param-reassign
        total = total.trim();
        if (total.match(/^\d*$/)) {
            if (total !== '') {
                // eslint-disable-next-line no-param-reassign
                total = parseInt(total, 10);
            } else {
                // eslint-disable-next-line no-param-reassign
                total = 0;
            }

            this.setState({ total });
        }
    }

    setDisplay(event, display) {
        // eslint-disable-next-line no-param-reassign
        display = display.trim();
        if (display.match(/^\d*$/)) {
            if (display !== '') {
                // eslint-disable-next-line no-param-reassign
                display = parseInt(display, 10);
            } else {
                // eslint-disable-next-line no-param-reassign
                display = 0;
            }

            this.setState({ display });
        }
    }

    render() {
        const self = this;
        return (
            <div
                style = { {
                    width: 500,
                    margin: '0 auto',
                } }
            >
                <h3 >
                    Now you are at
                    <em
                        style = { { color: 'red' } }
                    >
                        {` ${this.state.number} ` }
                    </em>
                    page
                </h3>
                <Pagination
                    total = { self.state.total }
                    current = { self.state.number }
                    display = { self.state.display }
                    onChange = { number => self.setState({ number }) }
                />
            </div>
        );
    }
}
export default PaginationPages;