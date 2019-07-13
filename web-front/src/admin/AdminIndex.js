import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import AdminMenu from './components/menu/AdminMenu';

import { Button } from 'antd';

export default class AdminIndex extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        textValue: "I am the initial value. Erase me, or try the button above."
    };

    handleChange = value => {
        this.setState({
          textValue: value
        });
      };

    post(params) {
        // todo 修改
        console.log(this.props.value);
    }

    render() {
        return (
            <div>
                <h1>AdminIndex</h1>
                <AdminMenu />
                <SimpleMDE 
                    value={this.state.textValue}
                    onChange={this.handleChange} />
                <Button onClick={this.post}>发表</Button>
            </div>
        )
    }
}