import React, { Component } from 'react';
import View from "./../components/View.jsx";
import chemakersAnsLogo from "./../assets/chemakers-ans-white.svg";
import instructions from "./../assets/notice.svg";

import "./HomeView.css";

class HomeView extends Component {
    render() { 
        return (
            <View name="home-view" content={
                <React.Fragment>
                    <div className="top-bar">
                        <img src={chemakersAnsLogo}/>
                    </div>
                    
                    <div className="instructions">
                        <img src={instructions}/>
                    </div>
                </React.Fragment>
            }/>
        );
    }
}
 
export default HomeView;