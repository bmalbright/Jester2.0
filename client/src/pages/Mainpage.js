import React from 'react';
import logo from '../images/jester-icon.png';
import { Card } from "react-bootstrap";
import '../App.css';

function Main() {
    return (
        <div className="main">
        <Card>

        <img src={logo} alt="logo" className="logo"/>


        </Card>
        </div>
    )
}

export default Main
