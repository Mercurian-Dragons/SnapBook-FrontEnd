import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import PicturesModal from './PicturesModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, } from "@fortawesome/free-solid-svg-icons"



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

      <PicturesModal />
      
  )
}

export default UploadPictures;