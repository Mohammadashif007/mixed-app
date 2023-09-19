import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link></Link>
            <Link to='/'>First Page</Link>
            <Link to='/foods'>Foods</Link>
            {/* <a href="">Fist Page</a>
            <a href="">Foods</a>
            <a href="">Countries</a>
            <a href="">Gym</a>
            <a href="">Weather</a> */}
        </nav>
    );
};

export default Header;
