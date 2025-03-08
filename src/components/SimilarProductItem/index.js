// Write your code here

import './index.css'

const SimilarProductItem = props => {
  const {eachSimilarProduct} = props
  const {id, title, brand, imageUrl, rating, price} = eachSimilarProduct

  return (
    //   Wrap with Link from react-router-dom

    <li className="each-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="each-thumbnail"
      />
      <h1 className="each-title">{title}</h1>
      <p className="each-brand">by {brand}</p>
      <div className="each-product-details">
        <p className="each-price">Rs {price}/-</p>
        <div className="each-rating-container">
          <p className="each-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="each-star"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
