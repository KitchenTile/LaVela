import './Header.css';
import HeaderButtons from './HeaderButtons';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => {

  return (
    <>
      <header>
        <ul className="header">
          <NavBar />
          <SearchBar />
          <HeaderButtons />
        </ul>
      </header>
    </>
  )
}

export default Header
