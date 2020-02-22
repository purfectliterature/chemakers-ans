import React, { Component } from 'react';
import View from "./../components/View.jsx";
import Scanner from "./../components/Scanner.jsx";
import NoticeUp from "./../components/NoticeUp.jsx";
import ToggleInstructions from "./../components/ToggleInstructions.jsx";
import { Redirect } from "react-router-dom";

import "./ScannerView.css";

export default class ScannerView extends Component {
    state = {
        showInstructions: true,
        redirect: null
    }

    handleScan = data => {
        if (data) {
            if (this.props.onValidateCode(data)) {
                this.props.onViewAnswer(data);
                this.props.onSetCurrentView("viewer")
                this.setState({ redirect: "/chemakers-ans/viewer" });
            }
        }
    }

    handleToggleInstructions = () => {
        this.setState({ showInstructions: !(this.state.showInstructions) });
    }

    render() {
        if (this.state.redirect) {
            const redirector = <Redirect to={this.state.redirect} />;
            this.setState({ redirect: null });
            return redirector;
        } else {
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
}