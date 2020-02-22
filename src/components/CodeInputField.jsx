import React, { Component } from 'react';
import "./CodeInputField.css";

class CodeInputField extends Component {
    makeUnderscore = () => {
        if (this.props.text.length < 3) {
            return <span className="a">_</span>
        }
    }

    render() {
        return (
            <div className="code-input-container">
                <p className="code-input">
                    <span className="a">></span>
                    <span className="num">{this.props.text}</span>
                    {this.makeUnderscore()}
                </p>
            </div>
        );
    }
}
 
export default CodeInputField;