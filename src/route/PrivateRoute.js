import React from 'react'
import ProductAll from '../page/ProductAll'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'
import { useSelector } from 'react-redux'


const PrivateRoute = ({isMobile}) => {

  const authenticate = useSelector((state)=> state.auth.authenticate);

  return (
   authenticate==true? <ProductDetail isMobile={isMobile}/>: <Navigate to="/login"/>
  )
}

export default PrivateRoute
