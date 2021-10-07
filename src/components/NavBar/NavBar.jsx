import logo from "../../assets/logo.svg";

import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">
        <section className="logo__wrap">
          <img src={logo} alt="logo" />
        </section>
        <section className="logo__separation"></section>
        <p className="logo__text">El museo de todos</p>
      </div>
      <div className="nav__icon">
        <section className="nav__icon___stripe"></section>
        <section className="nav__icon___stripe"></section>
        <section className="nav__icon___stripe"></section>
      </div>
    </nav>
  );
}
