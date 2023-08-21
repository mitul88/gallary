import React from 'react'
import './imageDetails.css'
import { BiLike, BiCommentDetail } from 'react-icons/bi'

const ImageDetails = () => {
  return (
    <div className='imageDetailsContainer'>
        <div className="imageArea">
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" className="imageView" />
        </div>
        <div className="imageDetailsAside">
            <div className="imageInfoArea">
                <h5>Tree middle of the sunset field</h5>
                <div className='postInfo'>
                    <span>
                        posted by : @mitul
                    </span>
                    <span>
                        date posted: 21 Aug 2023 
                    </span>
                </div>
                <div className='userActionContainer'>
                    <a href="" className="like-btn"><BiLike /> Like</a>
                    <span className="like-counts">Total 63 Likes</span>
                </div>  
            </div>
            <div className="imageCommentArea">
                <div className='commentAreaHeader'>
                    <span className="commentAreaTitle">Comments</span>
                </div>
                <div className="commentForm">
                    <form action="" className='center'>
                        <textarea></textarea>
                        <div className="formControl">
                            <a href="" className="like-btn"><BiCommentDetail /> Comment</a>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default ImageDetails