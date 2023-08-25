import React from 'react'
import ImageGrid from '../../shared/ImageGrid/ImageGrid'
import FilterArea from '../../FilterArea/FilterArea'

const Feed = () => {
  return (
    <div className='container'>
      <FilterArea />
      <ImageGrid />
    </div>
  )
}

export default Feed