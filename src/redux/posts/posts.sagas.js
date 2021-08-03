import { takeLatest, put } from '@redux-saga/core/effects'
import PostsActionTypes from './posts.types'
import {
  clearPostMessages,
  fetchPostsSuccess,
  fetchPostsFailure,
} from './posts.actions'

import axios from '../../utils/axios'

export function* fetchPostsStartAsync() {
  console.log('fetchPostsStartAsync')
  try {
    const Posts = yield axios.get('Posts').then((res) => res.data)
    console.log(Posts)
    yield put(fetchPostsSuccess(Posts))
    console.log('put posts')
  } catch (error) {
    console.log('error')
    yield put(fetchPostsFailure(error.message))
  }
}

export function* clearPostMessagesStart() {
  yield put(clearPostMessages)
}

export default function* postsSaga() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsStartAsync)
  yield takeLatest(
    [
      PostsActionTypes.FETCH_POSTS_SUCCESS,
      PostsActionTypes.FETCH_POSTS_FAILURE,
    ],
    clearPostMessagesStart
  )
}
