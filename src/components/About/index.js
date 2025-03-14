import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {FiArrowRight} from 'react-icons/fi'
import Navbar from '../Navbar'

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="about-container">
          <div className="home-inner-container">
            <h1 className="about-heading">Ultimate Communities Through</h1>
            <p className="inspiring">Inspiring Events</p>
            <p className="abouut-description">
              At Communion, we're committed to organizing events that foster
              connections, inspire personal and professional growth, and bring
              people together to share meaningful experiences. From workshops to
              conferences, every event is designed to leave alasting impact on
              our attendes
            </p>
            <Link to="/events" className="each-link-item">
              <button className="explore-more">
                <div className="eplore-btn-container">
                  <span className="explore-more-text">Explore Events</span>
                  <FiArrowRight className="explore-right-arrow " />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default About
