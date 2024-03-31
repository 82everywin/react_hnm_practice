import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item, isMobile}) => {
  const navigate=useNavigate();
  const showDetail = () => {
      navigate(`/product/${item.id}`)
  }
  
 
  return (
<div className ="cardcontainer" onClick={showDetail}>
      <img src={item?.img}  className={ isMobile ? "mobile-img" : "browse-img"}/>
      <div className="cardinfo">{item?.choice ===true? "Conscious Choice": ""}</div>
      <div className="cardinfo">{item?.title}</div>
      <div className="cardinfo">{item?.price}</div>
      <div className="cardinfo" > {item?.new === true? "신제품" : ""} </div>
    </div>
  );
};

export default ProductCard
