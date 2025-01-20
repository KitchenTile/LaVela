import { useEffect, useState } from "react";
import "./Header.css";
import HeaderButtons from "./HeaderButtons";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <ul className={`header ${scrollPosition > 950 ? "active" : ""}`}>
        <NavBar />
        <SearchBar />
        <HeaderButtons />
      </ul>
    </header>
  );
};

export default Header;
