import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
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
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu 
                        theme="dark" 
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}>
                        <Menu.Item key="1" onClick={this.handleNav1Click}>nav 1</Menu.Item>
                        <Menu.Item key="2" onClick={this.handleNav2Click}>nav 2</Menu.Item>
                        <Menu.Item key="3" onClick={this.handleNav3Click}>nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        Content
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}