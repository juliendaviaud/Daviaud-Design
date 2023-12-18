import React, { Fragment, createElement, useRef } from "react";
import "./PhotoGallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import closeIcon from "../../assets/images/white-cross.svg";

// The number of columns change by resizing the window
const PhotoGallery = ({photos}) => {

  const lightbox = useRef(null);

  const lightboxImage = useRef(null);

  const showLightbox = (imgsrc) => {
    lightbox.current.classList.add("lightbox-active");
    lightboxImage.current.src = imgsrc;
    /* console.log(imgsrc); */
  };

  const hideLightbox = () => {
    lightbox.current.classList.remove("lightbox-active");
  };

  return (
    <Fragment>
      <div id="lightbox" ref={lightbox} onClick={hideLightbox}>
        <img src={closeIcon} alt="" />
        <img onClick={(e) => e.stopPropagation()} className="lightbox-image" ref={lightboxImage} />
      </div>
      {/* const createLightbox = () => {
    return createElement("div", { id: "lightbox", ref: "lightbox" });
  }; */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo}
              style={{ width: "100%", display: "block", borderRadius: "5px" }}
              className="gallery-img"
              onClick={() => showLightbox(photo)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Fragment>
  );
};

export default PhotoGallery;
