import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = blogData

  return (
    <Link className="item-link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
