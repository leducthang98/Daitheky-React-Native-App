import { put, takeEvery } from 'redux-saga/effects'
import getSellData from '../fetchAPIs/getSellDataAPI'
function* sellSagaFunction(action) {
    try {
        let sellDataOrigin = yield getSellData(action.payload);
        let sellData = sellDataOrigin.dulieu
        let countSellData = sellDataOrigin.sotin
        yield put({
            type: 'GET_SELLDATA_SUCCESS',
            payload: { sellData, countSellData }
        })
    } catch{
        yield put({
            type: 'GET_SELLDATA_FAIL',
            payload: {}
        })
    }
}


export const sellSaga = [
    takeEvery('GET_SELLDATA_REQUEST', sellSagaFunction)
];

