import './index.css'
import Services from '../Services'
import Navbar from '../Navbar'

const Home = () => (
  <>
    <Navbar />

    <div className="home-container">
      <div className="home-inner-container">
        <h1 className="home-heading">
          Connecting People Across Faiths & Intrests
        </h1>
        <p className="home-description">
          Bridging gaps between faiths with tech and a dash of fun
        </p>
        <div className="description-container">
          <img
            src="https://www.safeharboril.com/wp-content/uploads/2020/01/AdobeStock_201155339-1080x675.jpeg"
            alt="connect img"
            className="connect-img"
          />
          <p className="home-detail-description">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging , and connected than ever before!
          </p>
        </div>
        <Services />
      </div>
    </div>
  </>
)
export default Home
