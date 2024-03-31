import React from 'react'

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = ({authenticate, setAuthenticate}) => {
   const navigate= useNavigate();

   const mainpage= () =>{
    navigate("/");
   }

   const logout = () =>{
    setAuthenticate(false);
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
        if (event.key == "Enter"){
           // console.log("enter :",event.key )
           // 입력한 검색어를 읽어와서
           // url을 바꿔준다 .
           let keyword = event.target.value
           console.log(keyword)
           navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            
            <div className = "nav-button" >
                <FontAwesomeIcon icon={faUser}  className="nav-icon"/>
                {
                    authenticate==true ?
                    <Link to="/" className= "nav-icon" onClick={logout}>로그아웃</Link>  :
                    <Link to="/login" className= "nav-txt">로그인</Link> 
                }
                 <FontAwesomeIcon icon={faHeart}className= "nav-icon"/>         
                 <Link to="/" className="nav-txt">즐겨찾기</Link>  
                  
                <FontAwesomeIcon icon={faCartShopping} className='nav-icon'/>
                <Link to="/" className="nav-txt">장바구니</Link>  
                      
                    
                 
            </div>
        </div>
        <div className= "nav-section">
         <img
         onClick={mainpage}
          width = {100}
          src='https://www2.hm.com/hm-logo.png'></img>
        </div>
        <div className = "menu-area">
            <ul className="menu-list">
                {menuList.map((menu)=>
                <li>{menu}</li>
                )}
            </ul>
            <div className="search">
                <FontAwesomeIcon icon={faSearch} className='img-search'/>
                <input type="text" placeholder='제품검색' onKeyUp={(event) => search(event)} />
            </div>
         </div>
    </div>
  
   
  )
};

export default Navbar
