import React, { Component } from 'react';
import instructions from "./../assets/notice-up.svg";
import "./NoticeUp.css";

class NoticeUp extends Component {
    render() { 
        return (
            <div className="notice-up acrylic acrylic-dark" style={this.props.visible ? {visibility: "visible"} : {visibility: "hidden"}} onClick={() => this.props.onToggleInstructions()}>
                <img src={instructions}/>
            </div>
        );
    }
}
 
export default NoticeUp;