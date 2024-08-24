import { takeEvery, put, takeLeading, cancel, fork, take} from 'redux-saga/effects'
import { useDispatch } from 'react-redux'
import { MONGO_CONNECT_SUCCEEDED, MONGO_CONNECT_FAILED} from './counterSlice'


function fetchData() {
  fetch('http://localhost:5000/express_backend').
  then (response => response.json()).
  then(get => console.log(get.express));
}

function* connectMongo(action) {
  try {
    const data = yield fetch('http://localhost:5000/express_backend');
    const body = yield data.json();
    yield put(MONGO_CONNECT_SUCCEEDED({totalCount:body.totalCount, xCount:body.xCount, oCount:body.oCount, drawCount:body.drawCount}))
  } catch (e) {
    yield put(MONGO_CONNECT_FAILED({message:e.message}))
  }
}

function* connectThere(action) {
  try {
  const result = action;
  console.log(JSON.stringify(result));
  yield fetch('http://localhost:5000/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(result)
  }) 
  } catch (e) {
    yield put(MONGO_CONNECT_FAILED({message:e.message}));
  }

}


function* sagaSlice() {
  yield takeLeading('FETCH',connectMongo);
  yield takeEvery('GIVE', connectThere);
  }

export {sagaSlice};