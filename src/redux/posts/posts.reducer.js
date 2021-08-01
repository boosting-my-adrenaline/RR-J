import PostsActionTypes from './posts.types'
// import { addNewItem, updateItemDetails, deleteItem } from '../../utils/modifier'

const initialState = {
  isFetching: false,
  data: [],
  errorMessage: null,
  message: null,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.CLEAR_POST_MESSAGE:
      return {
        ...state,
        errorMessage: null,
        message: null,
      }
    case PostsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      }
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default postsReducer
