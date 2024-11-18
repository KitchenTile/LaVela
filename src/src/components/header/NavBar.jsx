import './NavBar.css';
import viteLogo from "../../../public/vite.svg";
import { useState } from 'react';

const NavBar = () => {
    const [activeItem, setActiveItem] = useState(null)

    const linkData = {
        "Products": ["Hats", "Hoodies", "Bussiness Cards"],
        "Artists": ["Our Artists", "Top Artists"],
        "About Us": ["Our Story", "Our Mission"],
    }

    const handleItemChange = (item) => {
        setActiveItem(item);
    }


    return (
        <ul className="header-navBar">
            <li className="header-navBar logo">
                <a href="/">
                    <img src={viteLogo} alt="Vite Logo" id='header-logo'/>
                </a>
            </li>
            {Object.keys(linkData).map(item => (
                <li
                    onMouseEnter={() => handleItemChange(item)}
                    className="header-navBar item"
                    key={item}
                >
                    <div id={`${item.replace(/\s/g, '-').toLowerCase()}`}>{item}</div>
                    <div
                        className="header-navBar-dropdown-wrapper"
                        style={{ height: activeItem === "Products" ? 
                             "150px" : "110px"
                        }}
                    >
                        <ul className="header-navBar-dropdown">
                            {activeItem !== null ?
                                linkData[activeItem].map((link) => (
                                    <li className="header-navBar-dropdown-item" key={link}>
                                        {link}
                                    </li>
                                )) :
                                null
                            }
                        </ul>
                    </div>
                </li>
            ))
            }
        </ul>
    )
}

export default NavBar