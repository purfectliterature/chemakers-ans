import React, { Component } from 'react';

import "./Button.css";

class Button extends Component {
    render() { 
        return ( 
            <button className={"button " + this.props.colour} type="submit" onClick={this.props.onClick}>{this.props.caption}</button>
         );
    }
}
 
export default Button;