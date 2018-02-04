import React from 'react';
import ProfileTopImage from '../../../../assets/images/profile.png';

 class ProfileTopMenu extends React.Component {
     render () {
         return(
             <div className="WrapperProfile">
                 <div className="ProfileTopMenu">
                     <img src={ ProfileTopImage } alt="Profile"/>
                 </div>
                 <i className="fa fa-sort-down"></i>
             </div>
         );
     }
 }
 export  default ProfileTopMenu;