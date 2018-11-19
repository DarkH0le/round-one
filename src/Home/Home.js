import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import MenuBanner from "./MenuBanner";
import GoogleMaps from "./GoogleMaps";
import HomeGallery from "../Home/HomeGallery";

class Home extends Component {
    render() {
        const { user } = this.props;

        const biggerLead = {
            fontSize: 1.4 + 'em',
            fontWeight: 200
        };

        return (
            <div>
                <NavigationBar user={this.props}/>
                <MenuBanner/>
                <div style={{ height: '100vh', width: '100%' , padding: "4px"}}><GoogleMaps/></div>
                <div style={{ height: '600px', width: '100%' , padding: "4px"}}><HomeGallery/></div>

            </div>
        );
    }
}
export default Home;