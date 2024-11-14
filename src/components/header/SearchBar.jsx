import './SearchBar.css';

const SearchBar = () => {

  return (
    <li className="searchBar">
      <form action="search" className="search-body">
          <p id='magGlass'>🔎︎</p>
          <input type="text" placeholder='Search' className='search-input'/>
      </form>
    </li>
  )
}

export default SearchBar
