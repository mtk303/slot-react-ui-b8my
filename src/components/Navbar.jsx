import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {Modal, Table} from 'react-bootstrap'
import logo from './../assets/img/logo.png'

import { Offcanvas } from 'react-bootstrap'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'


import '../assets/css/Navbar.css'

import { IoLogOut } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sidebars = [
    { id: 1, font: ' fa-solid fa-gamepad', title: 'ဂိမ်းအားလုံး', link: '/' },
    { id: 2, font: 'fa-solid fa-user', title: 'အကောင့်', link: '/profile' },
    { id: 3, font: 'fa-solid fa-gamepad', title: 'ဂိမ်းမှတ်တမ်း', link: '/gamelog' },
    { id: 3, font: 'fa-regular fa-rectangle-list', title: 'နေ့စဥ်မှတ်တမ်း', link: '/history' },
    { id: 4, font: 'fa-solid fa-user-pen', title: 'လျှိ့ဝှက်နံပါတ်ပြောင်းရန်', link: '/changepassword' },
    { id: 5, font: 'fa-solid fa-arrow-right-from-bracket', title: 'ထွက်ရန်', link: '/' },
  ]


  return (
    <div  className='navbars border-bottom  py-sm-1 px-2 px-sm-3  d-flex  align-items-center  justify-content-between  text-light'>

      <NavLink className='text-decoration-none d-flex' to={'/'}>
        <img src={logo} alt="logo" className='' height={'40px'}/>
        <h2 className='logo  text-dark fw-bold' >Delight Myanmar</h2>
      </NavLink>
      <div className='d-flex gap-2  gap-sm-4 align-items-center text-light'>
         {/* Login And Register Btn */}
         <NavLink to={'/login'} className=' btn me-4 text-uppercase fw-bold px-5 d-sm-block d-none' style={{backgroundColor:'rgb(215, 25, 25)',border:'1px solid gold'}}>Login</NavLink>
         <div className='d-sm-none d-block'>
          <FaUserAlt size={30} color='#b81212'/>
         </div>
         
        {/* <button className='btn  text-uppercase fw-bold px-5' style={{backgroundColor:'rgb(215, 25, 25)',border:'1px solid gold'}}>Register</button>  */}
       
        
        {/* <button className='btn text-light  text-uppercase fw-bold px-5 d-sm-block d-none' style={{background:'#b81212',border:'1px solid gold'}}>Log out</button>
        <div className='d-sm-none d-block'>
        <IoLogOut size={30} color='#b81212' />
        </div > */}

        <button variant="primary" className='border border-danger px-2' style={{background:'rgb(215, 25, 25)'}} onClick={handleShow}>
        <FaBars/>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='end'
        style={{ color: '#ccc' ,background:'#333'}}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-bold'>
            အသေးစိတ်အချက်လက်များ
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: 'none' }}>
            {sidebars.map((sidebar) => {
              return (
                <li className='my-4 fw-bold' style={{ fontSize: '16px' }}>
                  <Link
                    to={sidebar.link}
                    id={sidebar.id}
                    style={{ color: '#ccc', textDecoration: 'none' }}
                  >
                    <i
                      className={sidebar.font}
                      style={{ fontSize: '20px' }}
                    ></i>
                    <span className='ms-4'>{sidebar.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

       
        {/* <button className='border border-none bg-transparent' style={{outline:'none'}} onClick={handleShow}>
          <i className=" fa-solid fa-wallet  text-light "></i> 
        </button> */}
        {/* <div className='  d-flex align-items-center flex-nowrap '>
            <i   className="fa-solid fa-life-ring  text-light "></i>
            <span className='mx-2 fw-bolder '>: 0</span>
        </div> */}
        {/* <NavLink to={'/profile'}><i  className="fa-solid fa-user  "></i></NavLink>
        <NavLink to={'/incomeletter'}><i   className="text-light  fa-solid fa-comment-dots  "></i></NavLink>
        <i  class="fa-solid fa-right-from-bracket  "></i> */}
      </div>
     
    </div>

    
  )
}

export default Navbar
