import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./Home/NavigationBar";
import MenuBanner from "./Home/MenuBanner";
import Home from "./Home/Home";
import GoogleMaps from "./Home/GoogleMaps";
import GalleryHome from "./Home/GalleryHome";
import HomeGallery from "./Home/HomeGallery";

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        };
    }

  render() {
    return (
      <div className="App">
        <Home user={this.state.user} />
        {/*<MenuBanner/>*/}
      </div>
    );
  }
}

export default App;
