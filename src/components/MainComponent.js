import React from 'react'
import Header from './header/Header'
import Feed from './screens/Feed'
import ImageView from './screens/ImageView/ImageView'

const MainComponent = () => {
  return (
    <div>
      <Header />
      <ImageView />
      {/* <Feed /> */}
    </div>
  )
}

export default MainComponent