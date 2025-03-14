import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Navabr from '../Navbar'
import EachCommunity from '../EachCommunity'

const initialcommunityList = [
  {
    id: 1,
    imageUrl:
      'https://www.thecoldwire.com/wp-content/uploads/2020/10/Large-Group-of-casual-People-1024x694.jpg',
    communityName: 'Faith & Fellowship Circle',
    description:
      'A warm and welcoming community froo those seeking inspiration, prayer, and spiritual growth.',
    noOfMembers: 30,
    leader: 'No Leader',
    categories: 'Religious & Beliefs',
    communityMoments: [
      'https://img.mensxp.com/media/content/2017/Mar/community-funny-moments980-1489156418.jpg?w=1100&h=558&cc=1',
      'https://c8.alamy.com/comp/2JTX06E/caucasian-bloggers-enjoying-funny-moment-while-posing-in-the-city-park-relaxing-surrounded-by-green-nature-young-people-community-group-happy-2JTX06E.jpg',
    ],
    communityRules: {
      rule1: 'Be respectful and kind to all members',
      rule2: 'No spam, ads, or self-promotion',
      rule3: 'Keep discussions relevant and on topic',
      relu4: 'Follow all community guidelines',
    },
  },
  {
    id: 2,
    imageUrl:
      'https://www.thecoldwire.com/wp-content/uploads/2020/10/Large-Group-of-casual-People-1024x694.jpg',
    communityName: 'Faith & Fellowship Circle',
    description:
      'A warm and welcoming community froo those seeking inspiration, prayer, and spiritual growth.',
    noOfMembers: 30,
    leader: 'No Leader',
    categories: 'Religious & Beliefs',
    communityMoments: [
      'https://img.mensxp.com/media/content/2017/Mar/community-funny-moments980-1489156418.jpg?w=1100&h=558&cc=1',
      'https://c8.alamy.com/comp/2JTX06E/caucasian-bloggers-enjoying-funny-moment-while-posing-in-the-city-park-relaxing-surrounded-by-green-nature-young-people-community-group-happy-2JTX06E.jpg',
    ],
    communityRules: {
      rule1: 'Be respectful and kind to all members',
      rule2: 'No spam, ads, or self-promotion',
      rule3: 'Keep discussions relevant and on topic',
      relu4: 'Follow all community guidelines',
    },
  },
  {
    id: 3,
    imageUrl:
      'https://www.thecoldwire.com/wp-content/uploads/2020/10/Large-Group-of-casual-People-1024x694.jpg',
    communityName: 'Faith & Fellowship Circle',
    description:
      'A warm and welcoming community froo those seeking inspiration, prayer, and spiritual growth.',
    noOfMembers: 30,
    leader: 'No Leader',
    categories: 'Religious & Beliefs',
    communityMoments: [
      'https://img.mensxp.com/media/content/2017/Mar/community-funny-moments980-1489156418.jpg?w=1100&h=558&cc=1',
      'https://c8.alamy.com/comp/2JTX06E/caucasian-bloggers-enjoying-funny-moment-while-posing-in-the-city-park-relaxing-surrounded-by-green-nature-young-people-community-group-happy-2JTX06E.jpg',
    ],
    communityRules: {
      rule1: 'Be respectful and kind to all members',
      rule2: 'No spam, ads, or self-promotion',
      rule3: 'Keep discussions relevant and on topic',
      relu4: 'Follow all community guidelines',
    },
  },
  {
    id: 4,
    imageUrl:
      'https://www.thecoldwire.com/wp-content/uploads/2020/10/Large-Group-of-casual-People-1024x694.jpg',
    communityName: 'Faith & Fellowship Circle',
    description:
      'A warm and welcoming community froo those seeking inspiration, prayer, and spiritual growth.',
    noOfMembers: 30,
    leader: 'No Leader',
    categories: 'Religious & Beliefs',
    communityMoments: [
      'https://img.mensxp.com/media/content/2017/Mar/community-funny-moments980-1489156418.jpg?w=1100&h=558&cc=1',
      'https://c8.alamy.com/comp/2JTX06E/caucasian-bloggers-enjoying-funny-moment-while-posing-in-the-city-park-relaxing-surrounded-by-green-nature-young-people-community-group-happy-2JTX06E.jpg',
    ],
    communityRules: {
      rule1: 'Be respectful and kind to all members',
      rule2: 'No spam, ads, or self-promotion',
      rule3: 'Keep discussions relevant and on topic',
      relu4: 'Follow all community guidelines',
    },
  },
]

class Events extends Component {
  state = {
    url: '',
    isImage: false,
    communityName: '',
    communityDescription: '',
    communityList: [],
  }

  uploadUrl = event => {
    const file = event.target.files[0]
    if (file) {
      this.setState({url: URL.createObjectURL(file), isImage: true})
    }
  }

  onChangeName = event => {
    this.setState({communityName: event.target.value})
  }

  onChanegDescription = event => {
    this.setState({communityDescription: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {url, communityName, communityDescription} = this.state
    const updateObj = {
      id: uuidv4(),
      imageUrl: `${url}`,
      communityName,
      description: communityDescription,
      noOfMembers: 50,
    }
    this.setState(prevState => ({
      communityList: [...prevState.communityList, updateObj],
      url: '',
      isImage: false,
      communityName: '',
      communityDescription: '',
    }))
  }

  render() {
    const {
      url,
      isImage,
      communityName,
      communityDescription,
      communityList,
    } = this.state
    console.log(url)

    return (
      <>
        <Navabr />
        <div className="events-container">
          <div className="events-inner-container">
            <h1 className="events-heading">
              Join the latest conversations and insights.
            </h1>
            <div className="deatails-container">
              <div className="details-inner-container">
                <h1 className="form-heading">
                  Fill in the details to create a New Community
                </h1>
                <form className="form-container" onSubmit={this.onClickSubmit}>
                  <div className="community-image-container">
                    <p className="cover-image">Community Image</p>

                    <input
                      type="file"
                      accept="image/*"
                      className="file-uploader"
                      id="coverImage"
                      onChange={this.uploadUrl}
                    />

                    <label className="upload-image" htmlFor="coverImage">
                      {isImage ? (
                        <img src={url} className="uploaded-img" />
                      ) : (
                        <p>Upload image</p>
                      )}
                    </label>
                  </div>
                  <div className="community-name-container">
                    <label htmlFor="name" className="community-name-input">
                      Community Name
                    </label>
                    <input
                      type="text"
                      className="name-input"
                      id="name"
                      value={communityName}
                      placeholder="Enter community name"
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="community-name-container">
                    <label
                      htmlFor="description"
                      className="community-name-input"
                    >
                      Visibility
                    </label>
                    <textarea
                      className="description-input"
                      rows="5"
                      cols="50"
                      id="description"
                      placeholder="Describe your community"
                      value={communityDescription}
                      onChange={this.onChanegDescription}
                    />
                  </div>
                  <button type="submit" className="create-community-btn">
                    Create Community
                  </button>
                </form>
              </div>
            </div>
            <ul className="community-list">
              {communityList.map(each => (
                <EachCommunity key={each.id} community={each} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Events
