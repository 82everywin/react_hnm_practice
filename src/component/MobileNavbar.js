import React, { useState } from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';


const MobileNavbar = ({authenticate, setAuthenticate}) => {

    const [isOpen, setIsOpen]= useState(false);
    
    const navigate = useNavigate(); 
    
    const logout = () =>{
        setAuthenticate(false);
       }

    const mainpage = () =>{
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
    

    const search = (event) => {
        //console.log("onkeypress")
        if (event.key === "Enter"){
           // console.log("enter :",event.key )
           // 입력한 검색어를 읽어와서
           // url을 바꿔준다 .
           let keyword = event.target.value
           console.log(keyword)
           toggleMenu(isOpen)
           navigate(`/?q=${keyword}`)
        }
    }

    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen);
    }
  
    return (
    <div>
        <div>
            <div className = "login-button" >
                <ul>
                    <button  className= 'menu-icon'
                    onClick={toggleMenu}> <FontAwesomeIcon icon={faBars}/></button>  
                    
                    <FontAwesomeIcon icon={faHouse}  className="login-icon "/>
                    <Link to="/" className="login-bar main-bar">메인페이지</Link>   
                <FontAwesomeIcon icon={faUser}  className="login-icon"/>
                {
                    authenticate==true ?
                    <Link to="/" className= "login-bar" onClick={logout}>로그아웃</Link>  :
                    <Link to="/login" className= "login-bar">로그인</Link> 
                }
                </ul>
                <ul className={isOpen ? "show-menu" : "hide-menu"}>
                    <div className='hide-button'>
                        <button onClick={toggleMenu} className='hide-icon'>
                        <FontAwesomeIcon icon={faXmark}/>
                        </button>
                     </div>
                     <div className = 'search-box'>
                     <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                     <Form.Control type="text" placeholder="제품을 검색하세요" className='search-bar' onKeyUp={(event) => search(event)}/>

                     </div>
                {menuList.map((menu)=>
                <li>{menu}</li>
                )}
                </ul>
            </div>
            
        </div>
        <div className= "nav-section">
         <img
         onClick={mainpage}
          width = {100}
          src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>
    </div>
  )
}

export default MobileNavbar
