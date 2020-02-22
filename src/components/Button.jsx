import React, { Component } from 'react';
import "./Button.css";

class Button extends Component {
    addIcon = () => {
        if (this.props.icon) {
            return (<div><img src={this.props.icon} alt="icon" style={{
                "height": "100%",
                "width": "100%"
            }}/></div>);
        }
    }

    render() { 
        return ( 
            <button className={"button " + this.props.colour} type="submit" onClick={this.props.onClick}>
                {this.props.caption}
                {this.addIcon()}
            </button>
         );
    }
}
 
export default Button;