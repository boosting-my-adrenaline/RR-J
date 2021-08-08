import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Grid } from '@material-ui/core'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function SkeletonComponent() {
  return list.map((each) => (
    <Grid item xs={10} sm={10} md={5} lg={3} key={each}>
      <Skeleton width={'100%'} height={50} />
      <Skeleton width={'100%'} height={250} />
    </Grid>
  ))
}

export default SkeletonComponent
