import { combineReducers } from 'redux';

import { reducer as picturesReducer } from './pictures';

export const rootReducer = combineReducers({
  pictures: picturesReducer,
});