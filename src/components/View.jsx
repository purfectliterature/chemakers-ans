import React, { Component } from 'react';

import "./View.css";

class View extends Component {
    render() { 
        return (  
            <section className={this.props.name + " view"}>
                {this.props.content}
            </section>
        );
    }
}
 
export default View;