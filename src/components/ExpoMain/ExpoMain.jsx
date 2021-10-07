import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./ExpoMain.scss";
export default function ExpoMain({ tittle, type, date, picture }) {
  return (
    <div className="expoMain">
      <section className="mainInfo__wrap">
        <section className="mainInfo__tittle">
          <p>{tittle}</p>
        </section>
        <aside className="mainInfo__info">
          <p className="mainInfo__info__type">{type}</p>
          <p lassName="mainInfo__info__daate">{date}</p>
        </aside>
      </section>
      <section className="picture__wrap">
        <img src={picture} alt={tittle}></img>
      </section>
      <section className="secondaryInfo">
        <section className="secondaryInfo__tickets">
          <p>Entradas</p>
          <section className="secondaryInfo__tickets__separation"></section>
          <section className="secondaryInfo__tickets__icon">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </section>
        </section>
        <aside className="secondaryInfo__tickets__date">
          <p>{date}</p>
        </aside>
      </section>
    </div>
  );
}
