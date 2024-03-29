import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({authenticate}) => {

    const [query, setQuery] = useSearchParams([]);
    
    const [productList, setProductList] = useState([]);

    const getProducts = async() => {
        let searchQuery = query.get('q');
        console.log("쿼리값", searchQuery)
        let url = `https://my-json-server.typicode.com/82everywin/react_hnm_practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data)
    }

 

    useEffect(()=>{
        getProducts();;
    },[query])


  return (
    <div>
        <Container>
          <Row >
           {productList.map((item)=>(
                <Col lg={3} className = "card_box">
                  <ProductCard item={item} authenticate={authenticate} />
                </Col>
              )) }
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll
