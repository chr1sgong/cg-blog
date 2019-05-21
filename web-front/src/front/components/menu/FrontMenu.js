import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

export default class FrontMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home'
        };
    }

    handleClick = e => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    Home
                </Menu.Item>
                <Menu.Item key="coding">
                    Coding
                </Menu.Item>
                <Menu.Item key="life">
                    Life
                </Menu.Item>
            </Menu>
        );
    }
}
