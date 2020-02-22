import React, { Component } from 'react';
import View from './../components/View.jsx';
import "./AnswerView.css";
import Answer from '../components/Answer.jsx';
import { glyphs } from '../glyphs.js';
import { Link } from "react-router-dom";

class AnswerView extends Component {
    render() { 
        return (  
            <View name="answer-view" content={
                <React.Fragment>
                    <Link to="/chemakers-ans/"><button className="close acrylic acrylic-dark" onClick={this.props.onClose}><img src={glyphs.close} alt="X"/></button></Link>
                    <Answer code={this.props.code} />
                </React.Fragment>
            }/>
        );
    }
}
 
export default AnswerView;