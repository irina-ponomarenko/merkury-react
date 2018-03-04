import React from 'react';
import './BoxWrapper.css';

class Select extends React.Component {
    onChange = (e) => {
        console.log(e.target.value);
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