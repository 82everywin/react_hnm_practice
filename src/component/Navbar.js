import React from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
   const navigate= useNavigate();

   const mainpage= () =>{
    navigate("/");
   }
    const menuList= [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    ' H&M HOME',
    'Sale', 
    '지속가능성'
    ];

  return (
    <div>
        <div>
            
            <div className = "login-button" >
                 <FontAwesomeIcon icon={faHouse}  className="login-icon "/>
                 <Link to="/" className="login-bar main-bar">메인페이지</Link>   
                <FontAwesomeIcon icon={faUser}  className="login-icon"/>
                <Link to="/login" className= "login-bar">로그인</Link>
            </div>
        </div>
        <div className= "nav-section">
         <img
            onClick={mainpage}
          width = {100}
          src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>
        <div className = "menu-area">
            <ul className="menu-list">
                {menuList.map((menu)=>
                <li>{menu}</li>
                )}
            </ul>
            <div className="search">
                <FontAwesomeIcon icon={faSearch} className='img-search'/>
                <input type="text" placeholder='제품검색'></input>
            </div>
         </div>
    </div>
  
   
  )
};

export default Navbar
