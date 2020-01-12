export function getSellData(payload) {
    return ({
        type: "GET_SELLDATA_REQUEST",
        payload
    })
    
}

export function getRentData(payload) {
    return ({
        type: "GET_RENTDATA_REQUEST",
        payload
    })
    
}