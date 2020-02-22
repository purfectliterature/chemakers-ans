import React, { Component } from 'react';
import "./LinkLabel.css";

class LinkLabel extends Component {
    render() { 
        return (  
            <p className="link-label">{this.props.text}</p>
        );
    }
}
 
export default LinkLabel;