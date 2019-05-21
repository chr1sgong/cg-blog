import React, { Component } from 'react';
import ArticleCell from './assets';

// 文章列表
export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => (
                        <ArticleCell />
                    ))
                }
            </div>
        )
    }
}