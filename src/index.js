import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import './fonts/Shapiro 95 Super Wide.ttf'
import App from './App';
import ScannerView from "./views/ScannerView";
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BottomSheet from "./components/BottomSheet.jsx";

document.body.style.overflow = "hidden";

const routes = [
    { id: 1, path: "/", name: "Start scanning"}
];

const router = (
    <Router>
        <BottomSheet buttons={routes}/>

        <Switch>
            <Route exact path="/" component={ScannerView}/>
            <Route path="/scan" component={ScannerView}/>
        </Switch>
    </Router>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
