import React, { Component } from 'react';
import View from "./../components/View.jsx";
import Scanner from "./../components/Scanner.jsx";

import "./ScannerView.css";



export default class ScannerView extends Component {
    handleScan = data => {
        if (data) {
            alert(data);
        }
    }

    render() {
        return (
            <View name="scanner-view" content={
                <Scanner onScan={this.handleScan}/>
            }/>
        );
    }
}