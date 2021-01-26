import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './CreateBlog.css'
function CreateBlog(){
     return(
        <>
        
        <Modal.Dialog className="dialog">
            <Modal.Header>
                <Modal.Title>Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form className="form">
            <Form.Group controlId="">
                <Form.Label><b>Title of Blog</b></Form.Label>
                    <Form.Control className="input" type="text" placeholder="" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label><b>Author Name</b></Form.Label>
                <Form.Control className="input"type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Description</b></Form.Label>
                <Form.Control className="input"as="textarea" rows={3} />
            </Form.Group>
            
            <Modal.Footer>
            <Button variant="primary">Create a Blog</Button>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
        </>
    )
}
export default CreateBlog;