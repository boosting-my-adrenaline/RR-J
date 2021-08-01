import { SWActionTypes } from './sw.types'

export const fetchPeople = () => ({
  type: SWActionTypes.FETCH_PEOPLE,
})

export const fetchPlanets = () => ({
  type: SWActionTypes.FETCH_PLANETS,
})
