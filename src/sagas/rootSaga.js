import { all } from 'redux-saga/effects'
import { sellSaga } from './sellSaga'
import { rentSaga } from './rentSaga'
function* rootSaga() {
    yield all([
        ...rentSaga, 
        ...sellSaga,
    ]);
}
export default rootSaga;