import React, { Component } from 'react';

import "./Heading.css";

class Heading extends Component {
    render() { 
        return (  
            <p className="heading">
                {this.props.text}
            </p>
        );
    }
}
 
export default Heading;