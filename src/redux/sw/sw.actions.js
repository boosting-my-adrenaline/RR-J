import { SWActionTypes } from './sw.types'

export const fetchPeopleStart = () => ({
  type: SWActionTypes.FETCH_PEOPLE_START,
})

export const fetchPlanetsStart = () => ({
  type: SWActionTypes.FETCH_PLANETS_START,
})

export const fetchPeopleSuccess = (data) => ({
  type: SWActionTypes.FETCH_PEOPLE_SUCCESS,
  payload: data.results,
})

export const fetchPlanetsSuccess = (data) => ({
  type: SWActionTypes.FETCH_PLANETS_SUCCESS,
  payload: data.results,
})

export const fetchPeopleFailure = (errorMessage) => ({
  type: SWActionTypes.FETCH_PEOPLE_FAILURE,
  paylaod: errorMessage,
})

export const fetchPlanetsFailure = (errorMessage) => ({
  type: SWActionTypes.FETCH_PLANETS_FAILURE,
  paylaod: errorMessage,
})

export const clearData = () => ({
  type: SWActionTypes.CLEAR_DATA,
})

export const startLoading = () => ({
  type: SWActionTypes.START_LOADING,
})

export const stopLoading = () => ({
  type: SWActionTypes.stopLoading,
})
