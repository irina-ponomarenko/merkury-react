import React from 'react';
import './Users.css';
import ProfilePictures from '../../../assets/images/profilePictures.png';
import ProfilePictures2 from '../../../assets/images/profilePictures-2.png';
import ProfilePictures3 from '../../../assets/images/profilePictures-3.png';
import ProfilePictures4 from '../../../assets/images/profilePictures-4.png';
import ProfilePictures5 from '../../../assets/images/profilePictures-5.png';
import ProfilePictures6 from '../../../assets/images/profilePictures-6.png';
import ProfilePictures7 from '../../../assets/images/profilePictures-7.png';

class Users extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2 className="TitleUsers">Users <span>(128)</span></h2>
                    </header>
                    <div className="wrapperInfoUsers">
                       <table className="InfoUsers">
                           <thead>
                           <tr>
                               <th>Name</th>
                               <th>Last activity</th>
                               <th>Mail</th>
                               <th>Phone</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures2} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>John Doe</p>
                                       <span>CEO</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p><i className="fa fa-clock-o"></i> Online now!</p>
                               </td>
                               <td className="emailUser">
                                   <p>johndoe@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Nina Jones</p>
                                       <span>UX Designer</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p><i className="fa fa-clock-o"></i> Online now!</p>
                               </td>
                               <td className="emailUser">
                                   <p>ninajones@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures4} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Alex Smith</p>
                                       <span>Web Designer</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p><i className="fa fa-clock-o"></i> Online now!</p>
                               </td>
                               <td className="emailUser">
                                   <p>alexsmith@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures3} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Ann Clooney</p>
                                       <span>Account Manager</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p className="noActive"><i className="fa fa-clock-o"></i> 20 minutes ago</p>
                               </td>
                               <td className="emailUser">
                                   <p>annclooney@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures6} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Patric Smith</p>
                                       <span>Project Manager</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p className="noActive"><i className="fa fa-clock-o"></i> 40 minutes ago</p>
                               </td>
                               <td className="emailUser">
                                   <p>patricksmith@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures5} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Nicky Hunt</p>
                                       <span>Product Designer</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p className="noActive"><i className="fa fa-clock-o"></i> 1 hour ago</p>
                               </td>
                               <td className="emailUser">
                                   <p>nickyhunt@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           <tr className="User">
                               <td className="PictureUser">
                                   <span><img src={ProfilePictures7} alt="profilePictures"/></span>
                                   <div className="fioUser">
                                       <p>Jane Doe</p>
                                       <span>Graphic Designer</span>
                                   </div>
                               </td>
                               <td className="statusUser">
                                   <p className="noActive"><i className="fa fa-clock-o"></i> 2 days ago</p>
                               </td>
                               <td className="emailUser">
                                   <p>janedoe@design.com</p>
                               </td>
                               <td className="phoneUsers">
                                   <p>(000) 111 222 333</p>
                               </td>
                               <td className="settingUser">
                                   <i className="fa fa-ellipsis-v"></i>
                               </td>
                           </tr>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;