import "./Marquee.scss";

export default function Marquee({ info }) {
  const populateImages = (images) => {
    let populatedImages = [...images];
    let i = 0;
    while (populatedImages.length < 6) {
      populatedImages.push(images[i]);
      i++;
    }
    return populatedImages;
  };

  return (
    <div className="displayArtciles">
      {info.map((article, index) => {
        console.log(article);
        return (
          <div key={index} className="marquee">
            <div className="marquee__visibleWrap">
              {populateImages(article.pics).map((singlePic, index) => {
                return (
                  <div key={index} className="marquee__visibleWrap__element">
                    <div className="marquee__image__wrap">
                      <img src={singlePic} alt={article.tittle}></img>
                    </div>
                    <p>{article.tittle}</p>
                  </div>
                );
              })}
            </div>
            <div className="marquee__hiddenInfo">
              <p>{article.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
