import React, { Component } from 'react';
import View from "./../components/View.jsx";
import Scanner from "./../components/Scanner.jsx";
import NoticeUp from "./../components/NoticeUp.jsx";
import ToggleInstructions from "./../components/ToggleInstructions.jsx";

import "./ScannerView.css";

export default class ScannerView extends Component {
    state = {
        showInstructions: true
    }

    handleScan = data => {
        if (data) {
            alert(data);
        }
    }

    handleToggleInstructions = () => {
        this.setState({ showInstructions: !(this.state.showInstructions) });
    }

    render() {
        return (
            <View name="scanner-view" content={
                <React.Fragment>
                    <ToggleInstructions visible={!(this.state.showInstructions)} onToggleInstructions={this.handleToggleInstructions}/>
                    <NoticeUp visible={this.state.showInstructions} onToggleInstructions={this.handleToggleInstructions}/>
                    <Scanner onScan={this.handleScan} enabled={true}/>
                </React.Fragment>
                
            }/>
        );
    }
}