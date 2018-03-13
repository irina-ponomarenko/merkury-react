import React from 'react';
import { connect } from 'react-redux';
import store from "../../../redux/store";
import './Users.css';

import ProfilePictures from '../../../assets/images/profilePictures.png';
import ProfilePictures2 from '../../../assets/images/profilePictures-2.png';
import ProfilePictures3 from '../../../assets/images/profilePictures-3.png';
import ProfilePictures4 from '../../../assets/images/profilePictures-4.png';
import ProfilePictures5 from '../../../assets/images/profilePictures-5.png';
import ProfilePictures6 from '../../../assets/images/profilePictures-6.png';
import ProfilePictures7 from '../../../assets/images/profilePictures-7.png';
import SelectSort from '../atoms/SelectSort';
import Pagination from 'material-ui-pagination';

class Users extends React.Component {
    constructor() {
        super();
        this.userList = [
            {
                picture: {
                    pictureProfile: ProfilePictures2,
                    title: "John Doe",
                    text: "CEO"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "johndoe@design.comdffds",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"

            },
            {
                picture: {
                    pictureProfile: ProfilePictures,
                    title: "Nina Jones",
                    text: "UX Designer"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "ninajones@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"

            },
            {
                picture: {
                    pictureProfile: ProfilePictures4,
                    title: "Alex Smith",
                    text: "Web Designer"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "alexsmith@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures3,
                    title: "Ann Clooney",
                    text: "Account Manager"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text: "20 minutes ago",
                },
                email: "annclooney@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures6,
                    title: "Patric Smith",
                    text: "Project Manager"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"1 hour ago",
                },
                email: "patricksmith@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures5,
                    title: "Nicky Hunt",
                    text: "Product Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"40 minutes ago",
                },
                email: "nickyhunt@design.comdffds",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures7,
                    title: "Jane Doe",
                    text: "Graphic Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"2 days ago",
                },
                email: "janedoe@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures2,
                    title: "John Doe",
                    text: "CEO"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "johndoe@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"

            },
            {
                picture: {
                    pictureProfile: ProfilePictures,
                    title: "Nina Jones",
                    text: "UX Designer"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "ninajones@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"

            },
            {
                picture: {
                    pictureProfile: ProfilePictures4,
                    title: "Alex Smith",
                    text: "Web Designer"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:" Online now!",
                },
                email: "alexsmith@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures3,
                    title: "Ann Clooney",
                    text: "Account Manager"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text: "20 minutes ago",
                },
                email: "annclooney@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures6,
                    title: "Patric Smith",
                    text: "Project Manager"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"1 hour ago",
                },
                email: "patricksmith@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures5,
                    title: "Nicky Hunt",
                    text: "Product Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"40 minutes ago",
                },
                email: "nickyhunt@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures7,
                    title: "Jane Doe",
                    text: "Graphic Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"2 days ago",
                },
                email: "janedoe@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: ProfilePictures7,
                    title: "Jane Doe",
                    text: "Graphic Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"2 days ago",
                },
                email: "janedoe@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            }

        ];

        const leftItems = this.userList.length % 7;
        let countPages = (this.userList.length - leftItems) / 7;

        if (leftItems !== 0) {
            countPages += 1;
        }

        this.state = {
            total: countPages,
            display: 5,
            number: 1,
        };
    }
    handlerClick(e) {
        store.dispatch({
            type: 'SORT_STATUS',
            payload: {
                status: e.target.value
            }
        });
    }
    render() {
        console.log(this.props.statusProps);

        let activeFirst;
        const listActive = this.userList.filter((item) => {
            if (item.statusUser.class !== "noActive"){
                return item;
            }
        });
        const listNonActive = this.userList.filter((item) => {
            if (item.statusUser.class === "noActive"){
                return item;
            }
        });
        console.log(listNonActive);
        const status = this.props.statusProps || "Active first";

        if (status === "Active first") {
            activeFirst = listActive.concat(listNonActive);
        }
        else if (status === "Active last") {
            activeFirst = listNonActive.concat(listActive);
        }

        const indexStart = this.state.number * 7 - 7;
        const indexEnd = this.state.number * 7;
        const list = activeFirst.slice(indexStart,  indexEnd);
        const forSelectSort = ["Active first","Active last"];
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2 className="TitleUsers">Users <span>({this.userList.length})</span></h2>
                        <SelectSort data={forSelectSort}/>
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
                           {
                               list.map((item,index) => {
                                   return (
                                       <tr className="User" key={index}>
                                           <td className="PictureUser">
                                               <div className="WrapperUsers">
                                                   <span><img src={item.picture.pictureProfile} alt="profilePictures"/></span>
                                                   <div className="fioUser">
                                                       <p>{item.picture.title}</p>
                                                       <span>{item.picture.text}</span>
                                                   </div>
                                               </div>
                                           </td>
                                           <td className="statusUser">
                                               <p className={item.statusUser.class}><i className={item.statusUser.classIcon}></i> {item.statusUser.text}</p>
                                           </td>
                                           <td className="emailUser">
                                               <p>{item.email}</p>
                                           </td>
                                           <td className="phoneUsers">
                                               <p>{item.phone}</p>
                                           </td>
                                           <td className="settingUser">
                                               <i className={item.class}></i>
                                           </td>
                                       </tr>
                                   );
                               })
                           }
                           </tbody>
                       </table>
                    </div>
                    <div className="paginationWrapper">
                        <Pagination
                            total = { this.state.total }
                            current = { this.state.number }
                            display = { this.state.display }
                            onChange = { number => this.setState({ number }) }
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state, props) => {
    console.log(state);

    return {
        statusProps: state.status
    }
};

export default connect(mapState)(Users);