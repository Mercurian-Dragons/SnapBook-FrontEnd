import React from 'react'
import { useParams } from 'react-router-dom'
import PicturesModal from './PicturesModal';


const UploadPictures = ({ photos }) => {
  // const navigate = useNavigate()
  let { albumId } = useParams()
  let { albumName } = useParams()

  return (
      <PicturesModal 
        albumId={albumId}
        albumName={albumName}
      />
  )
}

export default UploadPictures;