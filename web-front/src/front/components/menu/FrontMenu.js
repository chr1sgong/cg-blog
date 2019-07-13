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
        });
    }

    render() {
        return (
            <div>
            <Menu theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="programming">
                    <Link to='/programming'>Programming</Link>
                </Menu.Item>
                <Menu.Item key="life">
                    <Link to="/life">Life</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="about">About</Link>
                </Menu.Item>
            </Menu>
            {/* <Router>
                <Route path="/programming" component={Programming} />
                <Route path="/life" component={Life} />
                <Route path="/about" component={About} />
            </Router> */}
            </div>
            
        );
    }
}
