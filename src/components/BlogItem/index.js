// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props

  const {title, description, publishedDate} = details
  return (
    <div>
      <div className="BlogItemContainer">
        <h1 className="heading-blog">{title}</h1>
        <p className="published">{publishedDate}</p>
      </div>
      <p className="paragraph-blog">{description}</p>
      <hr />
    </div>
  )
}

export default BlogItem
