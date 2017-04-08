/*
 *
 * Homepage reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_REDUCER_STOCKS, UPDATE_REDUCER_ERROR } from './constants';

const initialState = fromJS({ stocks: null, error: null });

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REDUCER_STOCKS:
      return state
        .set('stocks', fromJS(action.payload))
        .set('error', null);
    case UPDATE_REDUCER_ERROR:
      return state
        .set('error', action.payload);
    default:
      return state;
  }
}

export default homepageReducer;
