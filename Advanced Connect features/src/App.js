import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <div className={"d-flex"}>
            <div className={"col-7 border"}>
            <Home />
            </div>
            <div className={"col-5"}>
            <Cart />
            </div>
            </div>
            </div>
    );
    }
}

export default App;