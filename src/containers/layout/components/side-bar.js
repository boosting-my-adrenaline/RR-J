import React, { useState } from 'react'
import {
  Button,
  ListItem,
  IconButton,
  ListItemIcon,
  makeStyles,
  ListItemText,
} from '@material-ui/core'
import { Drawer, List, Divider } from '@material-ui/core'
import {
  Home,
  Menu,
  AllInbox,
  Comment,
  People,
  Photo,
  PhotoLibrary,
  PlaylistAddCheck,
} from '@material-ui/icons'
import clsx from 'clsx'
import ListItemLink from '../../components/link'
import GitHub from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  buttonLinks: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}))

const Links = [
  { primary: 'Home', to: '/', icon: <Home /> },
  { primary: 'Albums', to: '/albums', icon: <PhotoLibrary /> },
  { primary: 'Comments', to: '/comments', icon: <Comment /> },
  { primary: 'Photos', to: '/photos', icon: <Photo /> },
  { primary: 'Posts', to: '/posts', icon: <AllInbox /> },
  { primary: 'Todos', to: '/todos', icon: <PlaylistAddCheck /> },
  { primary: 'Users', to: '/users', icon: <People /> },
]

function SideBar() {
  const classes = useStyles()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Links.map((link) => (
          <div key={link.to}>
            <ListItemLink
              to={link.to}
              primary={link.primary}
              icon={link.icon}
            />
            <Divider />
          </div>
        ))}
      </List>
      <List>
        <div className={classes.links}>
          <ListItem
            button
            href={'https://github.com/igmrrf/react-redux-jsonplaceholder'}
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </div>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        onClick={toggleDrawer('left', true)}
        edge={true}
        color={'primary'}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  )
}

export default SideBar
