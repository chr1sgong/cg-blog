import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header } = Layout;
export default class AdminMenu extends Component {
    constructor(props) {
        super(props);
        this.handleNav1Click = this.handleNav1Click.bind(this);
        this.handleNav2Click = this.handleNav2Click.bind(this);
        this.handleNav3Click = this.handleNav3Click.bind(this);
    }

    handleNav1Click() {
        console.log('test1');
    }

    handleNav2Click() {
        console.log('test2');
    }

    handleNav3Click() {
        console.log('test3');
    }

    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}>

                    <Menu.Item key="1" onClick={this.handleNav1Click}>
                        <Link to="/admin/write">
                            nav 1
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.handleNav2Click}>
                        <Link to="/admin">
                            nav 2
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.handleNav3Click}>
                        <Link to="/admin/write">
                            nav 3
                            </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}