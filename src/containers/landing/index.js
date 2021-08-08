import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Paper, Grid, Box, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { TodayOutlined } from '@material-ui/icons'
import album from '../../static/album.svg'
import comment from '../../static/comment.svg'
import photo from '../../static/photo.svg'
import post from '../../static/post.svg'
import todo from '../../static/todo.svg'
import user from '../../static/user.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  app: {
    // background: `url("../static/home.svg") no-repeat center center fixed`,
    // backgroundSize: "cover",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  appLogo: {
    height: '15vmin',
    pointerEvents: 'none',
  },
  appHeader: {
    fontSize: 'calc(16px + 3vmin)',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  appLink: {
    color: '#61dafb',
    margin: theme.spacing(0),
  },
  card: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
  },
}))

const Categories = [
  { title: 'Albums', src: album, text: 'Check Memories done' },
  { title: 'Comments', src: comment, text: 'What do you think?' },
  { title: 'Photos', src: photo, text: "Let's take more" },
  { title: 'Posts', src: post, text: 'Writing clears the mind' },
  { title: 'Todos', src: todo, text: 'Check you checklist' },
  { title: 'Users', src: user, text: "Who's on the platform" },
]

function LandingPage() {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.root}>
      <Box className={classes.app}>
        <Typography variant="h3" component="h1" className={classes.appHeader}>
          JSONPLACEHOLDER: React Redux Saga
        </Typography>
        <Grid container justify="center" alignItems="center" spacing={4}>
          {Categories.map((item) => (
            <Grid
              item
              xs={11}
              sm={5}
              md={4}
              lg={4}
              component={RouterLink}
              to={`/${item.title.toLocaleLowerCase()}`}
              key={item.title}
              className={classes.appLink}
            >
              <Paper elavation={11} className={classes.card}>
                <Typography
                  variant="h4"
                  component="h1"
                  className={classes.title}
                >
                  {item.title}
                </Typography>
                <img src={item.src} alt="logo" className={classes.appLogo} />
                <Typography variant="subtitle1" component={'p'}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default LandingPage
