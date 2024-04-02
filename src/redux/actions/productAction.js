// middleware 함수가 들어가는 자리 


function getProducts(searchQuery) {
    return async(dispatch, getState) => {
        
        let url = `https://my-json-server.typicode.com/82everywin/react_hnm_practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    }
}

function getProductsDetail(id){
    return async(dispatch, getState)=>{
    let url = `https://my-json-server.typicode.com/82everywin/react_hnm_practice/products/${id} `;
    let response = await fetch(url)
    let data = await response.json();
   // console.log(data);
    dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS", payload:{data}})
    }
}



export const productAction={getProducts, getProductsDetail}