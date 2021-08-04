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
  Box,
  IconButton,
} from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontFamily: 'courier',
    fontSize: '1.7em',
  },
  links: {
    dispaly: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(5),
  },
  buttonLinks: {
    margin: theme.spacing(1, 1.5),
  },
  link: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: 'none',
    color: 'white',
    fontFamily: 'courier',
    fontSize: '1.5em',
    textDecoration: 'underline',
  },
}))

export default function Navigation() {
  const classes = useStyles()

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" color="inherit" component={RouterLink}>
            JSONPLACEHOLDER
          </Link>
        </Typography>
        <Hidden smDown>
          <Paper className={classes.link} elevation={0}>
            <Link to="/posts" color="inherit" component={RouterLink}>
              Posts
            </Link>
          </Paper>
          <Box className={classes.links} component="div">
            <IconButton
              variant={'contained'}
              color={'primary'}
              component={'a'}
              href={
                'https://github.com/boosting-my-adrenaline/RR-J/tree/main/src'
              }
              className={classes.buttonLinks}
            >
              <GitHubIcon size="large" />
            </IconButton>
          </Box>
        </Hidden>
        <Hidden mdUp></Hidden>
      </Toolbar>
    </AppBar>
  )
}
