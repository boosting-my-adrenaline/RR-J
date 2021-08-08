import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import postsReducer from './posts/posts.reducer'
import swReducer from './sw/sw.reducer'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  posts: postsReducer,
  sw: swReducer,
})

export default persistReducer(persistConfig, rootReducer)
