import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = ({isMobile}) => {

  let{id} = useParams()
  const [product, setProduct] = useState(null);


  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/82everywin/react_hnm_practice/products/${id} `
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  },[])


  return (
    
      <Container className={isMobile ?'mobile-product-top':'browse-product-top'}>
          <Row >
            <Col >
              <img src={product?.img} className={isMobile ? 'mobile-product-img'  :''}>
               </img>
            </Col>
            <Col>
              <div className='margin detail-title'> {product?.title}</div>
              <div className='margin detail-price'>  ₩{product?.price}</div>
              <div className='margin detail-choice'>{product?.choice == true ? "Conscious Choice" : ""}</div>
              <Dropdown  className='detail-size margin'>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  사이즈 선택 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <div className="d-grid gap-2 detail-cart margin">
              <Button variant="secondary" size="lg">
                장바구니 추가 
              </Button>
              </div>

              <div className="d-grid gap-2 detail-cart margin">
              <Button variant="dark" size="lg">
                구매하기 
              </Button>
              </div>
            </Col> 
          </Row>
      </Container>
  
  )
}

export default ProductDetail
