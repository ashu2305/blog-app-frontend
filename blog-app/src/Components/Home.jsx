import React from "react";

import Blogs from "./Blogs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home () {
    return(

        <>
            <Container>
                <Row>
                    <Col lg="8"><Blogs/ ></Col>
                    <Col >2 of 2</Col>
                </Row>
            </Container>
        </>
    )

}

export default Home;