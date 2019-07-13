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
                    
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <h2>按钮-写文章</h2>
                        <h2>展示所有文章-可以点击进去，然后查看详情</h2>
                        <h2>相比与游客，管理员可以选择编辑文章，也可以设置文章的属性为私密或者公开</h2>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}