import { handleActions } from 'redux-actions';

import { loadStart, dataReceived, errorOccured } from 'actions/pictures';

const initialState = {
  loading: false,
  error: false,
  entries: [],
};

export const reducer = handleActions({
  [loadStart]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [dataReceived]: (state, action) => {
    const data = action.payload;
    return {
      ...state,
      entries: state.entries.concat(
        data.photos.map(photo => ({ id: photo._id, image: photo.image, likes: photo.likes.length, comments: photo.comments.length }))
      ),
      loading: false,
    }
  },
  [errorOccured]: (state) => {
    return {
      ...state,
      loading: false,
      error: true,
    }
  }
}, initialState);