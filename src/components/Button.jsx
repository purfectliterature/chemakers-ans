import React, { Component } from 'react';

import "./Button.css";

class Button extends Component {
    render() { 
        return ( 
            <button class="button ripple" type="submit">{this.props.caption}</button>
         );
    }
}
 
export default Button;