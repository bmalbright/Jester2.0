import React from 'react';
import logo from '../images/JesterLogo2.svg';
import { Col } from "react-bootstrap";
import '../App.css';

function Main() {
    return (
        <div className="main">
        <Col className="mainImg">

        <img className="imageFrame" src={logo} alt="landing page large logo"/>

        </Col>
        </div>
    )
}

export default Main