import { AllInclusive, StorageSharp } from '@material-ui/icons'
import { all, spawn, call, delay } from 'redux-saga/effects'
import postsSaga from './posts/posts.sagas'
import swSaga from './sw/sw.sagas'

export default function* rootSaga() {
  yield all([call(postsSaga), call(swSaga)])
}

// function* auth() {
//   yield delay(2000)

//   console.log(auth.ok)
//   return true
// }

// function* loadUsers() {
//   const request = yield call(fetch, `https://`)
//   const data = yield call([request, request.json])

//   console.log('data')
// }

// export function* loadBasicData() {
//   yield all([fork(auth), fork[loadUsers]])
// }

// export default function* rootSaga() {
//   const sagas = []

//   const retrySagas = sagas.map((saga) => {
//     return spawn(function* () {
//       while (true) {
//         try {
//           yield call(saga)
//           break
//         } catch (e) {
//           console.log(e)
//         }
//       }
//     })
//   })

//   yield all(retrySagas)
// }
