import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="icon-navbar">
        <img className="icon-navbar" src="/img/2ecf7364cd78b7222311518159a72179.jpg" />
      </Link>

      <ul className="categories-navbar">
        <Link to="/category/playa" className="categorie-navbar">
          Playa
        </Link>
        <Link to="/category/aventura" className="categorie-navbar">
          Aventura
        </Link>
        <Link to="/category/cultura" className="categorie-navbar">
          Cultura
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
