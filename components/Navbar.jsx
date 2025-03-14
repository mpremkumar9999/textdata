import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({
        isDarkMode: !prevState.isDarkMode,
      }),
      () => {
        if (this.state.isDarkMode) {
          document.body.classList.add('dark-mode');
          document.title = 'text-darkmode';
        } else {
          document.body.classList.remove('dark-mode');
          document.title = 'text-lightmode';
        }
      }
    );
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div
              className="form-check form-switch"
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                width: '150px',
                justifyContent: 'flex-end',
                marginRight: '10px',
                transform: 'scale(1.3)',
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                checked={this.state.isDarkMode}
                onChange={this.toggleTheme}
              />
              <label
                className="form-check-label"
                htmlFor="darkModeSwitch"
                style={{ marginLeft: '5px' }}
              >
                {this.state.isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}