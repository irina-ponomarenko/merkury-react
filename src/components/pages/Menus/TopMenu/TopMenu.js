import React from 'react';
import { Link } from 'react-router-dom';
import AddProjectButton from './AddProjectButton';
import ProfileTopMenu from  './ProfileTopMenu';
import SlideMenu from '../SlideMenu/SlideMenu';

 class TopMenu extends React.Component {
     componentDidMount(){
         const $ = window.$;
         $('.MenuButton').click(function() {
             $('.SlideMenu').animate({
                 left: '0px'
             }, 200);

             $('body').animate({
                 left: '318px'
             }, 200);
             $('.icon-block').css('display','block');
         });
         $('.icon-block').click(function() {
             $('.SlideMenu').animate({
                 left: '-318px'
             }, 200);

             $('body').animate({
                 left: '0px'
             }, 200);
             $('.icon-block').css('display','none');
         });
     }
     render() {
         return(
             <div className="WrapperTopMenu">
                 <SlideMenu/>
                 <div className="TopMenu">
                     <div className="WrapperMenu">
                         <div className="Menu">
                             <div className="FindSearchWrapper">
                                 <i className="fa fa-caret-left icon-block"></i>
                                 <Link to ="" className="MenuButton">
                                     <i className="fa fa-bars"></i>
                                 </Link>
                                 <Link to ="" className="Search"><i className="fa fa-search"></i></Link>
                             </div>
                         </div>
                     </div>
                     <div className="NavProfileProject">
                         <AddProjectButton history={this.props.history}/>
                         <div className="WrapperMessage">
                             <Link to =""><i className="fa fa-envelope"></i></Link>
                             <Link to =""><i className="fa fa-bell"></i></Link>
                         </div>
                         <ProfileTopMenu/>
                     </div>
                 </div>
             </div>
         )
     }

 }
 export default TopMenu;