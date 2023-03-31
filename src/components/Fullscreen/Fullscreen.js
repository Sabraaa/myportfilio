import React from 'react'
import ProImg from "../../assets/imgproject.jpg"

const Fullscreen = ({  ProImg, onClose }) => {
  return (
    <div className="full-screen-image" onClick={onClose}>
    <div className="image-container" style={{ backgroundImage: `url(${ProImg})` }}></div>
  </div>
  )
}

export default Fullscreen