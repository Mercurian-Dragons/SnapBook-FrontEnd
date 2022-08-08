import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';

const Album = () => {
  const [album, setAlbum] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/albums')
      .then(res => setAlbum(res.data))
      console.log(album)
    },[])


if(!album){
  <p>loading</p>
}

return (
  <div>
    <h2>
      album
    </h2>
    <div>
    {album.map((album) => (
      <AlbumCard key={album._id} id={album._id} albumName={album.albumName} />
    ))}
    </div>
    <button>
      delete
    </button>
  </div>
)}

export default Album


