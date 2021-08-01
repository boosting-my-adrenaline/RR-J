import { Button } from '@material-ui/core'
import { connect, useDispatch } from 'react-redux'
import { fetchPostsStart } from '../../redux/posts/posts.actions'

function PostDirectory(props) {
  const { posts, fetchPostsStart, isFetching } = props
  const dispatch = useDispatch()
  return (
    <div>
      <Button variant="contained" onClick={() => fetchPostsStart()}>
        Fetch
      </Button>
      <div>
        {posts.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  posts: state.posts.data,
  isFetching: state.posts.isFetching,
})

export default connect(mapStateToProps, { fetchPostsStart })(PostDirectory)
