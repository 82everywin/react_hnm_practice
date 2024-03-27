import React from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import TextField from '@mui/material/TextField';

const Navbar = () => {

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
            <div className = "login-button">
                <FontAwesomeIcon icon={faUser} />
                <div> 로그인 </div>
            </div>
        </div>
        <div className= "nav-section">
         <img
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
                <TextField
                    id="standard-search"
                    label="검색하세요"
                    type="search"
                    variant="standard"
               />
            </div>
         </div>
    </div>
  
   
  )
};

export default Navbar
