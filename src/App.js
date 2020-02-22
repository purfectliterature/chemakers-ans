import React, { Component } from "react";
import BottomSheet from "./components/BottomSheet.jsx";
import HomeView from "./views/HomeView";
import ScannerView from "./views/ScannerView";
import ManualEntryView from "./views/ManualEntryView";
import AnswerView from "./views/AnswerView";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import "./App.css";
import { answers } from "./answers.js";

const routes = {
    home: "/",
    scan: "/scan",
    manual: "/manual",
    viewer: "/viewer"
};

const meta = {
    "mobile-web-app-capable": "yes"
};

class App extends Component {
    state = {
        currentView: "home",
        code: "01"
    }

    setCurrentView = viewName => {
        this.setState({ currentView: viewName });
    }

    setCode = code => {
        this.setState({ code: code });
    }

    goBackToHomeFromAnswersViewer = () => {
        this.setCurrentView("home");
    }

    validateCode = code => {
        return (code in answers);
    }

    render() {
        return (
            <Router>
                <BottomSheet routes={routes} current={this.state.currentView} onValidateCode={this.validateCode} onSetCurrentView={this.setCurrentView} onViewAnswer={this.setCode}/>

                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/scan" render={(props) => <ScannerView {...props} onValidateCode={this.validateCode} onSetCurrentView={this.setCurrentView} onViewAnswer={this.setCode} />}/>
                    <Route path="/manual" component={ManualEntryView}/>
                    <Route path="/viewer" render={(props) => <AnswerView {...props} code={this.state.code} onClose={this.goBackToHomeFromAnswersViewer}/>}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
