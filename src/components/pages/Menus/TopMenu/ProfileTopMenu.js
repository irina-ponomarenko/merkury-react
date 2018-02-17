import React from 'react';
import ProfileTopImage from '../../../../assets/images/profile.png';

 class ProfileTopMenu extends React.Component {
     handleClick = (e) => {
         const { history } = this.props;
         localStorage.setItem('checkLogin', 'nologged');
         history.push('/Login');
         console.log(e);
     };
     render () {
         return(
             <div className="WrapperProfile">
                 <div className="ProfileTopMenu">
                     <img src={ ProfileTopImage } alt="Profile"/>
                 </div>
                 <i className="fa fa-sort-down" onClick={this.handleClick}></i>
             </div>
         );
     }
 }
 export  default ProfileTopMenu;