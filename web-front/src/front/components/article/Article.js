import React, {Component} from 'react';

// 文章详情
export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
            category: this.props.category
        };
        this.updateContent = this.updateContent.bind(this);
    }
    
    updateContent(content) {
        this.setState({
            content: content
        });
    }
}