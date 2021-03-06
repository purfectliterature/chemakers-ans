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

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/Toast.css";

import "./App.css";
import { answers } from "./answers.js";
import { Helmet } from "react-helmet";
import { strings } from "./strings.js";
const routes = {
    home: "/chemakers-ans/",
    scan: "/chemakers-ans/scan",
    manual: "/chemakers-ans/manual",
    viewer: "/chemakers-ans/viewer"
};

class App extends Component {
    state = {
        currentView: "home",
        code: "01",
        toastId: null
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

    toastInvalidCode = () => {
        if (!toast.isActive(this.state.toastId)) {
            this.setState({ toastId: toast(strings.problem_scanning, {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-notification",
                containerId: "problem-scanning",
                toastId: "problem-scanning",
                progressClassName: "toast-notification-progress-bar"
            }) });
        }
    }

    render() {
        return (
            <Router>
                <BottomSheet routes={routes} current={this.state.currentView} onInvalidCode={this.toastInvalidCode} onValidateCode={this.validateCode} onSetCurrentView={this.setCurrentView} onViewAnswer={this.setCode}/>

                <Switch>
                    <Route exact path="/chemakers-ans/" component={HomeView}/>
                    <Route path="/chemakers-ans/scan" render={(props) => <ScannerView {...props} onInvalidCode={this.toastInvalidCode} onValidateCode={this.validateCode} onSetCurrentView={this.setCurrentView} onViewAnswer={this.setCode} />}/>
                    <Route path="/chemakers-ans/manual" component={ManualEntryView}/>
                    <Route path="/chemakers-ans/viewer" render={(props) => <AnswerView {...props} code={this.state.code} onClose={this.goBackToHomeFromAnswersViewer}/>}/>
                </Switch>

                <Helmet>
                    <title>CheMakers Answers</title>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"/>
                    <meta name="theme-color" content="#DD2076"/>
                </Helmet>

                <ToastContainer autoClose={3000} transition={Bounce} closeButton={false} enableMultiContainer containerId={"problem-scanning"} />
            </Router>
        );
    }
}

export default App;
