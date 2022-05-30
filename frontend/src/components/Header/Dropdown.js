import { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {
      title: 'Registration',
      path: '/marketing',
      cName: 'dropdown-link'
    },
    {
      title: 'Programmes',
      path: '/consulting',
      cName: 'dropdown-link'
    },
    {
      title: 'Program Outcomes',
      path: '/design',
      cName: 'dropdown-link'
    },
    {
      title: 'Photo Gallery',
      path: '/development',
      cName: 'dropdown-link'
    },
    {
      title: 'People',
      path: '/consulting',
      cName: 'dropdown-link'
    },
    {
      title: 'Research',
      path: '/design',
      cName: 'dropdown-link'
    },
    {
      title: 'Contact Us',
      path: '/development',
      cName: 'dropdown-link'
    },
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;