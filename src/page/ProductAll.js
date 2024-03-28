import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data)
    }

    useEffect(()=>{
        getProducts();;
    },[])


  return (
    <div>
        <Container>
          <Row className='Card' >
           {productList.map((item)=>(
                <Col lg={3} className="col">
                  <ProductCard item={item}/>
                </Col>
              )) }
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll
