import './HeaderButtons.css';

const HeaderButtons = () => {

    return (
        <ul className='header-buttons'>
            <li>
                <button className="btn" id='signup'>Sing Up</button>
            </li>
            <li>
                <button className="btn" id='signin'>Sing In</button>
            </li>
        </ul>
  )
}

export default HeaderButtons;