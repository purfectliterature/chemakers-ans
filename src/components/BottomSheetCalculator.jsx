import React, { Component } from 'react';
import "./BottomSheet.css";
import "./BottomSheetCalculator.css";
import Heading from './Heading.jsx';
import { strings } from '../strings';
import { glyphs } from "./../glyphs";
import SmallCalcButton from './SmallCalcButton';
import CodeInputField from './CodeInputField';

class BottomSheetCalculator extends Component {
    state = {
        calculator: {
            row1: [7, 8, 9],
            row2: [4, 5, 6],
            row3: [1, 2, 3],
            row4: ["clear", 0, "submit"]
        },

        code: ""
    }

    handleSmallCalcButtonClick = message => {
        if (message === "clear") {
            this.setState({ code: this.state.code.substring(0, this.state.code.length-1) });
        } else if (message === "submit") {
            this.props.onSubmit(this.state.code);
        } else {
            if (this.state.code.length < 3) {
                this.setState({ code: this.state.code + message });
            }
        }
    }

    render() { 
        return (  
            <div className="acrylic acrylic-light bottom-sheet-calculator">
                <Heading text={strings.enter_your_question_code}/>
                <CodeInputField text={this.state.code} onTextChange={this.handleTextChange}/>

                <div className="calculator">
                    <div className="calc-row">
                        {this.state.calculator.row1.map((fn) => <SmallCalcButton key={fn} colour="blue-button" function={fn} caption={fn} onClick={this.handleSmallCalcButtonClick}/>)}
                    </div>
                    
                    <div className="calc-row">
                        {this.state.calculator.row2.map((fn) => <SmallCalcButton key={fn} colour="blue-button" function={fn} caption={fn} onClick={this.handleSmallCalcButtonClick}/>)}
                    </div>

                    <div className="calc-row">
                        {this.state.calculator.row3.map((fn) => <SmallCalcButton key={fn} colour="blue-button" function={fn} caption={fn} onClick={this.handleSmallCalcButtonClick}/>)}
                    </div>

                    <div className="calc-row">
                        <SmallCalcButton colour="red-button" function={this.state.calculator.row4[0]} key="del" caption={<img style={{width: "40px"}} alt="<<" src={glyphs.backspace}/>} onClick={this.handleSmallCalcButtonClick}/>
                        <SmallCalcButton colour="blue-button" function={this.state.calculator.row4[1]} key="0" caption={0} onClick={this.handleSmallCalcButtonClick}/>
                        <SmallCalcButton colour="green-button" function={this.state.calculator.row4[2]} key="submit" caption={<img style={{width: "40px"}} alt=">" src={glyphs.arrowForward}/>} onClick={this.handleSmallCalcButtonClick}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BottomSheetCalculator;