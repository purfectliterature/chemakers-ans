import React, { Component } from 'react';
import "./LinkLabel.css";

class LinkLabel extends Component {
    render() { 
        return (  
            <p className="link-label" onClick={this.props.onClick}>{this.props.text}</p>
        );
    }
}
 
export default LinkLabel;