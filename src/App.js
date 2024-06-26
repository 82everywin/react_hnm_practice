import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom"
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './component/MobileNavbar';
import { useSelector } from 'react-redux';


//1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. Navigation Bar 
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다. 
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다. 
//4. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다. 
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다. 
//6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다. 
//7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//8. 상품을 검색할 수 있다. 

function App() {
  //const [authenticate , setAuthenticate]= useState(false);  //true면 로그인이 됨. 

  const isBrowse = useMediaQuery({
    query : "(min-width : 768px)"
  })

  const isMobile = useMediaQuery({
    query : "(max-width : 767px)"
  })

  const authenticate = useSelector((state)=> state.auth.authenticate);
  useEffect(()=>{
    console.log("authenticate",authenticate)
  },[authenticate]);
 
  return (
    <div className='body' >
      {isBrowse && <Navbar authenticate={authenticate} />}
      {isMobile && <MobileNavbar authenticate={authenticate} />}
      <Routes >
        <Route path="/" element={<ProductAll authenticate={authenticate} isMobile={isMobile}/>}></Route>
        <Route path="/login" element={<Login  isMobile={isMobile} />}></Route>
        <Route path ="/product/:id" element={<PrivateRoute isMobile={isMobile}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
