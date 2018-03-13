import React from 'react';
import './BoxWrapper.css';
import store from '../../../redux/store';

class Select extends React.Component {
    onChange = (e) => {
        store.dispatch({
            type: 'SORT_STATUS',
            payload: {
                status: e.target.value
            }
        });

        console.log(store.getState());
    };
    render() {
        return(
          <select onChange={this.onChange}>
              {
                  this.props.data.map((item, index) => {
                      return <option key={index} value={item}>Sort:{item}</option>
                  })
              }
          </select>
        )
    }
}
export default Select;