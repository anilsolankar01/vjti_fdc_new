import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  //const [dropdown, setDropdown] = useState(false);

/*   const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; */

  return (
    <>
      <nav className='navbar'>
        <ul className='nav-menu'>
        <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/register' className='nav-links'>
              Registration
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/programmes'
              className='nav-links'
            >
              Programmes <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="/program-outcomes"
              className='nav-links'
            >
              Program Outcomes
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/photo-gallery'
              className='nav-links'
              
            >
              Photo Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/people'
              className='nav-links'
              
            >
              People
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/research'
              className='nav-links'
              
            >
              Research
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links' 
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;