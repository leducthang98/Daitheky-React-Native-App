const DEFAULT_STATE = {
    rentData: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'GET_RENTDATA_SUCCESS': {
            return {
                ...state,
                rentData:action.payload.rentData
            }
        }
        case 'GET_RENTDATA_FAIL': {
            return {


            }
        }


    }
    return state;
}
