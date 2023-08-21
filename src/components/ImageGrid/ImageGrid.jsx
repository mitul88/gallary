import React from 'react'
import './imageGrid.css'

const ImageGrid = () => {
  return (
    <div className='grid-container'>
        <a href="">
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" className="grid-img" />
        </a>
        <a href="">
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" className="grid-img" />
        </a>
        <a href="">
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" className="grid-img" />
        </a>
    </div>
  )
}

export default ImageGrid