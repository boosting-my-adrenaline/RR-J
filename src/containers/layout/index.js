import React from 'react'
import { PropTypes } from 'prop-types'
import {
  Toolbar,
  Container,
  Fab,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core'
import { KeyboardArrowUp, ThumbUpRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import Navigation from './components/navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children } = props
  const classses = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classses.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function BackToTop(props) {
  return (
    <>
      <Navigation />
      <Toolbar id="back-to-top-anchor" />
      <Container>{props.children}</Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  )
}
