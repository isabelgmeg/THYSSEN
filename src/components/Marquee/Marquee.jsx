import { useEffect } from "react";

import "./Marquee.scss";

export default function Marquee({ pics, tittle, text }) {
  const populateImages = (images) => {
    let populatedImages = [...images];
    let i = 0;
    while (populatedImages.length < 6) {
      populatedImages.push(images[i]);
      i++;
    }
    return populatedImages;
  };

  useEffect(() => {
    populateImages(pics);
  }, []);

  return (
    <div className="marquee">
      <div className="marquee__visibleWrap">
        {populateImages(pics).map((singlePic, index) => {
          return (
            <div key={index} className="marquee__visibleWrap__element">
              <div className="marquee__image__wrap">
                <img src={singlePic} alt={tittle}></img>
              </div>
              <p>{tittle}</p>
            </div>
          );
        })}
      </div>
      <div className="marquee__hiddenInfo">
        <p>{text}</p>
      </div>
    </div>
  );
}
