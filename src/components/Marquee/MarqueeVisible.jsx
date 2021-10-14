export default function MarqueeVisible({ section, className }) {
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
    <div className={className}>
      {populateImages(section.pics).map((singlePic, index) => {
        return (
          <div key={index} className="marquee__visibleWrap__element">
            <div className="marquee__image__wrap">
              <img src={singlePic} alt={section.tittle}></img>
            </div>
            <p>{section.tittle}</p>
          </div>
        );
      })}
    </div>
  );
}
