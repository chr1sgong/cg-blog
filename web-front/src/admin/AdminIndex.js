import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";

export default class AdminIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>AdminIndex</h1>
                <SimpleMDE onChange={this.handleChange} />
            </div>
        )
    }
}