import React from 'react'
import './filterArea.css'

const FilterArea = () => {
  return (
    <div className='filterArea'>
        <div className="filterAreaTop center">
            <h3>Showcase your photography with others and share your thoughts </h3>
            <form action="">
                <input type="text" className="search-box" />
                <a href="" className="search-button">Search</a>
            </form>
        </div>
        <div className="filterAreaBottom center">
            <div className="category-area">
                <span>Nature</span>
                <span>Electronics</span>
                <span>Urban</span>
                <span>Instruments</span>
            </div>
        </div>
    </div>
  )
}

export default FilterArea