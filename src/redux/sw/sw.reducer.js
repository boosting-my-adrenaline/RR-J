import { SWActionTypes } from './sw.types'

const initialState = {
  people: [],
  planets: [],
  isFetching: false,
  errorMessage: false,
}

const swReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWActionTypes.FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload,
      }
    case SWActionTypes.FETCH_PLANETS:
      return {
        ...state,
        planets: action.payload,
      }
    default:
      return state
  }
}
