import React from "react";

import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home () {
    return(

        <>
            <Container>
                <Row>
                    <Col lg="8"><Blogs/ ></Col>
                    <Col >
                        <CreateBlog/>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Home;