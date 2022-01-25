import React from 'react';
import { Container, Image } from 'react-bootstrap';
import biglogo from '../images/JesterLogo2.svg'

const landing = () => {
    return (
        <Container>
          <Image src={biglogo} alt='biglogo'/>
        </Container>

    )
};

export default landing;

