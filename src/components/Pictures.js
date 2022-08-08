import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
const Pictures = () => {
  const [file, setFile] = useState()
  const [caption, setCaption] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("caption", caption)
    await axios.post("http://localhost:8000/album/62ed7975d9ebd701018ca344", formData, { headers: {'Content-Type': 'multipart/form-data'}})
  }
  return (
    <form onSubmit={handleSubmit}>
       <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
       <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
       <button type="submit">Submit</button>
     </form>
  ) 
}

export default Pictures;