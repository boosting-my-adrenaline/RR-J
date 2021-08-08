import React, { useEffect, useState } from 'react'
import {
  Typography,
  Grid,
  Paper,
  Box,
  ButtonBase,
  IconButton,
  Button,
  ButtonGroup,
  Hidden,
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

import {
  fetchPostsStart,
  deletePostStart,
  clearPostMessages,
} from '../../redux/posts/posts.actions'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack'

// import theme from '../../utils/theme'
import { DeleteForeverRounded, SettingsEthernet } from '@material-ui/icons'
import AddItemModal from './components/add-modal'
import EditItemModal from './components/edit-modal'
import SkeletonComponent from '../../containers/components/skeleton.component'

import ViewHeadlineRoundedIcon from '@material-ui/icons/ViewHeadlineRounded'
import ViewModuleRoundedIcon from '@material-ui/icons/ViewModuleRounded'
import { HiViewList, HiViewGrid, HiViewBoards } from 'react-icons/hi'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'stretch',
  },
  postImage: {
    height: '20vmin',
    pointerEvents: 'none',
  },
  card: {
    padding: theme.spacing(2),
    position: 'relative',
    textAlign: 'left',
    borderRadius: 10,
  },
  add: {},
  edit: { flexGrow: 1 },
  delete: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: 17,
    right: 20,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(6),
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
  length: {
    fontSize: '26px',
    color: 'blue',
  },
  postTitle: {
    margin: '2px 0',
  },
  userId: {
    marginLeft: 5,
  },
  view: {
    position: 'absolute',
    right: 100,
    top: 144,
  },
  second: {
    width: 26,
  },
  third: {
    width: 26,
    height: 26,
  },
}))

const PostsContainer = ({
  fetchPostsStart,
  deletePostStart,
  posts,
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

  const [md, setMd] = useState(5)
  const [lg, setLg] = useState(11)
  const [xl, setXl] = useState(11)

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

  function setViewTo1() {
    setMd(11)
    setLg(11)
    setXl(11)
  }

  function setViewTo2() {
    setMd(5)
    setLg(5)
    setXl(5)
  }

  function setViewTo3() {
    setMd(5)
    setLg(4)
    setXl(4)
  }

  const capitaling = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

  return (
    <Box className={classes.root}>
      <Box component="div" className={classes.title}>
        <Typography variant={'h2'} component={'h1'}>
          Posts <strong className={classes.length}>[{posts.length}]</strong>{' '}
        </Typography>
        <AddItemModal className={classes.add} />
      </Box>

      <Box component="div" className={classes.view}>
        <Hidden smDown>
          <ButtonGroup variant="contained">
            <IconButton onClick={() => setViewTo1()}>
              <ViewHeadlineRoundedIcon className={classes.third} />
            </IconButton>
            <IconButton onClick={() => setViewTo2()}>
              <HiViewGrid className={classes.second} />
            </IconButton>
            <Hidden mdDown>
              <IconButton onClick={() => setViewTo3()}>
                <ViewModuleRoundedIcon className={classes.third} />
              </IconButton>
            </Hidden>
          </ButtonGroup>
        </Hidden>
      </Box>

      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        className={classes.container}
      >
        {pagePosts.length > 0 ? (
          pagePosts.map((each) => (
            <Grid item xs={10} sm={10} md={md} lg={lg} xl={xl} key={each.id}>
              <Paper className={classes.card} elevation={'18'}>
                <Typography className={classes.head}>
                  <strong> Id: </strong>
                  {each.id}
                  <strong classes={classes.userId}> UserId: </strong>
                  {each.userId}
                </Typography>

                <Typography className={classes.postTitle}>
                  <strong>Title:</strong> {each.title}
                </Typography>
                <Typography>
                  <strong>Body:</strong> {each.body}
                </Typography>
                <Box className={classes.buttons} component="div">
                  <EditItemModal
                    key={each.id}
                    post={each}
                    className={classes.edit}
                  />
                  <IconButton
                    variant={'contained'}
                    color={'primary'}
                    className={classes.delete}
                    onClick={() => deletePostStart(each.id)}
                  >
                    <DeleteForeverRounded />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))
        ) : (
          <SkeletonComponent />
        )}
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

export default connect(mapStateToProps, {
  fetchPostsStart,
  deletePostStart,
  clearPostMessages,
})(PostsContainer)
