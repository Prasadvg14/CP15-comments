import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {Name: '', Comment: '', commentsList: [], count: 0}

  onSubmitForm = event => {
    event.preventDefault()
    const randomNo = Math.floor(Math.random() * 7)
    const {Name, Comment} = this.state
    const newComment = {
      id: uuidv4(),
      name: Name,
      comment: Comment,
      bgi: initialContainerBackgroundClassNames[randomNo],
      isLiked: false,
      time: new Date(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      Name: '',
      Comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({Name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({Comment: event.target.value})
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {Name, Comment, commentsList, count} = this.state

    return (
      <div className="bg-container">
        <div className="top">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onSubmitForm}>
              <input
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={Name}
              />
              <textarea
                placeholder="Your Comment"
                rows="10"
                cols="35"
                onChange={this.onChangeComment}
                value={Comment}
              />
              <button type="submit" className="addBtn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="people"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="bottom">
          <p>
            <span className="count">{count}</span> Comments
          </p>
          <ul className="ul">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                toggleLikeBtn={this.toggleLikeBtn}
                commentDetails={each}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
