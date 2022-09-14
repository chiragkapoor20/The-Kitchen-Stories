import React from 'react';
import { Link } from 'react-router-dom';
import  cooking from './cooking.png';



import './Header.css';


export default function Header({on, setShow}) {
  function Modal(){
    alert("Create Your Account");
  }
  return (
    <div>
    <header className="header">
    <img src={cooking} style={{height:"60px",width:"60px", marginLeft:"30px",color:"#f93f23"}} className=" animate__animated animate__rotateInDownRight animate__infinite infinite  animate__slow 2s"/>
   <h1 className="logo animate__animated animate__zoomOutLeft animate__infinite infinite animate__slower 2s" >The kitchen Stories</h1>
      
     
     {/* animate__infinite infinite */}
      <ul className="main-nav">
        <li><a href="#f2" className='nav1' style={{fontSize:"20px",fontWeight:"900",marginRight:"30px"}}>About Us</a></li>
        <li><Link to="/login" className='link'><button className='btn1' >SIGN IN</button></Link></li>

      </ul>
    </header>

  </div>

  )
}
