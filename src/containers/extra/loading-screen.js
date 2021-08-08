import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import { Box, Button, LinearProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: 'rgb(18, 29, 51, )',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    justifyContent: 'center',
  },
}))

function LoadingScreen() {
  const classes = useStyles()

  // useEffect(() => {
  //   NProgress.start()

  //   return () => {
  //     NProgress.done()
  //   }
  // }, [])

  return (
    <Box component="div" className={classes.root}>
      <Box width={360}>
        <Button onClick={() => NProgress.start()}>NP</Button>
        <LinearProgress />
      </Box>
    </Box>
  )
}
export default LoadingScreen
