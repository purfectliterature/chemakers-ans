import React, { Component } from 'react';
import View from './../components/View.jsx';
import chemakersAnsLogo from "./../assets/chemakers-ans-white.svg";

import "./ManualEntryView.css";
import "./HomeView.css";

class ManualEntryView extends Component {
    render() { 
        return (  
            <View name="manual-entry-view" content={
                <React.Fragment>
                    <div className="top-bar">
                        <img src={chemakersAnsLogo}/>    
                    </div>
                </React.Fragment>
            }/>
        );
    }
}
 
export default ManualEntryView;