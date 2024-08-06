import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function AboutSection() {
    return (
        <div className='about-section'>
            <div className="wrapper">
                <div className="block-content">
                    <div className="block-text">
                        <small className="text-second text-3">Estamos comprometidos com a excelência na desinfestação!</small>
                        <h1 className='text-2'>Deixe-nos ajudá-lo com suas responsabilidades de limpeza e desinfecção.</h1>
                    </div> 
                    <div className="info-area">
                        <div className="text-area">
                            <p>Com mais de 35 anos conhecendo todo tipo de cliente, desde proprietários de residências
                                até gerentes de instalações e propriedades e tomadores de decisão na área de saúde. Nossa paixão incansável
                                pela excelência e atendimento ao cliente significa que investimos continuamente na melhoria de nossos processos.</p>
                            <p>A Iberpragas é uma fornecedora líder de serviços de desinfestação e restauração nos
                                mercados residencial e comercial, operando através de uma extensa rede de serviços.</p>
                            <button className="btn bg-main text-white"><FaArrowRight /> Saiba mais</button>
                        </div>
                        <div className="block-image">
                            <img src={require("../../Assets/Images/img_5.webp")} alt="#" />
                            <div className="block-over">
                                <div className="circle-box">
                                    <div className="content">
                                        <h1>Desinfestação de pestes em casas </h1>
                                        <p>Limparaemos e protegeremos a sua comunidade</p>
                                        <h3 className="text-second">€40<small> / Hora</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection
