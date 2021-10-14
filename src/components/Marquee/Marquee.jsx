import MarqueeVisible from "./MarqueeVisible";
import "./Marquee.scss";

export default function Marquee({ info }) {
  return (
    <div className="displayArtciles">
      {info.map((article, index) => {
        return (
          <div key={index} className="marquee">
            <MarqueeVisible
              section={article}
              className="marquee__visibleWrap"
            />
            <div className="marquee__hiddenInfo">
              <p>{article.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
