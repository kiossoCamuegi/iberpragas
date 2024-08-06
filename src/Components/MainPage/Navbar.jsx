import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiShoppingCartFill } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";


function Navbar() {
    const [FixedNav, setFixedNav] =  useState(false);
 
    document.addEventListener("scroll", (e) => { 
        setFixedNav(window.scrollY > 100 ? true : false);
    });


  return (
    <div className={FixedNav === false ? 'bug-nav' : "bug-nav fixed"}>
        <div className="top-nav">
            <div className="top-nav-items">
                 <div className="contact-info item">
                      <a href="#" target="_blank" rel="noopener noreferrer"><FiPhoneCall />Telefone: <span>  000 000 000</span></a>
                      <a href="#" target="_blank" rel="noopener noreferrer"><IoMail />Email: <span>website@gmail.com</span></a>
                      <a href="#" target="_blank" rel="noopener noreferrer"><MdAccessTimeFilled />Horas: <span>Seg 08:00 AM - 06:00 PM</span></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className='text-main link-main'><IoMdPin /> pegar direções </a>
                 </div>
                 <div className="item">
                    <a  href="#"><span>Noticias & Media</span></a>
                    <a  href="#"><span>Carreiras</span></a>
                    <a  href="#"><span>FaQs</span></a>
                    <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div>
                    <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
                    <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></div>
                 </div>
            </div>
        </div>
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-item">
                    <a  href="#"><img src="https://iberpragas.com/wp-content/uploads/2023/02/Iberpragas-Logo-1-300x60.png" alt="" /></a>
                </div>
                <div className="nav-item nav-main">
                    <div className="nav-links">
                        <a  href="#" className='active'> Inicio </a>
                        <a  href="#">Sobre a Empresa</a>
                        <a  href="#">Serviços</a>
                        <a  href="#">Blog</a>
                        <a  href="#">Loja online</a>
                    </div>
                    <div className="nav-links">
                       <div className="cart-item">
                           <div className="count bg-second">2</div>
                            <RiShoppingCartFill />
                       </div>
                       <div className="search-item">
                           <LuSearch /> Pesquisar
                       </div>
                    </div>
                </div>
                <div className="nav-item">
                     <button className="btn hvr-rectangle-out bg-main text-light">Solicitar orçamento</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
