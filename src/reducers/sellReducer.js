const DEFAULT_STATE = {
    countSellData:0,
    sellData: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'GET_SELLDATA_SUCCESS': {
            return {
                ...state,
                sellData:action.payload.sellData,
                countSellData:action.payload.countSellData
            }
        }
        case 'GET_SELLDATA_FAIL': {
            return {


            }
        }


    }
    return state;
}
