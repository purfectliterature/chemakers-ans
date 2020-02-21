import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import "./Scanner.css";

class Scanner extends Component {
    state = {  
        previewStyle: {
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
            "object-fit": "cover"
        },
        delay: 300,
        facingMode: "environment",
        showViewFinder: false
    }

    handleError = err => {
        console.error(err);
    }

    render() { 
        return (
            <QrReader
                className="scanner-sec"
                delay={this.state.delay}
                onError={this.handleError}
                onScan={(data) => this.props.onScan(data)}
                facingMode={this.state.facingMode}
                showViewFinder={this.state.showViewFinder}
            />
        );
    }
}
 
export default Scanner;