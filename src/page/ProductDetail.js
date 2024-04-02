import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { productAction } from '../redux/actions/productAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetail = ({isMobile}) => {

  let{id} = useParams()
 // const [product, setProduct] = useState(null); //redux 사용하면 더이상 usestate가 필요 없음
 const product = useSelector((state)=>state.product.product);

  const dispatch = useDispatch();

  const getProductDetail = async() => {
    dispatch(productAction.getProductsDetail(id))
  }

  useEffect(()=>{
    getProductDetail()
  },[product])


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
