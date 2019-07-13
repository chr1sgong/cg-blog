import React, {Component} from 'react';
import { Carousel } from 'antd';

import style from './style.css';

const carouselImgs = [
    require('./banner_1.png'),
    require('./banner_2.png'),
    require('./banner_3.png'),
];

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.carouselImgContainer}>
                <img src={carouselImgs[1]} className={style.img}/>
            </div>
           
        );
    }
}