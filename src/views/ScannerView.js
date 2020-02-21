import React from 'react';
import View from "./../components/View.jsx";
import Scanner from "./../components/Scanner.jsx";

import "./ScannerView.css";

export default function ScannerView() {
    return (
        <View name="scanner-view" content={
            <Scanner />
        }/>
    );
}