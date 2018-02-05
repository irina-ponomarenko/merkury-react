import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.png';

 class SlideMenu extends React.Component {
     render () {
         const  listMenuNav = [
             {
                 Link: '/',
                 className: 'Home',
                 label: 'Home'
             },
             {
                 Link: '/Workflow',
                 className: 'Workflow',
                 label: 'Workflow'
             },
             {
                 Link: '/Statistics',
                 className: 'Statistics',
                 label: 'Statistics'
             },
             {
                 Link: '/Calendar',
                 className: 'Calendar',
                 label: 'Calendar'
             },
             {
                 Link: '/Users',
                 className: 'Users',
                 label: 'Users'
             },
             {
                 Link: '/Settings',
                 className: 'Settings',
                 label: 'Settings'
             }
         ];
         return (
             <div className="SlideMenu">
                 <div className="Logo LogoSlideMenu">
                     <img src={Logo} alt="Logo"/>
                 </div>
                 <ul>
                     {listMenuNav.map((item, index) =>
                         <li key={index}><NavLink exact to={item.Link} className={item.className} activeClassName="activeNav">{item.label}</NavLink>
                         </li>
                     )};
                 </ul>
             </div>
         )
     }
 }
 export  default  SlideMenu;