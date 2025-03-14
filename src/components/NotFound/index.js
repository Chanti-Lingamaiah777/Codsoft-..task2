import './index.css'

import Navbar from '../Navbar'

const NotFound = () => (
  <>
    <Navbar />
    <div className="notfound-container">
      <div className="home-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="notfound-heading">Lost Your Way?</h1>
        <p className="not-found-description">
          We cannot seem to find the page you are looking for.
        </p>
      </div>
    </div>
  </>
)
export default NotFound
