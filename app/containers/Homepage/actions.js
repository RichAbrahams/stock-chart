/*
 *
 * Homepage actions
 *
 */

import {
  GET_STOCK,
  UPDATE_REDUCER_STOCKS,
  REMOVE_STOCK,
  UPDATE_REDUCER_ERROR,

} from './constants';

export function getStock(payload) {
  return {
    type: GET_STOCK,
    payload,
  };
}

export function updateReducerStocks(payload) {
  return {
    type: UPDATE_REDUCER_STOCKS,
    payload,
  };
}

export function removeStock(payload) {
  return {
    type: REMOVE_STOCK,
    payload,
  };
}

export function updateReducerError(payload) {
  return {
    type: UPDATE_REDUCER_ERROR,
    payload,
  };
}
