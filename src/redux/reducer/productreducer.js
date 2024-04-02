let initialState = {
    productList:[],
    product :[]
    
}

function productreducer(state=initialState,action){

    switch (action.type){
        case   "GET_PRODUCT_SUCCESS":
            return {...state, productList : action.payload.data };
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return {...state,product : action.payload.data}
        default : 
        return {...state};
    }

}

export default productreducer
