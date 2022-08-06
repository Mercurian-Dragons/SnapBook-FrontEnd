import { useNavigate } from "react-router-dom"
// each individual album
const AlbumCard = ({ id, albumName }) => {

  const navigate = useNavigate()

  const handleClick = (event) => {
    console.log(event.target.id)
    // id of album
    navigate(`photos/${event.target.id}`)
  }

  return (
    <div>
      <p onClick={handleClick} id={id}>
        {albumName}
      </p>
      <h3>
        album card
      </h3>
    </div>
  )
}

export default AlbumCard