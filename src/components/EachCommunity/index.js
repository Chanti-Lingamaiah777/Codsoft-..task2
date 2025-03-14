import './index.css'
import {FiArrowRight} from 'react-icons/fi'

const EachCommunity = props => {
  const {community} = props
  const {imageUrl, communityName, description, noOfMembers} = community
  return (
    <li className="each-community-container">
      <div className="each-community-inner-container">
        <img src={imageUrl} alt="community logo" className="community-img" />
        <h1 className="community-name">{communityName}</h1>
        <p className="no-of-members">Members: {noOfMembers}</p>
        <p className="community-description">{`${description.slice(
          0,
          100,
        )}...`}</p>
        <button className="community-details-btn">
          <div className="btn-community-container">
            <span className="community-text">Community Details</span>
            <FiArrowRight className="right-arrow " />
          </div>
        </button>
      </div>
    </li>
  )
}
export default EachCommunity
