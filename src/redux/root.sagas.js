import { all, spawn, call } from 'redux-saga/effects'
import postsSaga from './posts/posts.sagas'
import swSaga from './sw/sw.sagas'

export default function* rootSaga() {
  yield all([call(postsSaga), call(swSaga)])
}
