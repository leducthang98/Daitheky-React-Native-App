import { put, takeEvery } from 'redux-saga/effects'
import getSellData from '../fetchAPIs/getSellDataAPI'
function* sellSagaFunction(action) {
    try {
        let sellData = yield getSellData();

        yield put({
            type: 'GET_SELLDATA_SUCCESS',
            payload: { sellData }
        })
    } catch{
        yield put({
            type: 'GET_SELLDATA_FAIL',
            payload: { }
        })
    }
}


export const sellSaga = [
    takeEvery('GET_SELLDATA_REQUEST', sellSagaFunction)
];

