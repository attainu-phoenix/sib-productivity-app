import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { USER_DATA } from '../store/api/user_helper.js';


class HeaderComponent extends React.Component {

  render() {
    let login;
    let signup;
    let logout;
    let User = USER_DATA();

    if (!User) {
      signup = <Link className="nav-link text-white" to="/signup">Signup</Link>;
      login = <Link className="nav-link text-white" to="/login">Login</Link>;
    }
    else if (!User.email) {
      signup = <Link className="nav-link text-white" to="/signup">Signup</Link>;
      login = <Link className="nav-link text-white" to="/login">Login</Link>;
    } else if (User.email) {
      logout = <Link className="dropdown-item" to="/app/logout">Logout</Link>;
    }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light head-color">
          <a className="navbar-brand text-white" href="/#">CheckList</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* <form className="form-inline ml-auto ">
              <input className="form-control  mx-auto " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-white"><i className="fas fa-search search-col" aria-hidden="true"></i></button>
            </form> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">

                {signup}

              </li>
              <li className="nav-item">
                {login}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-user search-col" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                  {logout}
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



