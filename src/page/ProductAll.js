import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [ishover, setIsHover] = useState(false);
    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data)
    }

    const handleMouseOver = () => {
      setIsHover(true);
    }

    const handleMouseOut = () => {
      setIsHover(false);
    }

    useEffect(()=>{
        getProducts();;
    },[])


  return (
    <div>
        <Container>
          <Row >
           {productList.map((item)=>(
                <Col lg={3} className = "card_box">
                  <ProductCard item={item} />
                </Col>
              )) }
          </Row>
        </Container>
    </div>
  );
};

export default ProductAll
