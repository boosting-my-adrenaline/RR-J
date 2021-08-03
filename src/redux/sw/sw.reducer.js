import { SWActionTypes } from './sw.types'

const initialState = {
  people: [],
  planets: [],
  isFetching: false,
  errorMessage: false,
}

const swReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWActionTypes.FETCH_PEOPLE_START:
      return {
        ...state,
        isFetching: true,
      }
    case SWActionTypes.FETCH_PLANETS_START:
      return {
        ...state,
        isFetching: true,
      }
    case SWActionTypes.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.payload,
      }
    case SWActionTypes.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        planets: action.payload,
      }
    case SWActionTypes.FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case SWActionTypes.FETCH_PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case SWActionTypes.START_LOADING:
      return {
        ...state,
        isFetching: true,
      }
    case SWActionTypes.STOP_LOADING:
      return {
        ...state,
        isFetching: false,
      }
    case SWActionTypes.CLEAR_DATA:
      return {
        state: initialState,
      }
    default:
      return state
  }
}

export default swReducer
