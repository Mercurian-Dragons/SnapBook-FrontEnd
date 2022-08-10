import React from 'react'
// import axios from 'axios'
// import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import PicturesModal from './PicturesModal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, } from "@fortawesome/free-solid-svg-icons"


const UploadPictures = ({ photos }) => {
  // const navigate = useNavigate()
  let { albumId } = useParams()
  let { albumName } = useParams()

  // const bodyFormData = new FormData();
  // bodyFormData.append('url', input)
  // console.log(bodyFormData)

  return (
      <PicturesModal 
        albumId={albumId}
        albumName={albumName}
      />
  )
}

export default UploadPictures;