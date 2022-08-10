import React from 'react'
import axios from 'axios'
import { useState} from "react";
import { useParams, useNavigate } from 'react-router-dom'

const UploadPictures = ({ photos }) => {
  const navigate = useNavigate()
  let { albumId } = useParams()

  const initialInputState = {
    name: '',
    url: ''
  }

  const [input, setInput] = useState(initialInputState);
  const [reload, setReload] = useState(false)

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
    setInput(initialInputState)
    axios.post(`http://localhost:8000/${albumId}/upload`, input)
      .then(res => {
        console.log(res);
        console.log(res.data)
        setReload(true)
      })
  }
 
  return (
    <div>
      <h2>
        Picture Component
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='enter name of image' 
          onChange={handleChange} 
          id='name'
          value={input.name} 
          />
        <input 
          placeholder='upload your image url' 
          onChange={handleChange} 
          id='url'
          value={input.url} 
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
  ) 
}

export default UploadPictures;