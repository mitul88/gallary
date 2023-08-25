import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Header from './header/Header'
import Feed from './screens/Feed'
import ImageView from './screens/ImageView/ImageView'

const MainComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/image" element={<ImageView />}/>
      </Routes>
    </div>
  )
}

export default MainComponent