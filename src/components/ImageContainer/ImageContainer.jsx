import React from "react";
import "./ImageContainer.css";

const ImageContainer = ({ imageUrl, altText, text }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={altText} className="image" />
      {text && <div className="overlay-text">{text}</div>}
    </div>
  );
};

export default ImageContainer;
