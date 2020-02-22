import React, { Component } from 'react';
import "./ToggleInstructions.css";

class ToggleInstructions extends Component {
    render() { 
        return ( 
            <button class="toggle-instructions acrylic acrylic-dark" style={this.props.visible ? {visibility: "visible"} : {visibility: "hidden"}} onClick={() => this.props.onToggleInstructions()}>?</button>
        );
    }
}
 
export default ToggleInstructions;