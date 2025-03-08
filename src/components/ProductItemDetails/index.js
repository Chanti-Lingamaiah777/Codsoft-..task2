import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const initialobj = {
  id: 16,
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png',
  title: 'Embroidered Net Gown',
  price: 62990,
  description:
    'An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony. It enhances your beauty wearing this vibrant, gorgeous, and beautiful Wedding Gown. Find your dream wedding dress today. It features foldable, one hoop steel, two layers of tulles, and is elastic in the waist part. ',
  brand: 'Manyavar',
  totalReviews: 879,
  rating: 3,
  availability: 'In Stock',
  similarProducts: [
    {
      id: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
      title: 'Wide Bowknot Hat',
      style: 'Wide Bowknot Hat for Women and Girls (Multicolor)',
      price: 288,
      description:
        "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
      brand: 'MAJIK',
      totalReviews: 245,
      rating: 3.6,
      availability: 'In Stock',
    },
  ],
}

const handleViewStatus = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class ProductItemDetails extends Component {
  state = {
    itemDetailsList: initialobj,
    handleView: handleViewStatus.initail,
    count: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({handleView: handleViewStatus.pending})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        id: data.id,
        brand: data.brand,
        description: data.description,
        availability: data.availability,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        style: data.style,
        title: data.title,
        totalReviews: data.total_reviews,
        similarProducts: data.similar_products.map(eachProduct => ({
          id: eachProduct.id,
          brand: eachProduct.brand,
          description: eachProduct.description,
          availability: eachProduct.availability,
          imageUrl: eachProduct.image_url,
          price: eachProduct.price,
          rating: eachProduct.rating,
          style: eachProduct.style,
          title: eachProduct.title,
          totalReviews: eachProduct.total_reviews,
        })),
      }
      this.setState({
        handleView: handleViewStatus.success,

        itemDetailsList: updatedData,
      })
    } else {
      this.setState({handleView: handleViewStatus.failure})
    }
  }

  continueShopping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  decreaseCount = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(previous => ({count: previous.count - 1}))
    }
  }

  increaseCount = () => {
    this.setState(previous => ({count: previous.count + 1}))
  }

  renderLoading = () => (
    <div data-testid="loader" className="error-view-container">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderProductsFailureView = () => (
    <div className="error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="errorf-view-img"
      />
      <h1 className="error-heading">Product Not Found</h1>
      <button
        type="button"
        className="continue-btn"
        onClick={this.continueShopping}
      >
        Continue Shopping
      </button>
    </div>
  )

  renderProductItemDetails = () => {
    const {itemDetailsList, count} = this.state
    return (
      <>
        <div className="product-details-container">
          <img
            src={itemDetailsList.imageUrl}
            alt="product"
            className="product-item-img"
          />
          <div className="content-container">
            <h1 className="img-heading">{itemDetailsList.title}</h1>
            <p className="price">Rs {itemDetailsList.price}/-</p>
            <div className="rating-views-container">
              <div className="rating-container">
                <p className="rating">{itemDetailsList.rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-img"
                />
              </div>
              <p className="views">{itemDetailsList.totalReviews} Reviews</p>
            </div>
            <p className="description">{itemDetailsList.description}</p>
            <p className="availability">
              Available:
              {itemDetailsList.availability}
            </p>
            <p className="availability">Brand: {itemDetailsList.brand}</p>
            <hr className="horizontal-line" />
            <div className="inc-dec-container">
              <button
                data-testid="minus"
                type="button"
                className="minus-button"
                onClick={this.decreaseCount}
              >
                <BsDashSquare className="min-icon" />
              </button>
              <p className="count">{count}</p>
              <button
                data-testid="plus"
                type="button"
                className="minus-button"
                onClick={this.increaseCount}
              >
                <BsPlusSquare className="min-icon" />
              </button>
            </div>
            <button type="button" className="add-cart-btn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="similar-products-container">
          <h1 className="similar-heading">Similar Products</h1>
          <ul className="similarProducts-list">
            {itemDetailsList.similarProducts.map(each => (
              <SimilarProductItem key={each.id} eachSimilarProduct={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderdifferentViews = () => {
    const {handleView} = this.state
    switch (handleView) {
      case handleViewStatus.success:
        return this.renderProductItemDetails()
      case handleViewStatus.failure:
        return this.renderProductsFailureView()
      case handleViewStatus.pending:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    const {itemDetailsList, handleView} = this.state
    console.log(itemDetailsList)
    return (
      <>
        <Header />
        <div className="products-item-details-background-container">
          <div className="products-item-details-container">
            {this.renderdifferentViews()}
          </div>
        </div>
      </>
    )
  }
}

export default ProductItemDetails
