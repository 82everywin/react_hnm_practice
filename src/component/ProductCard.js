import React from 'react'

const ProductCard = ({item, ishover,handleMouseOver, handleMouseOut}) => {
  

  return (
    <div className ="cardcontainer">
      <img src={item?.img}  className='cardimg'/>
      <div className="cardinfo">{item?.choice ===true? "Conscious Choice": ""}</div>
      <div className="cardinfo">{item?.title}</div>
      <div className="cardinfo">{item?.price}</div>
      <div className="cardinfo" > {item?.new === true? "신제품" : ""} </div>
    </div>
  );
};

export default ProductCard
