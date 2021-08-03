import React, { useEffect, useState } from 'react'
import { Typography, Grid, Paper, Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors'

import {
  fetchPostsStart,
  clearPostMessages,
} from '../../redux/posts/posts.actions'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack'
import { createStructuredSelector } from 'reselect'
import theme from '../../utils/theme'
import {
  selectPostsData,
  selectPostFetchStatus,
  selectPostsErrorMessage,
} from '../../redux/posts/posts.selectors'
import { DeleteForeverRounded } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  postImage: {
    height: '20vmin',
    pointerEvents: 'none',
  },
  card: {
    padding: theme.spacing(2),
    position: 'relative',
  },
  delete: {
    position: 'absolute',
    top: 10,
    left: 10,
    cursor: 'pointer',
  },
  pagination: {
    dispaly: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}))

const PostsContainer = ({
  fetchPostsStart,
  posts,
  clearPostMessages,
  errorMessage,
  isFetching,
}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [page, setPage] = useState(1)
  const [minimum, setMinimum] = useState(0)
  const [maximum, setMaximum] = useState(10)
  const [pagePosts, setPagePosts] = useState([])
  const classes = useStyles()
  const count = Math.ceil(posts.length / 10)

  useEffect(() => {
    if (posts.length < 1) fetchPostsStart()
  }, [fetchPostsStart, posts])

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: 'error' })
      clearPostMessages()
    }
  }, [errorMessage, clearPostMessages, enqueueSnackbar])

  useEffect(() => {
    setPagePosts(posts.slice(minimum, maximum))
  }, [page, isFetching, posts, minimum, maximum])

  const handleChange = (event, value) => {
    setPage(value)
    setMinimum((value - 1) * 10)
    setMaximum(value * 10)
  }
  return (
    <Box className={classes.root}>
      <Typography variant={'h2'} component={'h1'}>
        Posts <strong className={classes.length}>[{posts.length}]</strong>
      </Typography>
      {/* ////add item modal */}
      <Grid container justify="center" alignItems="center" spacing={4}>
        {pagePosts.length > 1
          ? pagePosts.map((each) => (
              <Grid item xs={10} sm={5} md={3} key={each.id}>
                <Paper className={classes.card} elevation={3}>
                  id: {each.id} UsedId: {each.userId}
                  <DeleteForeverRounded
                    color={'primary'}
                    className={classes.delete}
                    // onClick={() => deletePostStart(each.id)}
                  />
                  <Typography>Title: {each.title}</Typography>
                  <Typography>Body: {each.body}</Typography>
                </Paper>
              </Grid>
            ))
          : null}
      </Grid>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        className={classes.pagination}
        color="primary"
        size="small"
        variant="outlined"
      />
    </Box>
  )
}

const mapStateToProps = (state) => ({
  // posts: selectPostsData,
  // isFetching: selectPostFetchStatus,
  // errorMessage: selectPostsErrorMessage,
  posts: state.posts.data,
  isFetching: state.posts.isFetching,
  errorM: state.posts.errorMessage,
})

export default connect(mapStateToProps, { fetchPostsStart, clearPostMessages })(
  PostsContainer
)
