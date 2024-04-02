import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import {productAction} from '../redux/actions/productAction'
import { UseDispatch, useDispatch, useSelector } from 'react-redux';

const ProductAll = ({authenticate, isMobile}) => {

    const [query, setQuery] = useSearchParams([]);
    
    //const [productList, setProductList] = useState([]);
    const productList = useSelector(state => state.product.productList);
    const dispatch = useDispatch();

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("쿼리값", searchQuery)
        // 바로 reducer 로 넘어가는 것이 아니라 middleware로 넘어감 
        dispatch(productAction.getProducts(searchQuery))
    }

 

    useEffect(()=>{
        getProducts();;
    },[query])


  return (
    <div>
        <Container className={isMobile ?'mobile-product-top':'browse-product-top'} >
          <Row className='browse-row'>
           {productList.map((item)=>(
                <Col lg={3} className = {isMobile ? "mobile_card_box" : ''}>
                  <ProductCard item={item} authenticate={authenticate} isMobile={isMobile} />
                </Col>
              )) }
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll
