// Import the required modules
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Header functional component
const Header = () => {
  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        {/* Company name */}
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">
          Company name
        </Link>
        {/* Navigation items */}
        <ul className="navbar-nav px-3">
          {/* Sign out link */}
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

// Export the Header component to make it available for other parts of the application
export default Header;
