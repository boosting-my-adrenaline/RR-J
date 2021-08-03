import { ButtonGroup, IconButton, Button } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import { connect } from 'react-redux'
import { fetchPeopleStart, fetchPlanetsStart } from '../../redux/sw/sw.actions'
import { useState, useEffect } from 'react'

function SWDirectory(props) {
  const {
    isFetching,
    errorMessage,
    planets,
    people,
    fetchPeopleStart,
    fetchPlanetsStart,
  } = props

  return (
    <div
      style={{ padding: '50px 0 0', display: 'flex', justifyContent: 'center' }}
    >
      <ButtonGroup color="secondary" variant="contained">
        <IconButton>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: '4px solid    rgb(220, 0, 78)',
              borderBottomColor: 'transparent',
              transition: '0.2s ease-in-out',
              // transform: `rotate(${count}deg)`,
            }}
          ></div>
        </IconButton>
        <Button
          style={{ fontSize: '1.5em', fontFamily: 'courier' }}
          disabled={!isFetching}
          onClick={() => fetchPeopleStart()}
        >
          load people
        </Button>
        <Button
          style={{ fontSize: '1.5em', fontFamily: 'courier' }}
          disabled={!isFetching}
          onClick={() => fetchPlanetsStart()}
        >
          load planets
        </Button>
        <IconButton>
          {planets.length && !people.length ? (
            <HighlightOffIcon style={{ width: 50, height: 50 }} />
          ) : (
            <RadioButtonUncheckedIcon style={{ width: 50, height: 50 }} />
          )}
        </IconButton>
      </ButtonGroup>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetching: 'isFetching',
  errorMessage: 'errorMessage',
  planets: 'planets',
  people: 'people',
})

export default connect(mapStateToProps, {
  fetchPlanetsStart,
  fetchPeopleStart,
})(SWDirectory)
