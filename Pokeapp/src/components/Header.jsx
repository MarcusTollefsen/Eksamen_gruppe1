import { Link } from "react-router-dom";
import "../styles/header/header.scss";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h1>Pokédex</h1>
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <h3>Teams</h3>
          </Link>
        </li>
      </ul>
    </nav>
    <SearchBar />
  </header>
  

  );
}

export default Header;
