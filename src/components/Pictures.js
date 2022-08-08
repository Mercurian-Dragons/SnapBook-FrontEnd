
import { useState, useEffect } from "react";
const Pictures = () => {
const [caption, SetCaption] = useState('')

const handleSubmit = (event) => {
  event.preventDefault()
  const value = event.target.caption.value
  SetCaption(value)
}

useEffect(() => {
},[caption])
console.log(caption)

  return (
  <div>
    <h3>
      Pictures Component
    </h3>
    <form onSubmit={handleSubmit}>
      <div>
        <span>File</span>
        <input name='myImage' type='file' />
      </div>
      <div>
        <input name='caption' type='text' placeholder='enter a caption' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default Pictures;