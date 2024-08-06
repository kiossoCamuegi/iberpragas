import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";


function FooterSection() {
    return (
        <div className='footer-section'>
            <div className="wrapper">
                <div className="footer-content">
                    <section className="item">
                        <article>
                            <h5>Contactos rapidos</h5>
                            <p>Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato com nossa equipe.</p>
                            <h1 className="text-second"><FiPhoneCall /> +351 967 903 868 </h1>
                            <p>Portugal, Porto, Lisboa, e Viana de Castelo</p>
                        </article>
                        <article>
                            <h5>Empresa</h5>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Noticias</a></li>
                                <li><a href="#">Carreiras</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Contactos</a></li>
                            </ul>
                        </article>
                        <article>
                            <h5>Nossos serviços</h5>
                            <ul>
                                <li><a href="#">Desinfestação de aranhas</a></li>
                                <li><a href="#">Desinfestação de baratas</a></li>
                                <li><a href="#">Desinfestação de fazendas</a></li>
                                <li><a href="#">Desinfestação de Roedores</a></li>
                                <li><a href="#">Desinfestação de Mosquitos</a></li>
                            </ul>
                        </article> 
                    </section>
                    <section className="item">
                        <article>
                            <button className="btn hvr-rectangle-out bg-main text-light">Solicitar Orcamento</button>
                            <div className="icons">
                                <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div>
                                <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
                                <div className="social-icon"><a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
