import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, } from "@fortawesome/free-solid-svg-icons"

const UploadPictures = () => {
  const navigate = useNavigate()
  let { albumId } = useParams()
  const [input, setInput] = useState({
    name: '',
    url: ''
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
    console.log(event.target.id)
    console.log(event.target.value)
  }

  // const bodyFormData = new FormData();
  // bodyFormData.append('url', input)
  // console.log(bodyFormData)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8000/${albumId}/upload`, input)
      .then(res => {
        console.log(res);
        console.log(res.data)
        navigate(`/${albumId}/photos?`)
      })
  }

  return (
    <div>
      // <Picture Component/>
      {/* <Button
      </Button> */}
      // <FontAwesomeIcon icon={faPlus} />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" 
          placeholder="Enter name of image" 
            onChange={handleChange}
            id='name'
            value={input.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
          type="password" 
          placeholder="Upload your Image URL" 
            onChange={handleChange}
            id='url'
            value={input.url}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default UploadPictures;