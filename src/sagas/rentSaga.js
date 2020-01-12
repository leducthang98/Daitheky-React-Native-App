import { put, takeEvery } from 'redux-saga/effects'
import getRentData from '../fetchAPIs/getRentDataAPI'
function* rentSagaFunction(action) {
    try {
      
        let rentData = yield getRentData();
        yield put({
            type: 'GET_RENTDATA_SUCCESS',
            payload: { rentData }
        })
    } catch{
        yield put({
            type: 'GET_RENTDATA_FAIL',
            payload: { }
        })
    }
}


export const rentSaga = [
    takeEvery('GET_RENTDATA_REQUEST', rentSagaFunction)
];

