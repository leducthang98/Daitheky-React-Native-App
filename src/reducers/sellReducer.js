const DEFAULT_STATE = {
    sellData: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'GET_SELLDATA_SUCCESS': {
            return {
                ...state,
                sellData:action.payload.sellData
            }
        }
        case 'GET_SELLDATA_FAIL': {
            return {


            }
        }


    }
    return state;
}
