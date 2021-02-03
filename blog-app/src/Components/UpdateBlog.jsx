import React, {useState, useEffect} from "react";
import {Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import './CreateBlog.css'

import config from "../config.json";
function CreateBlog(props){
    let id = props.match.params.id;
    const [blogPost, setBlog] = useState({
        title: '',
        author: '',
        desc: ''
    });
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchBlog = async() => {
            try{
                
                const res = await axios.get(`${config.BASE}blog/${id}`);
                console.log(res.data);
                if(res.data){
                    let blog = res.data;
                    setBlog({
                        title: blog.title,
                        author: blog.author,
                        desc: blog.desc
                    });
                }
            }
            catch(error){
                console.log(error);
            }
            
        } 
        fetchBlog();

    }, []);


    const handleChange = (e) => {
        setBlog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const postBlog =async() => {
        try{
            const res= await axios.put( `${config.BASE}update/${id}` , blogPost  );
            if(res.data){
                setUpdated(true);
                window.alert("blog Updated");
                // window.location.reload(false);
            }
        }catch(err){
            console.log(err);
        }
    }
    if(updated){
        return <Redirect to={"/fullblog/"+id} />;
    }

    const onSubmit =(e) => {
        if(blogPost.title.trim() !== ""  && blogPost.author.trim() !== ""  && blogPost.desc.trim() !== "" ){
            postBlog();
        }else{
            window.alert("Blog details are  empty");
        }
    }


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
            <Button variant="primary" onClick={onSubmit}>Update a Blog</Button>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
        </>
    )
}
export default CreateBlog;