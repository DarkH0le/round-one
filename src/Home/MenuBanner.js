import React, { Component } from 'react';
import {Boxin, FaBars} from 'react-icons/fa';
import { Link } from '@reach/router';
import BannerImage from '../images/cover-round.jpg'
import { StickyContainer, Sticky } from 'react-sticky';
import "./MenuBanner.css"

class ManuBanner extends Component {
    render() {

        let styles = {
            width: 'width:100%',
        };
        return (
            <div className="w-auto">
                <img src={BannerImage} className="img-thumbnail"/>
            </div>

        );
    }
}
export default ManuBanner;