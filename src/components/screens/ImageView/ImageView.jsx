import React from 'react'
import './imageView.css'
import { BiLike, BiCommentDetail } from 'react-icons/bi'

const ImageView = () => {
  return (
    <div className="container">
        <div className='imageDetailsContainer'>
            <div className="imageArea">
                <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" className="imageView" />
                <div className="imageDescription">
                    <p>This photo was taken in middile of nowhere. The green field gets marged with the blue sky. And a tree stands tall in the middle</p>
                </div>
            </div>
            <div className="imageDetailsAside">
                <div className="imageInfoArea">
                    <h5>Tree middle of the sunset field</h5>
                    <div className='postInfo'>
                        <span>
                            Posted by : @mitul
                        </span>
                        <span>
                            Uploaded on: 21 Aug 2023 
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
                    <div className="commentArea">
                        <div className="comment">
                            <span>@mitul</span>
                            <span><q><i>Nice capture!!</i></q></span>
                            <span>21-08-2023</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageView