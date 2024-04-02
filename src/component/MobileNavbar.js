import React, { useState } from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark ,faCartShopping} from '@fortawesome/free-solid-svg-icons';
//import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { isMobile } from 'react-device-detect';
import { useDispatch } from 'react-redux';


const MobileNavbar = ({authenticate}) => {

    const [isOpen, setIsOpen]= useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [text,setText]= useState("");
 
    const dispatch = useDispatch();

    const navigate = useNavigate(); 
    
    const login = () => {
        navigate("/login");
    }
    const logout = () =>{
        dispatch({type:"AUTHENTICATE"})
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
    
    const show_search = () => {
        setIsSearchOpen(isSearchOpen => !isSearchOpen);
    }

    const search = (event) => {
        //console.log("onkeypress")
        if (event.key === "Enter"){
           // console.log("enter :",event.key )
           // 입력한 검색어를 읽어와서
           // url을 바꿔준다 .
           let keyword = event.target.value
           console.log(keyword)
        
           navigate(`/?q=${keyword}`)
        }
    }

    const displayText = (e)=>{
        setText(e.target.value);
    }

    const valueNull = (e) => {
        setText("");
    }
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen);
    }

  
    return (
    <div >
        <header className = "mobile-navbar">
            <div>
                <div>
                    <ul>
                        <button  className= 'mobile-menu-button' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>  

                    

                        <div className='mobile-nav-box'>
                            
                            <input 
                            type ='text'
                            placeholder='제품을 검색하세요'
                            className = {isSearchOpen==true? 'mobile-search-text' : 'hidden'}
                            onKeyUp={(event) => search(event)}
                            value={text}
                            onChange={displayText}
                            onClick={valueNull}>
                             
                            </input> 
                        
                            <button className ={isSearchOpen==true?
                            'mobile-search-bar hidden':
                            'mobile-nav-button' }
                                onClick= {show_search}>
                                <FontAwesomeIcon icon={faSearch}  className='mobile-search-icon'/>
                            </button> 

                              <button className ={isSearchOpen==true?
                            'mobile-search-bar':
                            'mobile-nav-button hidden' }
                                onClick={show_search}
                                >
                                <FontAwesomeIcon icon={faXmark}  className='mobile-search-icon'/>
                            </button> 
                                
                     
                            <button className ={isSearchOpen==true?
                            'mobile-search-hidden':
                           'mobile-nav-button' }
                                onClick={authenticate==true ?logout : login}>
                            <FontAwesomeIcon icon={faUser} className='mobile-nav-icon'/>
                            </button>

                            <button className={isSearchOpen==true?
                                'mobile-search-hidden':
                                'mobile-nav-button' } onClick={login}>
                                <FontAwesomeIcon icon={faCartShopping} className='mobile-nav-icon' />
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
        </header>
    </div>
  ) 
}

export default MobileNavbar