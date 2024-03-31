import React, { useState } from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { isMobile } from 'react-device-detect';


const MobileNavbar = ({authenticate, setAuthenticate}) => {

    const [isOpen, setIsOpen]= useState(false);
    
    const navigate = useNavigate(); 
    
    const login = () => {
        navigate("/login");
    }
    const logout = () =>{
        setAuthenticate(false);
        navigate("/");
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
            <div  >
                <ul>
                    <button  className= 'mobile-menu-button' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>  
                    <div className='mobile-nav-box'>
                        {isMobile ? 
                            <button className ='mobile-nav-button'><FontAwesomeIcon icon={faSearch}  className='mobile-nav-icon'/></button> : 
                            <button></button>
                    
                        }
                        <button className ='mobile-nav-button' onClick={authenticate==true ?logout : login}>
                        <FontAwesomeIcon icon={faUser} className='mobile-nav-icon'/>
                        </button>

                        <button className='mobile-nav-button' onClick={mainpage}>
                            <FontAwesomeIcon icon={faHeart} className='mobile-nav-icon' />
                        </button>
                    </div>
                </ul>
                <ul className={isOpen ? "show-menu" : "hide-menu"}>
                    <div className='hide-button'>
                        <button onClick={toggleMenu} className='hide-icon'>
                        <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                    
                    <div className='togglemenu'>
                      {menuList.map((menu)=>
                              <li>{menu}</li>
                       )}
                    </div>
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
