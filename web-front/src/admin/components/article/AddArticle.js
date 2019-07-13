import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import axios from 'axios';

import { Form, Input, Select, Button } from 'antd';

const BASE_DOMAIN ="http://127.0.0.1:8080/admin"
// 发表文章
export default class AddArticle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "title",
            content: "I am the initial value. Erase me, or try the button above.",
            category: "category"
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.post = this.post.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
        console.log(this.state);
    }

    handleChange = (value) => {
        this.setState({
            content: value
        });
    };

    post = (params) => {
        // todo 修改
        const data = this.state;
        console.log(data);
        const config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios.post(`${BASE_DOMAIN}/newArticle`, data, config);
    }

    render() {
        return(
            <div>
                <h1>写文章</h1>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="标题">
                        <Input
                            type="text"
                            placeholder="输入标题"
                            onChange={this.handleTitleChange}
                        />
                    </Form.Item>
                </Form>
                <SimpleMDE
                    value={this.state.content}
                    onChange={this.handleChange} />
                <Button onClick={this.post}>发表</Button>
            </div>
        )
    }
}