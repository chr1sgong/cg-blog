import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import AdminMenu from './components/menu/AdminMenu';

export default class AdminIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>AdminIndex</h1>
                <AdminMenu />
                {/* <SimpleMDE onChange={this.handleChange} /> */}
            </div>
        )
    }
}