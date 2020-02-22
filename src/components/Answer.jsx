import React, { Component } from 'react';
import "./Answer.css";
import Viewer from "viewerjs/dist/viewer.js";
import "viewerjs/dist/viewer.css";
import { answers } from "./../answers";

class Answer extends Component {
    componentDidMount = () => {
        const viewer = new Viewer(document.getElementById("image"), {
            inline: true,
            movable: true,
            rotatable: true,
            zoomable: true,
            navbar: false,
            title: false,
            button: false,
            toolbar: {
                zoomIn: {show: 1, size: "large"},
                zoomOut: {show: 1, size: "large"},
                oneToOne: {show: 1, size: "large"},
                reset: {show: 1, size: "large"},
                prev: 0,
                play: 0,
                next: 0,
                rotateLeft: {show: 1, size: "large"},
                rotateRight: {show: 1, size: "large"},
                flipHorizontal: {show: 1, size: "large"},
                flipVertical: {show: 1, size: "large"}
            }
        });

        return viewer;
    }

    render() { 
        return (  
            <img className="answer-img" id="image" src={answers[this.props.code]} alt="answer"/>
        );
    }
}
 
export default Answer;