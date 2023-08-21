import React from 'react'
import ImageGrid from '../ImageGrid/ImageGrid'
import FilterArea from '../FilterArea/FilterArea'
import ImageDetails from '../ImageDetails/ImageDetails'

const Feed = () => {
  return (
    <div className='container'>
      {/* <FilterArea />
      <ImageGrid /> */}
      <ImageDetails />
    </div>
  )
}

export default Feed