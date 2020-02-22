import React, { Component } from "react";
import LinkLabel from './LinkLabel.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import { strings } from './../strings';

import "./BottomSheet.css"

class BottomSheet extends Component {
    makeButton = (route, to, caption, colour) => {
        return (
            <Link to={route}>
                <Button colour={colour} caption={caption} onClick={() => this.props.onSetCurrentView(to)}></Button>
            </Link>
        );
    }

    bringCurrentView = () => {
        if (this.props.current === "home") {
            return this.makeButton(this.props.routes.scan, "scan", strings.start_scanning, "blue-button");
        } else if (this.props.current === "scan") {
            return this.makeButton(this.props.routes.home, "home", strings.stop_scanning, "red-button");
        }
    }

    render() { 
        return (  
            <div className="acrylic acrylic-light bottom-sheet">
                {this.bringCurrentView()}
                <LinkLabel text={strings.manually}/>
            </div>
        );
    }
}
 
export default BottomSheet;