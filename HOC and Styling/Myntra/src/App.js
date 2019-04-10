
import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/head";
import Carousel from "./components/carousel/Carousel";
import HotDeals from "./components/hotDeals/hotDeals";
import Brands from "./components/brandsinFocus/BrandsinFocus";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Carousel className="carousel" />
                <HotDeals />
                <Brands className="brands" />
            </div>
        );
    }
}

export default App;