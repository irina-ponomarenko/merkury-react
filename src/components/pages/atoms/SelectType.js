import React from 'react';
import './BoxWrapper.css';

class Select extends React.Component {
    onChange = (e) => {
        console.log(e.target.value);
    };
    render() {
        return(
          <select className="TypeSelect" onChange={this.onChange}>
              {
                  this.props.data.map((index,item) => {
                      return <option key={index} value={item}>Type:{item}</option>
                  })
              }
          </select>
        )
    }
}
export default Select;