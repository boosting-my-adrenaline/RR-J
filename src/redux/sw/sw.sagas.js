import {
  takeLatest,
  put,
  call,
  takeEvery,
  spawn,
} from '@redux-saga/core/effects'
import { SWActionTypes } from './sw.types'
import { fetchPeopleSuccess, fetchPlanetsSuccess } from './sw.actions'

async function swapiGet(params) {
  const request = await fetch(`https://swapi.dev/api/${params}`)
  const data = await request.json()
  return data
}

export function* fetchPeopleWorker() {
  console.log('sagas people start')
  const data = yield call(swapiGet, 'people')
  console.log(data.results)
  yield put(fetchPeopleSuccess(data))
  console.log('sagas people end')
}

export function* fetchPlanetsWorker() {
  console.log('sagas planets')

  const data = yield call(swapiGet, 'planets')
  yield put(fetchPlanetsSuccess(data))
}

export default function* sagaWatcher() {
  yield takeEvery(SWActionTypes.FETCH_PEOPLE_START, fetchPeopleWorker)
  yield takeEvery(SWActionTypes.FETCH_PLANETS_START, fetchPlanetsWorker)
}
