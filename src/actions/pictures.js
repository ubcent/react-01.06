import { createAction } from 'redux-actions';

export const loadStart = createAction('[Pictures] Load start');
export const dataReceived = createAction('[Pictures] Data received');
export const errorOccured = createAction('[Pictures] Error Occured');

export const load = (dispatch) => {
  dispatch(loadStart());
  fetch(`http://localhost:8888/api/photos`, {
    headers: {
      'Content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => response.json())
    .then((data) => {
      dispatch(dataReceived(data));
    })
    .catch(() => {
      dispatch(errorOccured());
    });
}