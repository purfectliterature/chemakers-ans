import React, { Component } from "react";
import Heading from './Heading.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

import "./BottomSheet.css"

class BottomSheet extends Component {
    render() { 
        return (  
            <div className="acrylic bottom-sheet">
                <Heading text="Start to scan the question's QR code!"/>
                { this.props.buttons.map(button => <Link key={button.id} to={button.path}>
                    <Button caption={button.name}></Button>
                </Link>) }
            </div>
        );
    }
}
 
export default BottomSheet;