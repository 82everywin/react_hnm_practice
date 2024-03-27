import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        let url = "http://localhost:5000/products"
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
        
      <h1> 전체 상품 페이지 </h1>
        <ProductCard/>
    </div>
  )
}

export default ProductAll
