
import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
        <img
    alt=""
    src="https://pbs.twimg.com/profile_images/760027937055903744/a0oarSzT_400x400.jpg"
    width="40"
    height="40"
    className="d-inline-block align-top"
        />
        <Navbar.Brand className={"ml-3 font-weight-bold"}>
        TTN Mart
    </Navbar.Brand>
    </Navbar.Brand>
    </Navbar>
);
};

export default Header;