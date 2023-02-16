import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-Link active nav-dark mx-2 text-light text-decoration-none" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-Link mx-2 text-light text-decoration-none" href="/about">About</a>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-Link dropdown-toggle text-light text-decoration-none" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li> */}

          </ul>
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form> : "There is no search Bar"}
        </div>
      </div>
    </nav>
  )
}
  
Header.propTypes = {//this is used when we want a perticular value to be  a perticular type then we use this 
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
Header.defaultProps = {// this is used when want to give default value to a property 
  tile: "Title come here ",
  searchBar: true
}
