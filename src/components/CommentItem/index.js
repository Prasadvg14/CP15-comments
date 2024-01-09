import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikeBtn, deleteComment} = props
  const {name, comment, bgi, isLiked, id, time} = commentDetails
  const initial = name[0]
  const onClickLike = () => {
    toggleLikeBtn(id)
  }
  const onClickDel = () => {
    deleteComment(id)
  }
  const date = formatDistanceToNow(time)

  const likeClass = isLiked ? 'liked' : 'like'
  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="bg">
      <div className="card">
        <div className={`initial ${bgi}`}>{initial}</div>
        <div className="col">
          <div className="row">
            <h2>{name}</h2>
            <p className="time">{date}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="row1">
        <button type="button" onClick={onClickLike} className="likebtn">
          <img src={likeImg} alt="like" />
          <p className={likeClass}>Like</p>
        </button>
        <button
          data-testid="delete"
          onClick={onClickDel}
          type="button"
          className="delbtn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
