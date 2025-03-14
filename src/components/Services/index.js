import './index.css'
import {AiOutlineUsergroupDelete, AiOutlineStock} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'
import {FaFan} from 'react-icons/fa'

const Services = () => (
  <div className="services-container">
    <div className="services-inner-container">
      <h1 className="why-communication-heading">Why Communication Rocks!</h1>
      <p className="communication-description">
        Communication is not just another platform-it's a vibrant space that
        unites diverse faiths,beliefs,and traditions. By promoting collaboration
        and connection, we're fostering a world where differences become
        strengths and unity becomes the norm.
      </p>
      <div className="communities-containers">
        <div className="unify-communities-container">
          <div>
            <AiOutlineUsergroupDelete className="user-img" />
            <h1 className="unifying-heading">Unifying Communities</h1>
            <p className="unifying-description">
              Communication bridges diverse religious communities, becoming the
              social glue for faiths, beliefs,... and traditions.
            </p>
            <button className="learn-more">
              <div className="btn-container">
                <span className="learn-more-text">Learn More</span>
                <FiArrowRight className="right-arrow " />
              </div>
            </button>
          </div>
        </div>
        <div className="unify-communities-container">
          <div>
            <FaFan className="user-img" />
            <h1 className="unifying-heading">Innovative and Fun</h1>
            <p className="unifying-description">
              Experience faith in afresh way through our interactive features,
              engaging events, and modern... approach to spiritual connection.
            </p>
            <button className="learn-more">
              <div className="btn-container">
                <span className="learn-more-text">Learn More</span>
                <FiArrowRight className="right-arrow " />
              </div>
            </button>
          </div>
        </div>
        <div className="unify-communities-container">
          <div>
            <AiOutlineStock className="user-img" />
            <h1 className="unifying-heading">Promoting Unity</h1>
            <p className="unifying-description">
              We foster understanding and harmony between differrent faith
              communities through shared... experience and meaningful
            </p>
            <button className="learn-more">
              <div className="btn-container">
                <span className="learn-more-text">Learn More</span>
                <FiArrowRight className="right-arrow " />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Services
