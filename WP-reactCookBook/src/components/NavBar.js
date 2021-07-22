import {NavLink} from 'react-router-dom';
export default function NavBar(props) {
    return (
    <span className="border-bottom">
     <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light bg-dark border-bottom">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light h1" to="/">FoodFAQtory</NavLink>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mt-4 mb-1 align-self-end">
                <NavLink className="nav-link text-light active h5" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item my-1 align-self-end">
                <NavLink className="nav-link text-light h5" to="/recipes">Recipes</NavLink>
              </li>
              <li className="nav-item my-1 align-self-end">
                <NavLink className="nav-link text-light h5" to="/">About Us</NavLink>
              </li>
              <li className="nav-item my-1 align-self-end">
                <NavLink className="nav-link text-light h5" to="/">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </span>
    )
}