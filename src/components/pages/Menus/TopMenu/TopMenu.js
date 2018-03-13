import React from 'react';
import { Link } from 'react-router-dom';
import AddProjectButton from './AddProjectButton';
import ProfileTopMenu from  './ProfileTopMenu';
import SlideMenu from '../SlideMenu/SlideMenu';
import { connect } from 'react-redux';
import store from "../../../../redux/store";

 class TopMenu extends React.Component {
     // componentDidMount(){
     //     const $ = window.$;
     //     $('.MenuButton').click(function() {
     //         $('.SlideMenu').animate({
     //             left: '0px'
     //         }, 200);
     //
     //         $('body').animate({
     //             left: '318px'
     //         }, 200);
     //         $('.icon-block').css('display','block');
     //     });
     //     $('.icon-block').click(function() {
     //         $('.SlideMenu').animate({
     //             left: '-318px'
     //         }, 200);
     //
     //         $('body').animate({
     //             left: '0px'
     //         }, 200);
     //         $('.icon-block').css('display','none');
     //     });
     // }
     handleClick(e) {
         store.dispatch({
             type: 'TOOGLE_STATUS',
             payload: {
                 toogle: e.target.value
             }
         });
     }
     render() {
         console.log(this.props.toogleProps);
         return(
             <div className="WrapperTopMenu">
                 <SlideMenu/>
                 <div className="TopMenu">
                     <div className="WrapperMenu">
                         <div className="Menu">
                             <div className="FindSearchWrapper">
                                 <i className="fa fa-caret-left icon-block"></i>
                                 <button className="MenuButton" onClick={this.handleClick}>
                                     <i className="fa fa-bars"></i>
                                 </button>
                                 <button className="Search"><i className="fa fa-search"></i></button>
                             </div>
                         </div>
                     </div>
                     <div className="NavProfileProject">
                         <AddProjectButton/>
                         <div className="WrapperMessage">
                             <Link to =""><i className="fa fa-envelope"></i></Link>
                             <Link to =""><i className="fa fa-bell"></i></Link>
                         </div>
                         <ProfileTopMenu history={this.props.history}/>
                     </div>
                 </div>
             </div>
         )
     }

 }
const mapState = (state, props) => {
    console.log(state);

    return {
        toogleProps: state.toogle
    }
};
export default connect(mapState)(TopMenu);