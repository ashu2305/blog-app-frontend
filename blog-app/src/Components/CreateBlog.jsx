import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import './CreateBlog.css'

import config from "../config.json";
function CreateBlog(){
    const [blogPost, setBlog] = useState({
        title: '',
        author: '',
        desc: ''
    });

    const handleChange = (e) => {
        setBlog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const postBlog =async() => {
        try{
            const res= await axios.post( `${config.BASE}create` , blogPost  );
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }

    const onSubmit =(e) => {
        if(blogPost.title.trim() !== ""  && blogPost.author.trim() !== ""  && blogPost.desc.trim() !== "" ){
            postBlog();
        }else{
            window.alert("Blog details are  empty");
        }
    }

    console.log(blogPost);

     return(
        <>
        
        <Modal.Dialog className="dialog">
            <Modal.Header>
                <Modal.Title>Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form className="form">
            <Form.Group controlId="">
                <Form.Label><b>Title of Blog</b></Form.Label> 
                    <Form.Control className="input" type="text" name="title" value={blogPost.title} onChange={handleChange} placeholder="" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label><b>Author Name</b></Form.Label>
                <Form.Control className="input"type="text" name="author" value={blogPost.author} onChange={handleChange}  placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Description</b></Form.Label>
                <Form.Control className="input"as="textarea" name="desc" value={blogPost.desc} onChange={handleChange}  rows={3} />
            </Form.Group>
            
            <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>Create a Blog</Button>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
        </>
    )
}
export default CreateBlog;