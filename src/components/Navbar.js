import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">
          {props.name}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`}
                aria-current="page"
                to="/about"
              >
                {props.home}
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
            {props.mode === 'light' ? 'dark' : 'light'}
          </label>
        </div>
      </div>
    </nav >
  );
}

Navbar.propTypes = {
  name: PropTypes.string,
  home: PropTypes.string,
};
Navbar.defaultProps = {
  name: 'yugi',
  home: 'home',
};
