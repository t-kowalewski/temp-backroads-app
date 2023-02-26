import logo from '../images/logo.svg';
import { navLinks, navIcons } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}
        {/* Links */}
        <ul className='nav-links' id='nav-links'>
          {navLinks.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id}>
                <a href={'#' + href} className='nav-link'>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Icons */}
        <ul className='nav-icons'>
          {navIcons.map((link) => {
            const { id, href, faIcon } = link;

            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={'fab ' + faIcon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
