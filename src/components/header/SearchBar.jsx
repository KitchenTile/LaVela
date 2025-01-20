import "./SearchBar.css";

const SearchBar = () => {
  return (
    <li className="searchBar">
      <form action="search" className="search-body">
        <input type="text" placeholder="Search" className="search-input" />
        <p id="magGlass">🔎︎</p>
      </form>
    </li>
  );
};

export default SearchBar;
