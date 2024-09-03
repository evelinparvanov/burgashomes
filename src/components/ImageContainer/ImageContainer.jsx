import React from "react";
import "./ImageContainer.css";
import image from '../../assets/prehouse3.jpeg'

const ImageContainer = ({ altText, text }) => {
  return (
    <div className="image-container">
      <img src={image} alt={altText} className="image" />
      {text && <div className="overlay-text">{text}</div>}
    </div>
  );
};

export default ImageContainer;
