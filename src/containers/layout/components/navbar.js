import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Link,
  Paper,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
// import { rgb } from 'jest-matcher-utils/node_modules/chalk'

const useStyles = makeStyles((theme) => ({}))

export default function Navigation() {
  const classes = useStyles()

  return (
    <AppBar position="sticky" style={{ background: 'rgb(18, 29, 51)' }}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" color="inherit" component={RouterLink}>
            JSONPLACEHOLDER
          </Link>
        </Typography>
        <Hidden smDown>
          <Paper className={classes.link} elevation={0}>
            <Link to="/posts" color="inherit" component={RouterLink}>
              <Typography variant="h6">Posts</Typography>
            </Link>
          </Paper>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
