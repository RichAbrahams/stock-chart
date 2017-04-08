import { eventChannel } from 'redux-saga';
import { fork, take, call, put } from 'redux-saga/effects';
import randomcolor from 'randomcolor';
import firebase from 'firebase/app';
import database from 'firebase/database';
import {
  GET_STOCK,
  REMOVE_STOCK,
  FIREBASE_DATA_SUCCESS,
  FIREBASE_DATA_ERROR,
} from './constants';

import { updateReducerStocks, updateReducerError } from './actions';

const config = {
  apiKey: 'AIzaSyBgNPH80gj89zHuFy1sb-gDut1-4bJhR_Q',
  authDomain: 'stockcharts-77aaa.firebaseapp.com',
  databaseURL: 'https://stockcharts-77aaa.firebaseio.com',
  projectId: 'stockcharts-77aaa',
  storageBucket: '',
  messagingSenderId: '627121927334',
  quandiApi: 'vdu65nZgK-LyYsAhW8Uf',
};

firebase.initializeApp(config);

function initFirebase() {
  return eventChannel((emitter) => {
    const dbRef = database()
      .ref()
      .child('stocks');

    const dataSuccess = (data) => emitter({ type: FIREBASE_DATA_SUCCESS, payload: data });
    const dataFailed = (err) => emitter({ type: FIREBASE_DATA_ERROR, payload: err });
    dbRef.on('value', dataSuccess, dataFailed);

    return () => console.log('Socket off');
  });
}

function* fireBaseReceiveData(channel) {
  while (true) {
    const action = yield take(channel);
    if (action.type === FIREBASE_DATA_SUCCESS) {
      yield put(updateReducerStocks(action.payload.val()));
    }
    if (action.type === FIREBASE_DATA_ERROR) {
      yield put(updateReducerError('could not retrieve data, please try later'));
    }
  }
}

function* fetchStock(action) {
  const stockCodeObject = action
    .payload
    .toJS();
  const stockCode = stockCodeObject.stockCode;
  const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?start_date=2017-01-01&api_key=vdu65nZgK-LyYsAhW8Uf`;
  try {
    const result = yield fetch(url).then((response) => response.json());
    if (result.quandl_error) {
      yield put(updateReducerError('could not find a stock with this code'));
    } else {
      yield addToFireBase(result);
    }
  } catch (e) {
    yield put(updateReducerError('could not connect to data provider, please try later'));
  }
}

function addToFireBase(result) {
  try {
    const ref = 'stocks';
    const dbRef = database().ref(ref);
    const dates = result
      .dataset
      .data
      .map((item) => item[0]);
    const prices = result
      .dataset
      .data
      .map((item) => item[4]);
    const stockCode = result.dataset.dataset_code;
    const toSave = {
      code: stockCode,
      dates,
      prices,
      color: randomcolor(),
    };
    dbRef.transaction((currentData) => {
      if (currentData === null) {
        return [toSave];
      }
      const findStockCode = currentData.filter((item) => item.code === stockCode);
      if (findStockCode.length === 0) {
        return [...currentData, toSave];
      }
      return currentData;
    });
  } catch (e) {
    console.log('failed to save');
  }
}

function removeFromFireBase(action) {
  try {
    const ref = 'stocks';
    const dbRef = database().ref(ref);
    dbRef.transaction((currentData) => {
      if (currentData === null) {
        return;
      }
      const filteredData = currentData.filter((item) => item.code !== action.payload);
      return filteredData;
    });
  } catch (e) {
    console.log('failed to save');
  }
}

function* watchFetchStocks() {
  while (true) {
    const action = yield take(GET_STOCK);
    yield call(fetchStock, action);
  }
}

function* watchRemoveStock() {
  while (true) {
    const action = yield take(REMOVE_STOCK);
    yield call(removeFromFireBase, action);
  }
}

function* rootFirebaseSaga() {
  const channel = yield call(initFirebase);
  yield fork(fireBaseReceiveData, channel);
}

export default[rootFirebaseSaga,
  watchFetchStocks,
  watchRemoveStock];
