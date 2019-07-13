import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Select, Button } from 'antd';

import AdminMenu from './components/menu/AdminMenu';
import AddArticle from './components/article/AddArticle';

import "easymde/dist/easymde.min.css";

const { Header, Content, Footer } = Layout;
export default class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: "I am the initial value. Erase me, or try the button above."
        };
    }

    render() {
        return (
            <div>
                <h1>AdminIndex</h1>
                <AdminMenu />
               
                <Route path="/admin/write" component={AddArticle} />
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </div>
        )
    }
}