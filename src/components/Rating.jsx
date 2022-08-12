import React from 'react'

const Rating = (props) => {
    const { rating, numOfReviews } = props;
  return (
    <div className="featured-rating text-yellow-500">
    <span>
        <i className={ rating >= 2 ? "fa-solid fa-star" : rating >= 1 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star" } />
    </span>

    <span>
        <i className={ rating >= 4 ? "fa-solid fa-star" : rating >= 3 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star" } />
    </span>

    <span>
        <i className={ rating >= 6 ? "fa-solid fa-star" : rating >= 5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star" } />
    </span>

    <span>
        <i className={ rating >= 8 ? "fa-solid fa-star" : rating >= 7 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star" } />
    </span>

    <span>
        <i className={ rating === 10 ? "fa-solid fa-star" : rating >= 9 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star" } />
    </span>

    <span className="featured-reviews">({numOfReviews})</span>
</div>
  )
}

export default Rating