import React, { Component } from 'react';
import "./Button.css";
import "./SmallCalcButton.css";

class SmallCalcButton extends Component {
    render() { 
        return (
            <button 
                className={"small-button " + this.props.colour}
                type="submit"
                onClick={() => this.props.onClick(this.props.function)}>
                    <p>{this.props.caption}</p>
            </button>
        );
    }
}
 
export default SmallCalcButton;