import { all, call } from 'redux-saga/effects'
import postsSaga from './posts/psots.sagas'

export default function* rootSaga() {
  yield all([call(postsSaga)])
}
