import { combineReducers } from 'redux'
import postsReducer from './posts/posts.reducer'
import swReducer from './sw/sw.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  sw: swReducer,
})

export default rootReducer
