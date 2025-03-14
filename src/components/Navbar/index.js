import './index.css'

import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className="light-navbar">
    <div className="navbar-inner-container">
      <img
        src="https://res.cloudinary.com/drlphfr52/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741861495/communionimg_hwcubh.webp"
        alt="website logo"
        className="website-log-img"
      />
      <ul className="navbar-list-container">
        <Link to="/" className="each-link-item">
          <li className="each-list-ite">Home</li>
        </Link>
        <Link to="/about" className="each-link-item">
          <li className="each-list-ite">About</li>
        </Link>
        <Link to="/events" className="each-link-item">
          <li className="each-list-ite">Events</li>
        </Link>
      </ul>
      <ul className="navbar-mobile-list-container">
        <Link to="/" className="each-link-item">
          <li className="each-mobile-list-item">
            <img
              src="https://www.pngitem.com/pimgs/m/82-822688_home-icon-vector-png-transparent-png.png"
              alt="nav home"
              className="navbar-mobile-home-img"
            />
          </li>
        </Link>
        <Link to="/about" className="each-link-item">
          <li className="each-mobile-list-item">
            <img
              src="https://th.bing.com/th/id/OIP.lVQu1FgP2Zk0wJqRwbnJOgAAAA?rs=1&pid=ImgDetMain"
              alt="nav about"
              className="navbar-mobile-home-img"
            />
          </li>
        </Link>
        <Link to="/events" className="each-link-item">
          <li className="each-mobile-list-item">
            <img
              src="https://th.bing.com/th/id/R.fcc83782206109698a4b5a1a23611b58?rik=0eaw%2b7mpwC4KlA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-upcoming-events--1600.png&ehk=TOaVHVvWvLdz6A1okW51RmX6x0svpyFJsut5w2HaKdY%3d&risl=&pid=ImgRaw&r=0"
              alt="nav about"
              className="navbar-mobile-home-img"
            />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Navbar
