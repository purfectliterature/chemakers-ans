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
import { render } from "@testing-library/react";

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
        currentView: "manual"
    }

    setCurrentView = viewName => {
        this.setState({ currentView: viewName });
    }

    render() {
        return (
            <Router>
                <BottomSheet routes={routes} current={this.state.currentView} onSetCurrentView={this.setCurrentView}/>

                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/scan" component={ScannerView}/>
                    <Route path="/manual" component={ManualEntryView}/>
                    <Route path="/viewer" component={AnswerView}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
