import React, { Component } from 'react';
import Banner from './banner/Banner';
import FrontMenu from './menu/FrontMenu';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Programming from './programming/Programming';
import Life from './life/Life';
import About from './about/About';

// 首页
export default class FrontIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <Banner />
                    <FrontMenu />
                    <Route path="/programming" component={Programming} />
                    <Route path="/life" component={Life} />
                </Router>
            </div>
        );
    }
}