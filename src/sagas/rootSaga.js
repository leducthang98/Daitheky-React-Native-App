import { all } from 'redux-saga/effects'
import { sellSaga } from './sellSaga'
function* rootSaga() {
    yield all([
        ...sellSaga
    ]);
}
export default rootSaga;