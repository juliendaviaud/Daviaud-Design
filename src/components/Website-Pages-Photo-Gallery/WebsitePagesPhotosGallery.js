import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "./WebsitePagesPhotosGallery.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import oneSuccess from "../../assets/images/one-success/one-success-main-page.png";
import psychologiePositiveFullMainPage from "../../assets/images/app-challenge/psychologie-bien-etre-full-main-page.png";

const WebsitePagesPhotosGallery = ({ lightboxPhotos }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [numberOfPhotos] = useState(lightboxPhotos.size);

  function displayImage(columnNumber) {
    return lightboxPhotos.map((photo, index) => {
      return (
        photo.column === columnNumber ? (
          <div key={index} className="pagePhotoContainer">
          <img src={photo.src} alt="" onClick={() => setIndex(index)} />
        </div>
        ) : (<div>
          
        </div>)
      );
    });
  }

  {/* <div key={index} className="skill-text-container">
      <p className="skill">{photo}</p>
    </div> */}

  return (
    <>
      <div className="allPagesPhotosContainer">
        <div className="firstColumnPhotos">
          {/* for(let i = 0; i < count; i++) {
            
                <div>
                    <h1>{i}</h1>
                </div>
        } */}
          {/* <div className="pagePhotoContainer">
            <img
              src={lightboxPhotos[0].src}
              alt=""
              onClick={() => setIndex(0)}
            />
          </div> */}
          {displayImage(1)}
        </div>
        <div className="secondColumnPhotos">
          {/* <div className="TwoMobilePhotosContainer">
            <img
              src={psychologiePositiveFullMainPage}
              alt=""
              onClick={() => setIndex(1)}
            />
			<img
              src={psychologiePositiveFullMainPage}
              alt=""
              onClick={() => setIndex(1)}
            />
          </div> */}
          {displayImage(2)}
        </div>
      </div>
      <Lightbox
        plugins={[Fullscreen, Zoom, Thumbnails]}
        index={index}
        open={index >= 0}
        slides={lightboxPhotos}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default WebsitePagesPhotosGallery;
