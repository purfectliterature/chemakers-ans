import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

import "./Scanner.css";

class Scanner extends Component {
    state = {  
        result: "No Result"
    }

    handleScan = data => {
        if (data) {
            this.setState({ result: data });
        }
    }

    handleError = err => {
        console.error(err);
    }

    render() { 
        const previewStyle = {
            width: "100%",
            height: "fit-content"
        }

        return ( 
            <div className="scanner">
                <QrReader
                    style={previewStyle}
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode={"rear"}
                    showViewFinder={false}
                    objectFit={"fill"}
                />

                <p>{this.state.result}</p>
            </div>
        );
    }
}
 
export default Scanner;