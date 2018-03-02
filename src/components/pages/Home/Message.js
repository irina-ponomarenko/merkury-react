import React from 'react';

class Message extends React.Component{
    render(){
        return(
               <div>
                   <div className="message">
                       <div className="wrapperBlock">
                           <div className="iconUser">
                               <span>N</span>
                           </div>
                           <div className="titleBlock">
                               <p>New website for Symu.co</p>
                               <span> <i className="fa fa-clock-o"></i> 5 days delays</span>
                           </div>
                       </div>
                       <div className="option">
                           <i className="fa fa-ellipsis-v"></i>
                       </div>
                   </div>
                   <div className="message">
                       <div className="wrapperBlock">
                           <div className="iconUser">
                               <span>F</span>
                           </div>
                           <div className="titleBlock">
                               <p>Free business PSD Template </p>
                               <span> <i className="fa fa-clock-o"></i> 2 days delays</span>
                           </div>
                       </div>
                       <div className="option">
                           <i className="fa fa-ellipsis-v"></i>
                       </div>
                   </div>
                   <div className="message">
                       <div className="wrapperBlock">
                           <div className="iconUser">
                               <span>N</span>
                           </div>
                           <div className="titleBlock greySpan">
                               <p>New logo for JCD.pl</p>
                               <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                           </div>
                       </div>
                       <div className="option">
                           <i className="fa fa-ellipsis-v"></i>
                       </div>
                   </div>
                   <div className="message">
                       <div className="wrapperBlock">
                           <div className="iconUser">
                               <span>F</span>
                           </div>
                           <div className="titleBlock greySpan">
                               <p>Free Icons Set vol. 3</p>
                               <span> <i className="fa fa-clock-o"></i> 10 days left</span>
                           </div>
                       </div>
                       <div className="option">
                           <i className="fa fa-ellipsis-v"></i>
                       </div>
                   </div>
               </div>
        )
    }
}
export  default Message;