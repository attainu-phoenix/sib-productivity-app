import React from 'react';
import './header.css';


class HeaderComponent extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light head-color">
          <a className="navbar-brand text-white" href="/#">CheckList</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="form-inline ml-auto ">
              <input className="form-control  mx-auto " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-white"><i className="fas fa-search search-col" aria-hidden="true"></i></button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/#">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#">Login</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-user search-col" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/#">Settings</a>
                  <a className="dropdown-item" href="/#">Logout</a>
                </div>
              </li>
            </ul>


          </div>
        </nav>


      </div>
    );
  }
}

export default HeaderComponent;



