// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {listItems} = props
  return (
    <ul className="list-styling">
      {listItems.map(each => (
        <li key={each.id}>
          <BlogItem details={each} />
        </li>
      ))}
    </ul>
  )
}

export default BlogList
