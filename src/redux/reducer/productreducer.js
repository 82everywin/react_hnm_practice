import {createSlice} from "@reduxjs/toolkit "

let initialState = {
    productList:[],
    product :[]
    
}

// function productreducer(state=initialState,action){

//     switch (action.type){
//         case   "GET_PRODUCT_SUCCESS":
//             return {...state, productList : action.payload.data };
//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return {...state,product : action.payload.data}
//         default : 
//         return {...state};
//     }

// }

// export default productreducer

const productSlice = createSlice({
    name : "product",
    initialState,
 
    reducers: {
        getAllProducts(state, action ){
                state.productList=action.payload.data
        },
        getSingleProduct(state, action) {
            state.poductList = action.paylad.data;
        }
    }
})

//console.log("pppp", productSlice)
export const productActions = productSlice.actions
export default productSlice.reducer