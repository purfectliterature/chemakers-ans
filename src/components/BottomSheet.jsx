import React, { Component } from "react";
import LinkLabel from './LinkLabel.jsx';
import Button from './Button.jsx';
import { Link, Redirect } from 'react-router-dom';
import { strings } from './../strings';
import { glyphs } from '../glyphs';

import "./BottomSheet.css"
import BottomSheetCalculator from "./BottomSheetCalculator.jsx";

class BottomSheet extends Component {
    state = {
        redirect: null
    }

    handleManualEntry = code => {
        if (code) {
            if (this.props.onValidateCode(code)) {
                this.props.onViewAnswer(code);
                this.props.onSetCurrentView("/viewer")
                this.setState({ redirect: "/viewer" });
            }
        }
    }

    makeButton = (route, to, caption, colour, icon) => {
        return (
            <Link to={route}>
                <Button colour={colour} caption={caption} onClick={() => this.props.onSetCurrentView(to)} icon={icon}></Button>
            </Link>
        );
    }

    bringCurrentView = () => {
        if (this.props.current === "home" || this.props.current === "manual") {
            return this.makeButton(this.props.routes.scan, "scan", strings.start_scanning, "blue-button", glyphs.scan);
        } else if (this.props.current === "scan") {
            return this.makeButton(this.props.routes.home, "home", strings.stop_scanning, "red-button", glyphs.close);
        }
    }

    bringManualEntry = () => {
        if (this.props.current !== "manual") {
            return <Link to={this.props.routes.manual}><LinkLabel text={strings.manually} onClick={() => this.props.onSetCurrentView("manual")}/></Link>
        } else {
            return <BottomSheetCalculator onSubmit={this.handleManualEntry}/>
        }
    }

    render() {
        if (this.state.redirect) {
            const redirector = <Redirect to={this.state.redirect} />;
            this.setState({ redirect: null });
            return redirector;
        } else {
            return (
                <div className="acrylic acrylic-light bottom-sheet">
                    <div className="padded-zone">
                        {this.bringCurrentView()}
                    </div>
                    {this.bringManualEntry()}
                </div>
            );
        }
    }
}
 
export default BottomSheet;