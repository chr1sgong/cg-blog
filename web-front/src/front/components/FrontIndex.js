import React, { Component } from 'react';
import Banner from './banner/Banner';
import FrontMenu from './menu/FrontMenu';

// 首页
export default class FrontIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Banner />
                <FrontMenu />
            </div>
        );
    }
}